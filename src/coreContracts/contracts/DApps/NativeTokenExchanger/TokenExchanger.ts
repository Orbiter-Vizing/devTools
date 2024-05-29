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
} from "../../../common";

export interface TokenExchangerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "LandingPad"
      | "LaunchPad"
      | "PacketAdditionParams"
      | "PacketMessage"
      | "PacketMessages"
      | "computeTradeFee"
      | "defaultBridgeMode"
      | "emit2LaunchPad"
      | "estimateVizingGasFee"
      | "exactInput"
      | "exactOutput"
      | "exchangeAssetExactInput"
      | "exchangeAssetExactOutput"
      | "maxArrivalTime"
      | "maxGasLimit"
      | "minArrivalTime"
      | "minGasLimit"
      | "mirrorExchanger"
      | "owner"
      | "receiveStandardMessage"
      | "renounceOwnership"
      | "selectedRelayer"
      | "setMirrorExchangers"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;

  encodeFunctionData(
    functionFragment: "LandingPad",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "LaunchPad", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "PacketAdditionParams",
    values: [BytesLike, BytesLike, AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "PacketMessage",
    values: [BytesLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "PacketMessages",
    values: [
      BytesLike[],
      AddressLike[],
      BigNumberish[],
      BigNumberish[],
      BytesLike[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "computeTradeFee",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "defaultBridgeMode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit2LaunchPad",
    values: [
      BigNumberish,
      BigNumberish,
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "estimateVizingGasFee",
    values: [BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "exactInput",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "exactOutput",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeAssetExactInput",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "exchangeAssetExactOutput",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "maxArrivalTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "maxGasLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minArrivalTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minGasLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "mirrorExchanger",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "receiveStandardMessage",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "selectedRelayer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setMirrorExchangers",
    values: [BigNumberish[], AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "LandingPad", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "LaunchPad", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "PacketAdditionParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PacketMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PacketMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeTradeFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "defaultBridgeMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emit2LaunchPad",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimateVizingGasFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exactInput", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exactOutput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeAssetExactInput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exchangeAssetExactOutput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxArrivalTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxGasLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minArrivalTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minGasLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "mirrorExchanger",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "receiveStandardMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "selectedRelayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMirrorExchangers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface TokenExchanger extends BaseContract {
  connect(runner?: ContractRunner | null): TokenExchanger;
  waitForDeployment(): Promise<this>;

  interface: TokenExchangerInterface;

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

  LandingPad: TypedContractMethod<[], [string], "view">;

  LaunchPad: TypedContractMethod<[], [string], "view">;

  PacketAdditionParams: TypedContractMethod<
    [
      mode: BytesLike,
      tokenSymbol: BytesLike,
      sender: AddressLike,
      receiver: AddressLike,
      amount: BigNumberish
    ],
    [string],
    "view"
  >;

  PacketMessage: TypedContractMethod<
    [
      mode: BytesLike,
      targetContract: AddressLike,
      gasLimit: BigNumberish,
      price: BigNumberish,
      message: BytesLike
    ],
    [string],
    "view"
  >;

  PacketMessages: TypedContractMethod<
    [
      mode: BytesLike[],
      targetContract: AddressLike[],
      gasLimit: BigNumberish[],
      price: BigNumberish[],
      message: BytesLike[]
    ],
    [string[]],
    "view"
  >;

  computeTradeFee: TypedContractMethod<
    [destChainid: BigNumberish, value: BigNumberish],
    [bigint],
    "view"
  >;

  defaultBridgeMode: TypedContractMethod<[], [string], "view">;

  emit2LaunchPad: TypedContractMethod<
    [
      earliestArrivalTimestamp: BigNumberish,
      latestArrivalTimestamp: BigNumberish,
      relayer: AddressLike,
      sender: AddressLike,
      value: BigNumberish,
      destChainid: BigNumberish,
      additionParams: BytesLike,
      message: BytesLike
    ],
    [void],
    "payable"
  >;

  estimateVizingGasFee: TypedContractMethod<
    [
      value: BigNumberish,
      destChainid: BigNumberish,
      additionParams: BytesLike,
      message: BytesLike
    ],
    [bigint],
    "view"
  >;

  exactInput: TypedContractMethod<
    [destChainid: BigNumberish, amountIn: BigNumberish],
    [bigint],
    "view"
  >;

  exactOutput: TypedContractMethod<
    [destChainid: BigNumberish, amountOut: BigNumberish],
    [bigint],
    "view"
  >;

  exchangeAssetExactInput: TypedContractMethod<
    [destinationChainId: BigNumberish, tokenReceiver: AddressLike],
    [void],
    "payable"
  >;

  exchangeAssetExactOutput: TypedContractMethod<
    [
      destinationChainId: BigNumberish,
      tokenReceiver: AddressLike,
      amountOut: BigNumberish
    ],
    [void],
    "payable"
  >;

  maxArrivalTime: TypedContractMethod<[], [bigint], "view">;

  maxGasLimit: TypedContractMethod<[], [bigint], "view">;

  minArrivalTime: TypedContractMethod<[], [bigint], "view">;

  minGasLimit: TypedContractMethod<[], [bigint], "view">;

  mirrorExchanger: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  receiveStandardMessage: TypedContractMethod<
    [srcChainId: BigNumberish, srcContract: BigNumberish, message: BytesLike],
    [void],
    "payable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  selectedRelayer: TypedContractMethod<[], [string], "view">;

  setMirrorExchangers: TypedContractMethod<
    [chainIds: BigNumberish[], exchangers: AddressLike[]],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "LandingPad"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "LaunchPad"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "PacketAdditionParams"
  ): TypedContractMethod<
    [
      mode: BytesLike,
      tokenSymbol: BytesLike,
      sender: AddressLike,
      receiver: AddressLike,
      amount: BigNumberish
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "PacketMessage"
  ): TypedContractMethod<
    [
      mode: BytesLike,
      targetContract: AddressLike,
      gasLimit: BigNumberish,
      price: BigNumberish,
      message: BytesLike
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "PacketMessages"
  ): TypedContractMethod<
    [
      mode: BytesLike[],
      targetContract: AddressLike[],
      gasLimit: BigNumberish[],
      price: BigNumberish[],
      message: BytesLike[]
    ],
    [string[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "computeTradeFee"
  ): TypedContractMethod<
    [destChainid: BigNumberish, value: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "defaultBridgeMode"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "emit2LaunchPad"
  ): TypedContractMethod<
    [
      earliestArrivalTimestamp: BigNumberish,
      latestArrivalTimestamp: BigNumberish,
      relayer: AddressLike,
      sender: AddressLike,
      value: BigNumberish,
      destChainid: BigNumberish,
      additionParams: BytesLike,
      message: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "estimateVizingGasFee"
  ): TypedContractMethod<
    [
      value: BigNumberish,
      destChainid: BigNumberish,
      additionParams: BytesLike,
      message: BytesLike
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "exactInput"
  ): TypedContractMethod<
    [destChainid: BigNumberish, amountIn: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "exactOutput"
  ): TypedContractMethod<
    [destChainid: BigNumberish, amountOut: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "exchangeAssetExactInput"
  ): TypedContractMethod<
    [destinationChainId: BigNumberish, tokenReceiver: AddressLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "exchangeAssetExactOutput"
  ): TypedContractMethod<
    [
      destinationChainId: BigNumberish,
      tokenReceiver: AddressLike,
      amountOut: BigNumberish
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "maxArrivalTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "maxGasLimit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minArrivalTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minGasLimit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "mirrorExchanger"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "receiveStandardMessage"
  ): TypedContractMethod<
    [srcChainId: BigNumberish, srcContract: BigNumberish, message: BytesLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "selectedRelayer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setMirrorExchangers"
  ): TypedContractMethod<
    [chainIds: BigNumberish[], exchangers: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;

  filters: {
    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
  };
}
