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
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface IMessageDashboardInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "PauseEngine"
      | "Withdraw"
      | "engineState"
      | "padState"
      | "roleConfiguration"
      | "setExpertLandingHooks"
      | "setExpertLaunchHooks"
      | "setGasSystem"
      | "stationAdminSetRole"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "PauseEngine",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "Withdraw",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "engineState",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "padState", values?: undefined): string;
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
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "PauseEngine",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "Withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "engineState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "padState", data: BytesLike): Result;
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
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export interface IMessageDashboard extends BaseContract {
  connect(runner?: ContractRunner | null): IMessageDashboard;
  waitForDeployment(): Promise<this>;

  interface: IMessageDashboardInterface;

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

  PauseEngine: TypedContractMethod<[stop: boolean], [void], "nonpayable">;

  Withdraw: TypedContractMethod<
    [amount: BigNumberish, to: AddressLike],
    [void],
    "nonpayable"
  >;

  engineState: TypedContractMethod<[], [bigint], "view">;

  padState: TypedContractMethod<[], [[bigint, bigint]], "view">;

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

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "PauseEngine"
  ): TypedContractMethod<[stop: boolean], [void], "nonpayable">;
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
    nameOrSignature: "padState"
  ): TypedContractMethod<[], [[bigint, bigint]], "view">;
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
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  filters: {};
}
