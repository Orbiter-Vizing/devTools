import {
  Signer,
  ContractTransactionReceipt,
  keccak256,
  randomBytes,
  BigNumberish,
  BytesLike,
  TransactionReceipt,
} from "ethers";
import { IBoosterGlobalState, vizingPadMeta } from "../types";
import * as globalState from "../globalState";
import * as deployment from "../deployment";
import {
  LaunchMessage,
  buildLandingParams,
  parseLaunchEvent,
  relayerMessage,
} from "../utils";
import { IMessageStruct } from "../coreContracts/contracts/interface/IMessageSpaceStation";
import { fetchLaunchPadAddress } from "../deployment";

const defaultChainIds: BigInt[] = [BigInt(28518), BigInt(28519), BigInt(28520)];

export class VizingBooster {
  private static instance: VizingBooster;
  constructor(signer: Signer) {
    globalState.setGlobalState({ signer });
  }

  async build(chainIds: BigInt[] = defaultChainIds): Promise<VizingBooster> {
    const state = globalState.getGlobalState();
    const signer = state.signer;
    let nonce = await signer.getNonce();
    let meta: vizingPadMeta[] = state.meta;
    for (const chainId of chainIds) {
      const gasSystem = await deployment.deployGasSystem(signer, nonce);
      nonce++;
      const vizingPad = await deployment.deployVizingPad(
        signer,
        nonce,
        await gasSystem.getAddress()
      );
      nonce++;
      meta.push({
        chainId,
        vizingPad: await vizingPad.getAddress(),
      });
    }
    globalState.setGlobalState({ meta });
    return VizingBooster.instance;
  }

  async launch(receipt: TransactionReceipt): Promise<void> {
    const signer = globalState.getGlobalState().signer;
    if (!receipt.to) {
      throw new Error("to address is empty");
    }

    if (receipt == null) {
      throw new Error("receipt not found");
    }

    let launchMessage: LaunchMessage[] = await parseLaunchEvent(
      receipt as unknown as ContractTransactionReceipt
    );

    const srcLaunchPad = await fetchLaunchPadAddress(signer, receipt.to!);

    for (const message of launchMessage) {
      const vizingPad = this.findVizingPadByChainId(message.destChainid);
      if (!vizingPad) {
        throw new Error(
          'vizingPad not deploy, please run "new VizingBooster(signer)" first'
        );
      }

      const destChainid = this.findChainIdByVizingPad(srcLaunchPad) as BigInt;
      if (!destChainid) {
        throw new Error(
          'destChainid not found, please run "new VizingBooster(signer)" first, or use correct chainId'
        );
      }
      const LandingParams: IMessageStruct.LandingParamsStruct =
        buildLandingParams(message, destChainid);

      const receiptRelay = await relayerMessage(
        await deployment.buildVizingPadInstance(signer, vizingPad),
        {
          mptRoot: keccak256(randomBytes(32)) as BytesLike,
          aggregatedearliestArrivalTimestamp:
            message.earliestArrivalTimestamp as BigNumberish,
          aggregatedLatestArrivalTimestamp:
            message.latestArrivalTimestamp as BigNumberish,
          params: [LandingParams],
        }
      );
    }
  }

  findVizingPadByChainId(chainId: BigInt): string | undefined {
    return globalState
      .getGlobalState()
      .meta.find((meta) => meta.chainId === chainId)?.vizingPad;
  }

  findChainIdByVizingPad(vizingPad: string): BigInt | undefined {
    return globalState
      .getGlobalState()
      .meta.find((meta) => meta.vizingPad === vizingPad)?.chainId;
  }

  vizingPadList(): vizingPadMeta[] {
    return globalState.getGlobalState().meta;
  }

  getConfig(): IBoosterGlobalState {
    return globalState.getGlobalState();
  }

  setConfig(newState: Partial<IBoosterGlobalState> = {}) {
    globalState.setGlobalState(newState);
  }

  connect(signer: Signer) {
    globalState.setGlobalState({ signer });
  }

  public static getInstance(signer: Signer) {
    if (!VizingBooster.instance) {
      globalState.setGlobalState({ signer });
    }
    return VizingBooster.instance;
  }
}
