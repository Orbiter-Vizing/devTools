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
} from "../../common";

export declare namespace IMessageStruct {
  export type LandingParamsStruct = {
    messageId: BytesLike;
    earliestArrivalTimestamp: BigNumberish;
    latestArrivalTimestamp: BigNumberish;
    srcChainid: BigNumberish;
    srcTxHash: BytesLike;
    srcContract: BigNumberish;
    srcChainNonce: BigNumberish;
    sender: BigNumberish;
    value: BigNumberish;
    additionParams: BytesLike;
    message: BytesLike;
  };

  export type LandingParamsStructOutput = [
    messageId: string,
    earliestArrivalTimestamp: bigint,
    latestArrivalTimestamp: bigint,
    srcChainid: bigint,
    srcTxHash: string,
    srcContract: bigint,
    srcChainNonce: bigint,
    sender: bigint,
    value: bigint,
    additionParams: string,
    message: string
  ] & {
    messageId: string;
    earliestArrivalTimestamp: bigint;
    latestArrivalTimestamp: bigint;
    srcChainid: bigint;
    srcTxHash: string;
    srcContract: bigint;
    srcChainNonce: bigint;
    sender: bigint;
    value: bigint;
    additionParams: string;
    message: string;
  };

  export type LaunchEnhanceParamsStruct = {
    earliestArrivalTimestamp: BigNumberish;
    latestArrivalTimestamp: BigNumberish;
    relayer: AddressLike;
    sender: AddressLike;
    value: BigNumberish[];
    destChainid: BigNumberish[];
    additionParams: BytesLike[];
    message: BytesLike[];
  };

  export type LaunchEnhanceParamsStructOutput = [
    earliestArrivalTimestamp: bigint,
    latestArrivalTimestamp: bigint,
    relayer: string,
    sender: string,
    value: bigint[],
    destChainid: bigint[],
    additionParams: string[],
    message: string[]
  ] & {
    earliestArrivalTimestamp: bigint;
    latestArrivalTimestamp: bigint;
    relayer: string;
    sender: string;
    value: bigint[];
    destChainid: bigint[];
    additionParams: string[];
    message: string[];
  };
}

export interface MessageCoreInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "Chainid"
      | "DEFAULT_ADMIN_ROLE"
      | "ENGINE_ADMIN"
      | "EstimateExecuteGas"
      | "GASPOOL_ADMIN"
      | "GetNonceLanding"
      | "GetNonceLaunch"
      | "Landing"
      | "LandingSpecifiedGas"
      | "Launch"
      | "PauseEngine"
      | "REGISTERED_VALIDATOR"
      | "STATION_ADMIN"
      | "SimulateLanding"
      | "TRUSTED_RELAYER"
      | "Version"
      | "Withdraw"
      | "engineState"
      | "estimateGas(uint256[],uint64[],bytes[],bytes[])"
      | "estimateGas(uint256,uint64,bytes,bytes)"
      | "estimatePrice"
      | "expertLandingHook"
      | "expertLandingHooks"
      | "expertLaunchHook"
      | "expertLaunchHooks"
      | "gasSystem"
      | "gasSystemAddr"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "launchMultiChain"
      | "maxArrivalTime"
      | "minArrivalTime"
      | "nonceLanding"
      | "nonceLaunch"
      | "padState"
      | "renounceRole"
      | "revokeRole"
      | "roleConfiguration"
      | "setExpertLandingHooks"
      | "setExpertLaunchHooks"
      | "setGasSystem"
      | "stationAdminSetRole"
      | "supportsInterface"
      | "transferOwnership"
      | "validatorCount"
      | "validatorThreshold"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "EngineStateRefreshing"
      | "Initialized"
      | "PaymentSystemChanging"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "SuccessfulLanding"
      | "SuccessfulLaunchMessage"
      | "SuccessfulLaunchMultiMessages"
      | "WithdrawRequest"
  ): EventFragment;

  encodeFunctionData(functionFragment: "Chainid", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ENGINE_ADMIN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EstimateExecuteGas",
    values: [IMessageStruct.LandingParamsStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "GASPOOL_ADMIN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "GetNonceLanding",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "GetNonceLaunch",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "Landing",
    values: [IMessageStruct.LandingParamsStruct[], BytesLike[][]]
  ): string;
  encodeFunctionData(
    functionFragment: "LandingSpecifiedGas",
    values: [IMessageStruct.LandingParamsStruct[], BigNumberish, BytesLike[][]]
  ): string;
  encodeFunctionData(
    functionFragment: "Launch",
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
    functionFragment: "PauseEngine",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "REGISTERED_VALIDATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "STATION_ADMIN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SimulateLanding",
    values: [IMessageStruct.LandingParamsStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "TRUSTED_RELAYER",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "Version", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "Withdraw",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "engineState",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "estimateGas(uint256[],uint64[],bytes[],bytes[])",
    values: [BigNumberish[], BigNumberish[], BytesLike[], BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "estimateGas(uint256,uint64,bytes,bytes)",
    values: [BigNumberish, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "estimatePrice",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "expertLandingHook",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "expertLandingHooks",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "expertLaunchHook",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "expertLaunchHooks",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "gasSystem", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "gasSystemAddr",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "launchMultiChain",
    values: [IMessageStruct.LaunchEnhanceParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "maxArrivalTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "minArrivalTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "nonceLanding",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "nonceLaunch",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "padState", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "roleConfiguration",
    values: [BytesLike, AddressLike[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setExpertLandingHooks",
    values: [BytesLike[], AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setExpertLaunchHooks",
    values: [BytesLike[], AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setGasSystem",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "stationAdminSetRole",
    values: [BytesLike, AddressLike[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "validatorCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "validatorThreshold",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "Chainid", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ENGINE_ADMIN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EstimateExecuteGas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GASPOOL_ADMIN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GetNonceLanding",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GetNonceLaunch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "Landing", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "LandingSpecifiedGas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "Launch", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "PauseEngine",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REGISTERED_VALIDATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "STATION_ADMIN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SimulateLanding",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TRUSTED_RELAYER",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "Version", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "Withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "engineState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimateGas(uint256[],uint64[],bytes[],bytes[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimateGas(uint256,uint64,bytes,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "estimatePrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "expertLandingHook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "expertLandingHooks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "expertLaunchHook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "expertLaunchHooks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "gasSystem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "gasSystemAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "launchMultiChain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxArrivalTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "minArrivalTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nonceLanding",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nonceLaunch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "padState", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "roleConfiguration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExpertLandingHooks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExpertLaunchHooks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGasSystem",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stationAdminSetRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validatorCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validatorThreshold",
    data: BytesLike
  ): Result;
}

export namespace EngineStateRefreshingEvent {
  export type InputTuple = [isPause: boolean];
  export type OutputTuple = [isPause: boolean];
  export interface OutputObject {
    isPause: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PaymentSystemChangingEvent {
  export type InputTuple = [gasSystemAddress: AddressLike];
  export type OutputTuple = [gasSystemAddress: string];
  export interface OutputObject {
    gasSystemAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SuccessfulLandingEvent {
  export type InputTuple = [
    messageId: BytesLike,
    params: IMessageStruct.LandingParamsStruct
  ];
  export type OutputTuple = [
    messageId: string,
    params: IMessageStruct.LandingParamsStructOutput
  ];
  export interface OutputObject {
    messageId: string;
    params: IMessageStruct.LandingParamsStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SuccessfulLaunchMessageEvent {
  export type InputTuple = [
    nonce: BigNumberish,
    earliestArrivalTimestamp: BigNumberish,
    latestArrivalTimestamp: BigNumberish,
    relayer: AddressLike,
    sender: AddressLike,
    srcContract: AddressLike,
    value: BigNumberish,
    destChainid: BigNumberish,
    additionParams: BytesLike,
    message: BytesLike
  ];
  export type OutputTuple = [
    nonce: bigint,
    earliestArrivalTimestamp: bigint,
    latestArrivalTimestamp: bigint,
    relayer: string,
    sender: string,
    srcContract: string,
    value: bigint,
    destChainid: bigint,
    additionParams: string,
    message: string
  ];
  export interface OutputObject {
    nonce: bigint;
    earliestArrivalTimestamp: bigint;
    latestArrivalTimestamp: bigint;
    relayer: string;
    sender: string;
    srcContract: string;
    value: bigint;
    destChainid: bigint;
    additionParams: string;
    message: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SuccessfulLaunchMultiMessagesEvent {
  export type InputTuple = [
    nonce: BigNumberish[],
    earliestArrivalTimestamp: BigNumberish,
    latestArrivalTimestamp: BigNumberish,
    relayer: AddressLike,
    sender: AddressLike,
    srcContract: AddressLike,
    value: BigNumberish[],
    destChainid: BigNumberish[],
    additionParams: BytesLike[],
    message: BytesLike[]
  ];
  export type OutputTuple = [
    nonce: bigint[],
    earliestArrivalTimestamp: bigint,
    latestArrivalTimestamp: bigint,
    relayer: string,
    sender: string,
    srcContract: string,
    value: bigint[],
    destChainid: bigint[],
    additionParams: string[],
    message: string[]
  ];
  export interface OutputObject {
    nonce: bigint[];
    earliestArrivalTimestamp: bigint;
    latestArrivalTimestamp: bigint;
    relayer: string;
    sender: string;
    srcContract: string;
    value: bigint[];
    destChainid: bigint[];
    additionParams: string[];
    message: string[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawRequestEvent {
  export type InputTuple = [to: AddressLike, amount: BigNumberish];
  export type OutputTuple = [to: string, amount: bigint];
  export interface OutputObject {
    to: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MessageCore extends BaseContract {
  connect(runner?: ContractRunner | null): MessageCore;
  waitForDeployment(): Promise<this>;

  interface: MessageCoreInterface;

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

  Chainid: TypedContractMethod<[], [bigint], "view">;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  ENGINE_ADMIN: TypedContractMethod<[], [string], "view">;

  EstimateExecuteGas: TypedContractMethod<
    [params: IMessageStruct.LandingParamsStruct[]],
    [boolean[]],
    "nonpayable"
  >;

  GASPOOL_ADMIN: TypedContractMethod<[], [string], "view">;

  GetNonceLanding: TypedContractMethod<
    [chainId: BigNumberish, sender: AddressLike],
    [bigint],
    "view"
  >;

  GetNonceLaunch: TypedContractMethod<
    [chainId: BigNumberish, sender: AddressLike],
    [bigint],
    "view"
  >;

  Landing: TypedContractMethod<
    [params: IMessageStruct.LandingParamsStruct[], proofs: BytesLike[][]],
    [void],
    "payable"
  >;

  LandingSpecifiedGas: TypedContractMethod<
    [
      params: IMessageStruct.LandingParamsStruct[],
      gasLimit: BigNumberish,
      proofs: BytesLike[][]
    ],
    [void],
    "payable"
  >;

  Launch: TypedContractMethod<
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

  PauseEngine: TypedContractMethod<[stop: boolean], [void], "nonpayable">;

  REGISTERED_VALIDATOR: TypedContractMethod<[], [string], "view">;

  STATION_ADMIN: TypedContractMethod<[], [string], "view">;

  SimulateLanding: TypedContractMethod<
    [params: IMessageStruct.LandingParamsStruct[]],
    [void],
    "payable"
  >;

  TRUSTED_RELAYER: TypedContractMethod<[], [string], "view">;

  Version: TypedContractMethod<[], [string], "view">;

  Withdraw: TypedContractMethod<
    [amount: BigNumberish, to: AddressLike],
    [void],
    "nonpayable"
  >;

  engineState: TypedContractMethod<[], [bigint], "view">;

  "estimateGas(uint256[],uint64[],bytes[],bytes[])": TypedContractMethod<
    [
      value: BigNumberish[],
      destChainid: BigNumberish[],
      additionParams: BytesLike[],
      message: BytesLike[]
    ],
    [bigint],
    "view"
  >;

  "estimateGas(uint256,uint64,bytes,bytes)": TypedContractMethod<
    [
      value: BigNumberish,
      destChainid: BigNumberish,
      additionParams: BytesLike,
      message: BytesLike
    ],
    [bigint],
    "view"
  >;

  estimatePrice: TypedContractMethod<
    [sender: AddressLike, destChainId: BigNumberish],
    [bigint],
    "view"
  >;

  expertLandingHook: TypedContractMethod<[hook: BytesLike], [string], "view">;

  expertLandingHooks: TypedContractMethod<[arg0: BytesLike], [string], "view">;

  expertLaunchHook: TypedContractMethod<[hook: BytesLike], [string], "view">;

  expertLaunchHooks: TypedContractMethod<[arg0: BytesLike], [string], "view">;

  gasSystem: TypedContractMethod<[], [string], "view">;

  gasSystemAddr: TypedContractMethod<[], [string], "view">;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  launchMultiChain: TypedContractMethod<
    [params: IMessageStruct.LaunchEnhanceParamsStruct],
    [void],
    "payable"
  >;

  maxArrivalTime: TypedContractMethod<[], [bigint], "view">;

  minArrivalTime: TypedContractMethod<[], [bigint], "view">;

  nonceLanding: TypedContractMethod<[arg0: BytesLike], [bigint], "view">;

  nonceLaunch: TypedContractMethod<[arg0: BytesLike], [bigint], "view">;

  padState: TypedContractMethod<[], [[bigint, bigint]], "view">;

  renounceRole: TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  roleConfiguration: TypedContractMethod<
    [role: BytesLike, accounts: AddressLike[], states: boolean[]],
    [void],
    "nonpayable"
  >;

  setExpertLandingHooks: TypedContractMethod<
    [ids: BytesLike[], hooks: AddressLike[]],
    [void],
    "nonpayable"
  >;

  setExpertLaunchHooks: TypedContractMethod<
    [ids: BytesLike[], hooks: AddressLike[]],
    [void],
    "nonpayable"
  >;

  setGasSystem: TypedContractMethod<
    [gasSystemAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  stationAdminSetRole: TypedContractMethod<
    [role: BytesLike, accounts: AddressLike[], states: boolean[]],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  validatorCount: TypedContractMethod<[], [bigint], "view">;

  validatorThreshold: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "Chainid"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "ENGINE_ADMIN"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "EstimateExecuteGas"
  ): TypedContractMethod<
    [params: IMessageStruct.LandingParamsStruct[]],
    [boolean[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "GASPOOL_ADMIN"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "GetNonceLanding"
  ): TypedContractMethod<
    [chainId: BigNumberish, sender: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "GetNonceLaunch"
  ): TypedContractMethod<
    [chainId: BigNumberish, sender: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "Landing"
  ): TypedContractMethod<
    [params: IMessageStruct.LandingParamsStruct[], proofs: BytesLike[][]],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "LandingSpecifiedGas"
  ): TypedContractMethod<
    [
      params: IMessageStruct.LandingParamsStruct[],
      gasLimit: BigNumberish,
      proofs: BytesLike[][]
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "Launch"
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
    nameOrSignature: "PauseEngine"
  ): TypedContractMethod<[stop: boolean], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "REGISTERED_VALIDATOR"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "STATION_ADMIN"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "SimulateLanding"
  ): TypedContractMethod<
    [params: IMessageStruct.LandingParamsStruct[]],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "TRUSTED_RELAYER"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "Version"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "Withdraw"
  ): TypedContractMethod<
    [amount: BigNumberish, to: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "engineState"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "estimateGas(uint256[],uint64[],bytes[],bytes[])"
  ): TypedContractMethod<
    [
      value: BigNumberish[],
      destChainid: BigNumberish[],
      additionParams: BytesLike[],
      message: BytesLike[]
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "estimateGas(uint256,uint64,bytes,bytes)"
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
    nameOrSignature: "estimatePrice"
  ): TypedContractMethod<
    [sender: AddressLike, destChainId: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "expertLandingHook"
  ): TypedContractMethod<[hook: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "expertLandingHooks"
  ): TypedContractMethod<[arg0: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "expertLaunchHook"
  ): TypedContractMethod<[hook: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "expertLaunchHooks"
  ): TypedContractMethod<[arg0: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "gasSystem"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "gasSystemAddr"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "launchMultiChain"
  ): TypedContractMethod<
    [params: IMessageStruct.LaunchEnhanceParamsStruct],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "maxArrivalTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "minArrivalTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "nonceLanding"
  ): TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "nonceLaunch"
  ): TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "padState"
  ): TypedContractMethod<[], [[bigint, bigint]], "view">;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "roleConfiguration"
  ): TypedContractMethod<
    [role: BytesLike, accounts: AddressLike[], states: boolean[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setExpertLandingHooks"
  ): TypedContractMethod<
    [ids: BytesLike[], hooks: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setExpertLaunchHooks"
  ): TypedContractMethod<
    [ids: BytesLike[], hooks: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setGasSystem"
  ): TypedContractMethod<[gasSystemAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "stationAdminSetRole"
  ): TypedContractMethod<
    [role: BytesLike, accounts: AddressLike[], states: boolean[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "validatorCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "validatorThreshold"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "EngineStateRefreshing"
  ): TypedContractEvent<
    EngineStateRefreshingEvent.InputTuple,
    EngineStateRefreshingEvent.OutputTuple,
    EngineStateRefreshingEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "PaymentSystemChanging"
  ): TypedContractEvent<
    PaymentSystemChangingEvent.InputTuple,
    PaymentSystemChangingEvent.OutputTuple,
    PaymentSystemChangingEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;
  getEvent(
    key: "SuccessfulLanding"
  ): TypedContractEvent<
    SuccessfulLandingEvent.InputTuple,
    SuccessfulLandingEvent.OutputTuple,
    SuccessfulLandingEvent.OutputObject
  >;
  getEvent(
    key: "SuccessfulLaunchMessage"
  ): TypedContractEvent<
    SuccessfulLaunchMessageEvent.InputTuple,
    SuccessfulLaunchMessageEvent.OutputTuple,
    SuccessfulLaunchMessageEvent.OutputObject
  >;
  getEvent(
    key: "SuccessfulLaunchMultiMessages"
  ): TypedContractEvent<
    SuccessfulLaunchMultiMessagesEvent.InputTuple,
    SuccessfulLaunchMultiMessagesEvent.OutputTuple,
    SuccessfulLaunchMultiMessagesEvent.OutputObject
  >;
  getEvent(
    key: "WithdrawRequest"
  ): TypedContractEvent<
    WithdrawRequestEvent.InputTuple,
    WithdrawRequestEvent.OutputTuple,
    WithdrawRequestEvent.OutputObject
  >;

  filters: {
    "EngineStateRefreshing(bool)": TypedContractEvent<
      EngineStateRefreshingEvent.InputTuple,
      EngineStateRefreshingEvent.OutputTuple,
      EngineStateRefreshingEvent.OutputObject
    >;
    EngineStateRefreshing: TypedContractEvent<
      EngineStateRefreshingEvent.InputTuple,
      EngineStateRefreshingEvent.OutputTuple,
      EngineStateRefreshingEvent.OutputObject
    >;

    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "PaymentSystemChanging(address)": TypedContractEvent<
      PaymentSystemChangingEvent.InputTuple,
      PaymentSystemChangingEvent.OutputTuple,
      PaymentSystemChangingEvent.OutputObject
    >;
    PaymentSystemChanging: TypedContractEvent<
      PaymentSystemChangingEvent.InputTuple,
      PaymentSystemChangingEvent.OutputTuple,
      PaymentSystemChangingEvent.OutputObject
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;

    "SuccessfulLanding(bytes32,tuple)": TypedContractEvent<
      SuccessfulLandingEvent.InputTuple,
      SuccessfulLandingEvent.OutputTuple,
      SuccessfulLandingEvent.OutputObject
    >;
    SuccessfulLanding: TypedContractEvent<
      SuccessfulLandingEvent.InputTuple,
      SuccessfulLandingEvent.OutputTuple,
      SuccessfulLandingEvent.OutputObject
    >;

    "SuccessfulLaunchMessage(uint32,uint64,uint64,address,address,address,uint256,uint64,bytes,bytes)": TypedContractEvent<
      SuccessfulLaunchMessageEvent.InputTuple,
      SuccessfulLaunchMessageEvent.OutputTuple,
      SuccessfulLaunchMessageEvent.OutputObject
    >;
    SuccessfulLaunchMessage: TypedContractEvent<
      SuccessfulLaunchMessageEvent.InputTuple,
      SuccessfulLaunchMessageEvent.OutputTuple,
      SuccessfulLaunchMessageEvent.OutputObject
    >;

    "SuccessfulLaunchMultiMessages(uint32[],uint64,uint64,address,address,address,uint256[],uint64[],bytes[],bytes[])": TypedContractEvent<
      SuccessfulLaunchMultiMessagesEvent.InputTuple,
      SuccessfulLaunchMultiMessagesEvent.OutputTuple,
      SuccessfulLaunchMultiMessagesEvent.OutputObject
    >;
    SuccessfulLaunchMultiMessages: TypedContractEvent<
      SuccessfulLaunchMultiMessagesEvent.InputTuple,
      SuccessfulLaunchMultiMessagesEvent.OutputTuple,
      SuccessfulLaunchMultiMessagesEvent.OutputObject
    >;

    "WithdrawRequest(address,uint256)": TypedContractEvent<
      WithdrawRequestEvent.InputTuple,
      WithdrawRequestEvent.OutputTuple,
      WithdrawRequestEvent.OutputObject
    >;
    WithdrawRequest: TypedContractEvent<
      WithdrawRequestEvent.InputTuple,
      WithdrawRequestEvent.OutputTuple,
      WithdrawRequestEvent.OutputObject
    >;
  };
}