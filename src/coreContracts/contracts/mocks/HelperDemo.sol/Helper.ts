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
} from "../../../common";

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

export interface HelperInterface extends Interface {
  getFunction(nameOrSignature: "encodeparams"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "encodeparams",
    values: [IMessageStruct.LandingParamsStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "encodeparams",
    data: BytesLike
  ): Result;
}

export interface Helper extends BaseContract {
  connect(runner?: ContractRunner | null): Helper;
  waitForDeployment(): Promise<this>;

  interface: HelperInterface;

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

  encodeparams: TypedContractMethod<
    [params: IMessageStruct.LandingParamsStruct],
    [string],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "encodeparams"
  ): TypedContractMethod<
    [params: IMessageStruct.LandingParamsStruct],
    [string],
    "view"
  >;

  filters: {};
}
