import { setGlobalState } from "./globalState";
import { Signer, ContractTransactionResponse } from "ethers";
import * as vizing from "./coreContracts";

export async function deployGasSystem(
  signer: Signer,
  nonce: number
): Promise<vizing.VizingGasSystem> {
  const managerAddress = await signer.getAddress();
  const VizingGasSystem = await new vizing.VizingGasSystem__factory(
    signer
  ).deploy(managerAddress, [managerAddress], [managerAddress], 1000000000, {
    nonce: nonce,
  });
  await VizingGasSystem.waitForDeployment();
  return VizingGasSystem;
}

export async function deployVizingPad(
  signer: Signer,
  nonce: number,
  gasSystem: string
): Promise<vizing.MessageSpaceStation> {
  const managerAddress = await signer.getAddress();
  const vizingPad = await new vizing.MessageSpaceStation__factory(
    signer
  ).deploy(
    gasSystem,
    managerAddress,
    [managerAddress],
    [managerAddress],
    [managerAddress],
    [managerAddress],
    [managerAddress],
    {
      nonce: nonce,
    }
  );
  await vizingPad.waitForDeployment();
  return vizingPad;
}

export async function fetchLaunchPadAddress(
  signer: Signer,
  address: string,
  chainIdInMeta: BigInt
): Promise<string> {
  if (chainIdInMeta) {
    return address;
  }
  const instance = vizing.OmniToken__factory.connect(address, signer);
  try {
    return await instance.LaunchPad();
  } catch (err) {
    throw err;
  }
}

export async function buildVizingPadInstance(
  signer: Signer,
  vizingPad: string
): Promise<vizing.MessageSpaceStation> {
  return vizing.MessageSpaceStation__factory.connect(vizingPad, signer);
}
