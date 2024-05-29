/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IMessageSpaceStation,
  IMessageSpaceStationInterface,
} from "../../../../@vizing/contracts/interface/IMessageSpaceStation";

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
  {
    inputs: [],
    name: "Chainid",
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
    inputs: [
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
        internalType: "struct IMessageStruct.landingParams[]",
        name: "params",
        type: "tuple[]",
      },
    ],
    name: "EstimateExecuteGas",
    outputs: [
      {
        internalType: "bool[]",
        name: "",
        type: "bool[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "chainId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "GetNonceLanding",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "chainId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "GetNonceLaunch",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
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
        internalType: "struct IMessageStruct.landingParams[]",
        name: "params",
        type: "tuple[]",
      },
      {
        internalType: "bytes[][]",
        name: "proofs",
        type: "bytes[][]",
      },
    ],
    name: "Landing",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
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
        internalType: "struct IMessageStruct.landingParams[]",
        name: "params",
        type: "tuple[]",
      },
      {
        internalType: "uint24",
        name: "gasLimit",
        type: "uint24",
      },
      {
        internalType: "bytes[][]",
        name: "proofs",
        type: "bytes[][]",
      },
    ],
    name: "LandingSpecifiedGas",
    outputs: [],
    stateMutability: "payable",
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
    name: "Launch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "stop",
        type: "bool",
      },
    ],
    name: "PauseEngine",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
        internalType: "struct IMessageStruct.landingParams[]",
        name: "params",
        type: "tuple[]",
      },
    ],
    name: "SimulateLanding",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "Version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "engineState",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "value",
        type: "uint256[]",
      },
      {
        internalType: "uint64[]",
        name: "destChainid",
        type: "uint64[]",
      },
      {
        internalType: "bytes[]",
        name: "additionParams",
        type: "bytes[]",
      },
      {
        internalType: "bytes[]",
        name: "message",
        type: "bytes[]",
      },
    ],
    name: "estimateGas",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    name: "estimateGas",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "destChainid",
        type: "uint64",
      },
    ],
    name: "estimatePrice",
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
    inputs: [
      {
        internalType: "bytes1",
        name: "hook",
        type: "bytes1",
      },
    ],
    name: "expertLandingHook",
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
  {
    inputs: [
      {
        internalType: "bytes1",
        name: "hook",
        type: "bytes1",
      },
    ],
    name: "expertLaunchHook",
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
  {
    inputs: [],
    name: "gasSystemAddr",
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
  {
    inputs: [
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
            internalType: "uint256[]",
            name: "value",
            type: "uint256[]",
          },
          {
            internalType: "uint64[]",
            name: "destChainid",
            type: "uint64[]",
          },
          {
            internalType: "bytes[]",
            name: "additionParams",
            type: "bytes[]",
          },
          {
            internalType: "bytes[]",
            name: "message",
            type: "bytes[]",
          },
        ],
        internalType: "struct IMessageStruct.launchEnhanceParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "launchMultiChain",
    outputs: [],
    stateMutability: "payable",
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
    name: "padState",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "bool[]",
        name: "states",
        type: "bool[]",
      },
    ],
    name: "roleConfiguration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes1[]",
        name: "ids",
        type: "bytes1[]",
      },
      {
        internalType: "address[]",
        name: "hooks",
        type: "address[]",
      },
    ],
    name: "setExpertLandingHooks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes1[]",
        name: "ids",
        type: "bytes1[]",
      },
      {
        internalType: "address[]",
        name: "hooks",
        type: "address[]",
      },
    ],
    name: "setExpertLaunchHooks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "gasSystemAddress",
        type: "address",
      },
    ],
    name: "setGasSystem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address[]",
        name: "accounts",
        type: "address[]",
      },
      {
        internalType: "bool[]",
        name: "states",
        type: "bool[]",
      },
    ],
    name: "stationAdminSetRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IMessageSpaceStation__factory {
  static readonly abi = _abi;
  static createInterface(): IMessageSpaceStationInterface {
    return new Interface(_abi) as IMessageSpaceStationInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IMessageSpaceStation {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IMessageSpaceStation;
  }
}