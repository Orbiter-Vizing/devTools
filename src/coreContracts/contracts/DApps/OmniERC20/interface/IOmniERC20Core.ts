/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

export interface IOmniERC20CoreInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "estimateTransferToChainFee(uint64,address,uint256)"
      | "estimateTransferToChainFee(uint64,bytes,bytes)"
      | "fetchTransferMessage"
      | "fetchTransferPrice"
      | "fetchTransferSignature"
      | "receiveTransferFromOtherChain"
      | "transferToChain(uint64,address,uint256)"
      | "transferToChain(uint64,uint256,bytes,bytes)"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "TransferToChain"): EventFragment;

  encodeFunctionData(
    functionFragment: "estimateTransferToChainFee(uint64,address,uint256)",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "estimateTransferToChainFee(uint64,bytes,bytes)",
    values: [BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fetchTransferMessage",
    values: [AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fetchTransferPrice",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "fetchTransferSignature",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveTransferFromOtherChain",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferToChain(uint64,address,uint256)",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferToChain(uint64,uint256,bytes,bytes)",
    values: [BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "estimateTransferToChainFee(uint64,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimateTransferToChainFee(uint64,bytes,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fetchTransferMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fetchTransferPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fetchTransferSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveTransferFromOtherChain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferToChain(uint64,address,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferToChain(uint64,uint256,bytes,bytes)",
    data: BytesLike
  ): Result;
}

export namespace TransferToChainEvent {
  export type InputTuple = [
    tokenSender: AddressLike,
    amount: BigNumberish,
    destinationChainId: BigNumberish
  ];
  export type OutputTuple = [
    tokenSender: string,
    amount: bigint,
    destinationChainId: bigint
  ];
  export interface OutputObject {
    tokenSender: string;
    amount: bigint;
    destinationChainId: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IOmniERC20Core extends BaseContract {
  connect(runner?: ContractRunner | null): IOmniERC20Core;
  waitForDeployment(): Promise<this>;

  interface: IOmniERC20CoreInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  "estimateTransferToChainFee(uint64,address,uint256)": TypedContractMethod<
    [
      destinationChainId: BigNumberish,
      tokenReceiver: AddressLike,
      amount: BigNumberish
    ],
    [bigint],
    "view"
  >;

  "estimateTransferToChainFee(uint64,bytes,bytes)": TypedContractMethod<
    [
      destinationChainId: BigNumberish,
      additionalParams: BytesLike,
      packedMessage: BytesLike
    ],
    [bigint],
    "view"
  >;

  fetchTransferMessage: TypedContractMethod<
    [
      destinationOmniERC20: AddressLike,
      gasLimit: BigNumberish,
      price: BigNumberish,
      signature: BytesLike
    ],
    [string],
    "view"
  >;

  fetchTransferPrice: TypedContractMethod<
    [destinationOmniERC20: AddressLike, destChainid: BigNumberish],
    [bigint],
    "view"
  >;

  fetchTransferSignature: TypedContractMethod<
    [tokenReceiver: AddressLike, amount: BigNumberish],
    [string],
    "view"
  >;

  receiveTransferFromOtherChain: TypedContractMethod<
    [tokenReceiver: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  "transferToChain(uint64,address,uint256)": TypedContractMethod<
    [
      destinationChainId: BigNumberish,
      tokenReceiver: AddressLike,
      amount: BigNumberish
    ],
    [void],
    "payable"
  >;

  "transferToChain(uint64,uint256,bytes,bytes)": TypedContractMethod<
    [
      destinationChainId: BigNumberish,
      amount: BigNumberish,
      additionalParams: BytesLike,
      packedMessage: BytesLike
    ],
    [void],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "estimateTransferToChainFee(uint64,address,uint256)"
  ): TypedContractMethod<
    [
      destinationChainId: BigNumberish,
      tokenReceiver: AddressLike,
      amount: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "estimateTransferToChainFee(uint64,bytes,bytes)"
  ): TypedContractMethod<
    [
      destinationChainId: BigNumberish,
      additionalParams: BytesLike,
      packedMessage: BytesLike
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "fetchTransferMessage"
  ): TypedContractMethod<
    [
      destinationOmniERC20: AddressLike,
      gasLimit: BigNumberish,
      price: BigNumberish,
      signature: BytesLike
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "fetchTransferPrice"
  ): TypedContractMethod<
    [destinationOmniERC20: AddressLike, destChainid: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "fetchTransferSignature"
  ): TypedContractMethod<
    [tokenReceiver: AddressLike, amount: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "receiveTransferFromOtherChain"
  ): TypedContractMethod<
    [tokenReceiver: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferToChain(uint64,address,uint256)"
  ): TypedContractMethod<
    [
      destinationChainId: BigNumberish,
      tokenReceiver: AddressLike,
      amount: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "transferToChain(uint64,uint256,bytes,bytes)"
  ): TypedContractMethod<
    [
      destinationChainId: BigNumberish,
      amount: BigNumberish,
      additionalParams: BytesLike,
      packedMessage: BytesLike
    ],
    [void],
    "payable"
  >;

  getEvent(
    key: "TransferToChain"
  ): TypedContractEvent<
    TransferToChainEvent.InputTuple,
    TransferToChainEvent.OutputTuple,
    TransferToChainEvent.OutputObject
  >;

  filters: {
    "TransferToChain(address,uint256,uint64)": TypedContractEvent<
      TransferToChainEvent.InputTuple,
      TransferToChainEvent.OutputTuple,
      TransferToChainEvent.OutputObject
    >;
    TransferToChain: TypedContractEvent<
      TransferToChainEvent.InputTuple,
      TransferToChainEvent.OutputTuple,
      TransferToChainEvent.OutputObject
    >;
  };
}
