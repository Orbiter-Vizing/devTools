/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IMessageReceiver,
  IMessageReceiverInterface,
} from "../../../contracts/interface/IMessageReceiver";

const _abi = [
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

export class IMessageReceiver__factory {
  static readonly abi = _abi;
  static createInterface(): IMessageReceiverInterface {
    return new Interface(_abi) as IMessageReceiverInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IMessageReceiver {
    return new Contract(address, _abi, runner) as unknown as IMessageReceiver;
  }
}
