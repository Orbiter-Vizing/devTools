/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  MessageEmitter,
  MessageEmitterInterface,
} from "../../../@vizing/contracts/MessageEmitter";

const _abi = [
  {
    inputs: [],
    name: "LaunchPad",
    outputs: [
      {
        internalType: "contract IMessageChannel",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes1",
        name: "mode",
        type: "bytes1",
      },
      {
        internalType: "bytes1",
        name: "tokenSymbol",
        type: "bytes1",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PacketAdditionParams",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes1",
        name: "mode",
        type: "bytes1",
      },
      {
        internalType: "address",
        name: "targetContract",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "gasLimit",
        type: "uint24",
      },
      {
        internalType: "uint64",
        name: "price",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "PacketMessage",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes1[]",
        name: "mode",
        type: "bytes1[]",
      },
      {
        internalType: "address[]",
        name: "targetContract",
        type: "address[]",
      },
      {
        internalType: "uint24[]",
        name: "gasLimit",
        type: "uint24[]",
      },
      {
        internalType: "uint64[]",
        name: "price",
        type: "uint64[]",
      },
      {
        internalType: "bytes[]",
        name: "message",
        type: "bytes[]",
      },
    ],
    name: "PacketMessages",
    outputs: [
      {
        internalType: "bytes[]",
        name: "",
        type: "bytes[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "destChainid",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "computeTradeFee",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultBridgeMode",
    outputs: [
      {
        internalType: "bytes1",
        name: "",
        type: "bytes1",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "earliestArrivalTimestamp",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "latestArrivalTimestamp",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "relayer",
        type: "address",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "destChainid",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "additionParams",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "emit2LaunchPad",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "destChainid",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "additionParams",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "estimateVizingGasFee",
    outputs: [
      {
        internalType: "uint256",
        name: "vizingGasFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "destChainid",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "exactInput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "destChainid",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "exactOutput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxArrivalTime",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxGasLimit",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minArrivalTime",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minGasLimit",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "selectedRelayer",
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

export class MessageEmitter__factory {
  static readonly abi = _abi;
  static createInterface(): MessageEmitterInterface {
    return new Interface(_abi) as MessageEmitterInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MessageEmitter {
    return new Contract(address, _abi, runner) as unknown as MessageEmitter;
  }
}
