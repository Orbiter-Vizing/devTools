/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IDeploy,
  IDeployInterface,
} from "../../../../../@axelar-network/axelar-gmp-sdk-solidity/contracts/interfaces/IDeploy";

const _abi = [
  {
    inputs: [],
    name: "AlreadyDeployed",
    type: "error",
  },
  {
    inputs: [],
    name: "DeployFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyBytecode",
    type: "error",
  },
] as const;

export class IDeploy__factory {
  static readonly abi = _abi;
  static createInterface(): IDeployInterface {
    return new Interface(_abi) as IDeployInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IDeploy {
    return new Contract(address, _abi, runner) as unknown as IDeploy;
  }
}
