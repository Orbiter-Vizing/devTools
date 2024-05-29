import { Signer } from "ethers";
// import { ZKAFactory, SPVVerifier } from "../zkpContractsImpl";
import { MessageSpaceStation } from "../coreContracts";
export interface IBoosterGlobalState {
  [k: string]: boolean | Signer | vizingPadMeta[];
  isMainnet: boolean;
  signer: Signer;
  meta: vizingPadMeta[];
}

export interface vizingPadMeta {
  chainId: BigInt;
  vizingPad: string;
}

export interface IVerifierMeta {
  verifierAddress: string;
  zkpVerifierName: string;
  url: string;
  deployer: string;
  deployTimestamp: BigInt;
}
