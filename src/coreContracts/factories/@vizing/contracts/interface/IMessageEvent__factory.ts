/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IMessageEvent,
  IMessageEventInterface,
} from "../../../../@vizing/contracts/interface/IMessageEvent";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bool",
        name: "isPause",
        type: "bool",
      },
    ],
    name: "EngineStateRefreshing",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "gasSystemAddress",
        type: "address",
      },
    ],
    name: "PaymentSystemChanging",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "messageId",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "messageId",
            type: "bytes32",
          },
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
            internalType: "uint64",
            name: "srcChainid",
            type: "uint64",
          },
          {
            internalType: "bytes32",
            name: "srcTxHash",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "srcContract",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "srcChainNonce",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "sender",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
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
        indexed: false,
        internalType: "struct IMessageStruct.landingParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "SuccessfulLanding",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "nonce",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "earliestArrivalTimestamp",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "latestArrivalTimestamp",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "srcContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "destChainid",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "additionParams",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "SuccessfulLaunchMessage",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32[]",
        name: "nonce",
        type: "uint32[]",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "earliestArrivalTimestamp",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "latestArrivalTimestamp",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "srcContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "value",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "uint64[]",
        name: "destChainid",
        type: "uint64[]",
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "additionParams",
        type: "bytes[]",
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "message",
        type: "bytes[]",
      },
    ],
    name: "SuccessfulLaunchMultiMessages",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawRequest",
    type: "event",
  },
] as const;

export class IMessageEvent__factory {
  static readonly abi = _abi;
  static createInterface(): IMessageEventInterface {
    return new Interface(_abi) as IMessageEventInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IMessageEvent {
    return new Contract(address, _abi, runner) as unknown as IMessageEvent;
  }
}
