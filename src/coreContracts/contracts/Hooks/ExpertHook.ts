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

export declare namespace IExpertHook {
  export type TokenBaseStruct = {
    symbol: BytesLike;
    decimals: BigNumberish;
    maxPrice: BigNumberish;
  };

  export type TokenBaseStructOutput = [
    symbol: string,
    decimals: bigint,
    maxPrice: bigint
  ] & { symbol: string; decimals: bigint; maxPrice: bigint };
}

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
}

export interface ExpertHookInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DEFAULT_ADMIN_ROLE"
      | "EMPTY_TOKEN_SYMBOL"
      | "ETH_ADDRESS"
      | "GAS_MANAGER_ROLE"
      | "TOKEN_MANAGER_ROLE"
      | "_tokenHandlingStrategy"
      | "computeAmountComposition"
      | "computeTotalAmont"
      | "computeTradeFee"
      | "getRoleAdmin"
      | "getTokenAddressBySymbol"
      | "getTokenInfoBase"
      | "globalTradeFee"
      | "grantRole"
      | "handleLanding"
      | "handleLaunch"
      | "hasRole"
      | "isETH"
      | "renounceRole"
      | "revokeRole"
      | "setBatchTokens"
      | "setDefaultGasLimit"
      | "setGlobalTradeFee"
      | "setManager"
      | "setTokenInfoBase"
      | "setTokenTradeFeeMap"
      | "setVizingPadAddress"
      | "supportsInterface"
      | "symbolConfigMap"
      | "tokenConfigMap"
      | "vizingPadLanding"
      | "vizingPadLaunch"
      | "withdraw"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Initialized"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EMPTY_TOKEN_SYMBOL",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ETH_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "GAS_MANAGER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "TOKEN_MANAGER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_tokenHandlingStrategy",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "computeAmountComposition",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "computeTotalAmont",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "computeTradeFee",
    values: [BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenAddressBySymbol",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenInfoBase",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "globalTradeFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "handleLanding",
    values: [IMessageStruct.LandingParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "handleLaunch",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "isETH", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setBatchTokens",
    values: [BytesLike[], AddressLike[], BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setDefaultGasLimit",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setGlobalTradeFee",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setManager",
    values: [BytesLike, AddressLike[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenInfoBase",
    values: [BytesLike, AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTokenTradeFeeMap",
    values: [AddressLike, BigNumberish[], BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setVizingPadAddress",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "symbolConfigMap",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenConfigMap",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "vizingPadLanding",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "vizingPadLaunch",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EMPTY_TOKEN_SYMBOL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ETH_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GAS_MANAGER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "TOKEN_MANAGER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_tokenHandlingStrategy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeAmountComposition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeTotalAmont",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeTradeFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenAddressBySymbol",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenInfoBase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "globalTradeFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "handleLanding",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handleLaunch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setBatchTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDefaultGasLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGlobalTradeFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setManager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setTokenInfoBase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTokenTradeFeeMap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVizingPadAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "symbolConfigMap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenConfigMap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vizingPadLanding",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vizingPadLaunch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
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

export interface ExpertHook extends BaseContract {
  connect(runner?: ContractRunner | null): ExpertHook;
  waitForDeployment(): Promise<this>;

  interface: ExpertHookInterface;

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

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  EMPTY_TOKEN_SYMBOL: TypedContractMethod<[], [string], "view">;

  ETH_ADDRESS: TypedContractMethod<[], [string], "view">;

  GAS_MANAGER_ROLE: TypedContractMethod<[], [string], "view">;

  TOKEN_MANAGER_ROLE: TypedContractMethod<[], [string], "view">;

  _tokenHandlingStrategy: TypedContractMethod<
    [message: BytesLike, additionParams: BytesLike],
    [
      [string, string, string, bigint] & {
        domainContract: string;
        token: string;
        receiver: string;
        amount: bigint;
      }
    ],
    "view"
  >;

  computeAmountComposition: TypedContractMethod<
    [destChainid: BigNumberish, token: AddressLike, totalAmount: BigNumberish],
    [[bigint, bigint] & { realAmount: bigint; tradeFee: bigint }],
    "view"
  >;

  computeTotalAmont: TypedContractMethod<
    [
      destChainid: BigNumberish,
      token: AddressLike,
      expectAmountReceive: BigNumberish
    ],
    [bigint],
    "view"
  >;

  computeTradeFee: TypedContractMethod<
    [
      destChainid: BigNumberish,
      token: AddressLike,
      expectAmountReceive: BigNumberish
    ],
    [bigint],
    "view"
  >;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  getTokenAddressBySymbol: TypedContractMethod<
    [symbol: BytesLike],
    [string],
    "view"
  >;

  getTokenInfoBase: TypedContractMethod<
    [tokenAddress: AddressLike],
    [IExpertHook.TokenBaseStructOutput],
    "view"
  >;

  globalTradeFee: TypedContractMethod<
    [],
    [[bigint, bigint] & { molecular: bigint; denominator: bigint }],
    "view"
  >;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  handleLanding: TypedContractMethod<
    [params: IMessageStruct.LandingParamsStruct],
    [[boolean, string] & { success: boolean }],
    "nonpayable"
  >;

  handleLaunch: TypedContractMethod<
    [vizingPadCalldata: BytesLike],
    [[boolean, string] & { success: boolean }],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  isETH: TypedContractMethod<[token: AddressLike], [boolean], "view">;

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

  setBatchTokens: TypedContractMethod<
    [
      symbols: BytesLike[],
      tokenAddresses: AddressLike[],
      decimals: BigNumberish[],
      maxPrices: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;

  setDefaultGasLimit: TypedContractMethod<
    [gasLimit: BigNumberish],
    [void],
    "nonpayable"
  >;

  setGlobalTradeFee: TypedContractMethod<
    [molecular: BigNumberish, denominator: BigNumberish],
    [void],
    "nonpayable"
  >;

  setManager: TypedContractMethod<
    [role: BytesLike, accounts: AddressLike[], states: boolean[]],
    [void],
    "nonpayable"
  >;

  setTokenInfoBase: TypedContractMethod<
    [
      symbol: BytesLike,
      tokenAddress: AddressLike,
      decimals: BigNumberish,
      maxPrice: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setTokenTradeFeeMap: TypedContractMethod<
    [
      tokenAddress: AddressLike,
      chainId: BigNumberish[],
      molecular: BigNumberish[],
      denominator: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;

  setVizingPadAddress: TypedContractMethod<
    [_vizingPadLaunch: AddressLike, _vizingPadLanding: AddressLike],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  symbolConfigMap: TypedContractMethod<[arg0: BytesLike], [string], "view">;

  tokenConfigMap: TypedContractMethod<
    [arg0: AddressLike],
    [IExpertHook.TokenBaseStructOutput],
    "view"
  >;

  vizingPadLanding: TypedContractMethod<[], [string], "view">;

  vizingPadLaunch: TypedContractMethod<[], [string], "view">;

  withdraw: TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "EMPTY_TOKEN_SYMBOL"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "ETH_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "GAS_MANAGER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "TOKEN_MANAGER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "_tokenHandlingStrategy"
  ): TypedContractMethod<
    [message: BytesLike, additionParams: BytesLike],
    [
      [string, string, string, bigint] & {
        domainContract: string;
        token: string;
        receiver: string;
        amount: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "computeAmountComposition"
  ): TypedContractMethod<
    [destChainid: BigNumberish, token: AddressLike, totalAmount: BigNumberish],
    [[bigint, bigint] & { realAmount: bigint; tradeFee: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "computeTotalAmont"
  ): TypedContractMethod<
    [
      destChainid: BigNumberish,
      token: AddressLike,
      expectAmountReceive: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "computeTradeFee"
  ): TypedContractMethod<
    [
      destChainid: BigNumberish,
      token: AddressLike,
      expectAmountReceive: BigNumberish
    ],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "getTokenAddressBySymbol"
  ): TypedContractMethod<[symbol: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "getTokenInfoBase"
  ): TypedContractMethod<
    [tokenAddress: AddressLike],
    [IExpertHook.TokenBaseStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "globalTradeFee"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { molecular: bigint; denominator: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "handleLanding"
  ): TypedContractMethod<
    [params: IMessageStruct.LandingParamsStruct],
    [[boolean, string] & { success: boolean }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "handleLaunch"
  ): TypedContractMethod<
    [vizingPadCalldata: BytesLike],
    [[boolean, string] & { success: boolean }],
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
    nameOrSignature: "isETH"
  ): TypedContractMethod<[token: AddressLike], [boolean], "view">;
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
    nameOrSignature: "setBatchTokens"
  ): TypedContractMethod<
    [
      symbols: BytesLike[],
      tokenAddresses: AddressLike[],
      decimals: BigNumberish[],
      maxPrices: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setDefaultGasLimit"
  ): TypedContractMethod<[gasLimit: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setGlobalTradeFee"
  ): TypedContractMethod<
    [molecular: BigNumberish, denominator: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setManager"
  ): TypedContractMethod<
    [role: BytesLike, accounts: AddressLike[], states: boolean[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setTokenInfoBase"
  ): TypedContractMethod<
    [
      symbol: BytesLike,
      tokenAddress: AddressLike,
      decimals: BigNumberish,
      maxPrice: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setTokenTradeFeeMap"
  ): TypedContractMethod<
    [
      tokenAddress: AddressLike,
      chainId: BigNumberish[],
      molecular: BigNumberish[],
      denominator: BigNumberish[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setVizingPadAddress"
  ): TypedContractMethod<
    [_vizingPadLaunch: AddressLike, _vizingPadLanding: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "symbolConfigMap"
  ): TypedContractMethod<[arg0: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "tokenConfigMap"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [IExpertHook.TokenBaseStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "vizingPadLanding"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "vizingPadLaunch"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
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

  filters: {
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
  };
}
