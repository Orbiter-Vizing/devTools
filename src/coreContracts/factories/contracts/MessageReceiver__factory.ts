/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  MessageReceiver,
  MessageReceiverInterface,
} from "../../contracts/MessageReceiver";

const _abi = [
  {
    inputs: [],
    name: "LandingPadAccessDenied",
    type: "error",
  },
  {
    inputs: [],
    name: "NotImplement",
    type: "error",
  },
  {
    inputs: [],
    name: "LandingPad",
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
        internalType: "uint64",
        name: "srcChainId",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "srcContract",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "receiveStandardMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class MessageReceiver__factory {
  static readonly abi = _abi;
  static createInterface(): MessageReceiverInterface {
    return new Interface(_abi) as MessageReceiverInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MessageReceiver {
    return new Contract(address, _abi, runner) as unknown as MessageReceiver;
  }
}
