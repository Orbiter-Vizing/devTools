/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IMessageValidateStation,
  IMessageValidateStationInterface,
} from "../../../contracts/interface/IMessageValidateStation";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint64",
                name: "srcChainId",
                type: "uint64",
              },
              {
                internalType: "uint24",
                name: "nonceLaunch",
                type: "uint24",
              },
              {
                internalType: "bytes32",
                name: "srcTxHash",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "destTxHash",
                type: "bytes32",
              },
              {
                internalType: "uint64",
                name: "srcTxTimestamp",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "destTxTimestamp",
                type: "uint64",
              },
            ],
            internalType: "struct IMessageStruct.SignedMessageBase",
            name: "base",
            type: "tuple",
          },
          {
            components: [
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
            internalType: "struct IMessageStruct.launchParams",
            name: "params",
            type: "tuple",
          },
        ],
        indexed: true,
        internalType: "struct IMessageStruct.RollupMessageStruct[]",
        name: "signedMessage",
        type: "tuple[]",
      },
    ],
    name: "LaunchMessageVerified",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "validator",
        type: "address",
      },
    ],
    name: "RegistedValidator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "validators",
        type: "address[]",
      },
      {
        internalType: "bool[]",
        name: "statues",
        type: "bool[]",
      },
    ],
    name: "SetupValidator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "SignaturesThreshold",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ValidatorCount",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proof",
        type: "bytes32[]",
      },
      {
        internalType: "bool[]",
        name: "proofFlags",
        type: "bool[]",
      },
      {
        internalType: "bytes32",
        name: "root",
        type: "bytes32",
      },
      {
        components: [
          {
            components: [
              {
                internalType: "uint64",
                name: "srcChainId",
                type: "uint64",
              },
              {
                internalType: "uint24",
                name: "nonceLaunch",
                type: "uint24",
              },
              {
                internalType: "bytes32",
                name: "srcTxHash",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "destTxHash",
                type: "bytes32",
              },
              {
                internalType: "uint64",
                name: "srcTxTimestamp",
                type: "uint64",
              },
              {
                internalType: "uint64",
                name: "destTxTimestamp",
                type: "uint64",
              },
            ],
            internalType: "struct IMessageStruct.SignedMessageBase",
            name: "base",
            type: "tuple",
          },
          {
            components: [
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
            internalType: "struct IMessageStruct.launchParams",
            name: "params",
            type: "tuple",
          },
        ],
        internalType: "struct IMessageStruct.RollupMessageStruct[]",
        name: "signedMessage",
        type: "tuple[]",
      },
      {
        internalType: "bytes[]",
        name: "launchParamsSignatures",
        type: "bytes[]",
      },
    ],
    name: "VerifyLaunchMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IMessageValidateStation__factory {
  static readonly abi = _abi;
  static createInterface(): IMessageValidateStationInterface {
    return new Interface(_abi) as IMessageValidateStationInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IMessageValidateStation {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IMessageValidateStation;
  }
}
