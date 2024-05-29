import {
  keccak256,
  Signer,
  BytesLike,
  BigNumberish,
  ContractTransactionReceipt,
  Interface,
  randomBytes,
  LogDescription,
  TransactionReceipt,
  Wallet,
} from "ethers";
import * as vizing from "./coreContracts";
import { IMessageStruct } from "./coreContracts/contracts/interface/IMessageSpaceStation";
// parseLaunch event
export async function parseLaunchEvent(receipt: TransactionReceipt) {
  const logArray = parseEvents(LAUNCH_EVENT, receipt!);
  const launchMessages: LaunchMessage[] = [];
  for (const log of logArray) {
    const rawMessages = log?.args as unknown as LaunchMessage;
    const _rawLaunchMessages = {
      nonce: rawMessages.nonce,
      earliestArrivalTimestamp: rawMessages.earliestArrivalTimestamp,
      latestArrivalTimestamp: rawMessages.latestArrivalTimestamp,
      relayer: rawMessages.relayer,
      sender: rawMessages.sender,
      srcContract: rawMessages.srcContract,
      value: rawMessages.value,
      destChainid: rawMessages.destChainid,
      additionParams: rawMessages.additionParams,
      message: rawMessages.message,
    };
    launchMessages.push(_rawLaunchMessages);
  }
  return launchMessages;
}

const LAUNCH_EVENT = new Interface([
  "event SuccessfulLaunchMessage(uint32 indexed nonce, uint64 earliestArrivalTimestamp, uint64 latestArrivalTimestamp, address relayer, address sender, address srcContract, uint256 value, uint64 destChainid, bytes additionParams, bytes message)",
]);

export interface LaunchMessage {
  nonce: BigInt;
  earliestArrivalTimestamp: BigInt;
  latestArrivalTimestamp: BigInt;
  relayer: string;
  sender: string;
  srcContract: string;
  value: BigInt;
  destChainid: BigInt;
  additionParams: string;
  message: string;
}

export function parseEvents(
  iface: Interface,
  receipt: TransactionReceipt
): (LogDescription | undefined | null)[] {
  return receipt.logs
    .map((log) => {
      try {
        const aLog = JSON.parse(JSON.stringify(log));
        return iface.parseLog(aLog);
      } catch (e) {
        return undefined;
      }
    })
    .filter((n: LogDescription | undefined | null) => n);
}

export async function relayerMessage(
  VizingStation: vizing.MessageSpaceStation,
  args: {
    mptRoot: BytesLike;
    aggregatedearliestArrivalTimestamp: BigNumberish;
    aggregatedLatestArrivalTimestamp: BigNumberish;
    params: IMessageStruct.LandingParamsStruct[];
  }
) {
  const vizingStation = VizingStation;

  const totalValue = args.params.reduce(
    (acc, cur) => acc + BigInt(cur.value),
    BigInt(0)
  );

  const proofs: string[][] = [];

  const tx = await vizingStation.Landing(args.params, proofs, {
    value: totalValue,
  });

  const receipt = await tx.wait();
  return receipt;
}

// build landing params by launchMessage
export function buildLandingParams(
  launchMessage: LaunchMessage,
  srcChainId: BigInt
): IMessageStruct.LandingParamsStruct {
  return {
    messageId: keccak256(launchMessage.message) as BytesLike,
    earliestArrivalTimestamp:
      launchMessage.earliestArrivalTimestamp as BigNumberish,
    latestArrivalTimestamp:
      launchMessage.latestArrivalTimestamp as BigNumberish,
    srcChainid: srcChainId as BigNumberish,
    srcTxHash: randomBytes(32) as BytesLike,
    srcContract: padAddressTo32Bytes(launchMessage.srcContract),
    srcChainNonce: launchMessage.nonce as BigNumberish,
    sender: launchMessage.sender,
    value: launchMessage.value as BigNumberish,
    additionParams: launchMessage.additionParams,
    message: launchMessage.message,
  };
}

export function padAddressTo32Bytes(address: string): string {
  return "0x" + address.slice(2).padStart(64, "0");
}
