/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  Deployer,
  DeployerInterface,
} from "../../../../../@axelar-network/axelar-gmp-sdk-solidity/contracts/deploy/Deployer";

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
    name: "DeployInitFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyBytecode",
    type: "error",
  },
  {
    inputs: [],
    name: "NativeTransferFailed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "deployedAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "bytecodeHash",
        type: "bytes32",
      },
    ],
    name: "Deployed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "bytecode",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "deployedAddress_",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "bytecode",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "init",
        type: "bytes",
      },
    ],
    name: "deployAndInit",
    outputs: [
      {
        internalType: "address",
        name: "deployedAddress_",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "bytecode",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "deployedAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class Deployer__factory {
  static readonly abi = _abi;
  static createInterface(): DeployerInterface {
    return new Interface(_abi) as DeployerInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Deployer {
    return new Contract(address, _abi, runner) as unknown as Deployer;
  }
}
