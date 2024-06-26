/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type {
  Converter,
  ConverterInterface,
} from "../../../../../contracts/DApps/OmniTokenBridge/mocks/Converter";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "bridgeConvertTokenReceiver",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
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
        name: "toAddress",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "destChainId",
        type: "uint64",
      },
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "permitData",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "companionMessage",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "bridge",
        type: "address",
      },
    ],
    name: "revertTokenwithBridge",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061035a806100206000396000f3fe6080604052600436106100295760003560e01c806368bf251b1461002e578063ad69d9b114610043575b600080fd5b61004161003c36600461018b565b61007a565b005b34801561004f57600080fd5b5061006661005e366004610250565b600192915050565b604051901515815260200160405180910390f35b6040517faea6af8500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82169063aea6af859034906100dc908b908d908f908d908d908d908d908d906004016102db565b6000604051808303818588803b1580156100f557600080fd5b505af1158015610109573d6000803e3d6000fd5b5050505050505050505050505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461013d57600080fd5b919050565b60008083601f84011261015457600080fd5b50813567ffffffffffffffff81111561016c57600080fd5b60208301915083602082850101111561018457600080fd5b9250929050565b600080600080600080600080600060e08a8c0312156101a957600080fd5b893598506101b960208b01610119565b975060408a013567ffffffffffffffff80821682146101d757600080fd5b8198506101e660608d01610119565b975060808c01359150808211156101fc57600080fd5b6102088d838e01610142565b909750955060a08c013591508082111561022157600080fd5b5061022e8c828d01610142565b9094509250610241905060c08b01610119565b90509295985092959850929598565b6000806020838503121561026357600080fd5b823567ffffffffffffffff81111561027a57600080fd5b61028685828601610142565b90969095509350505050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b67ffffffffffffffff89168152600073ffffffffffffffffffffffffffffffffffffffff808a16602084015288604084015280881660608401525060c0608083015261032b60c083018688610292565b82810360a084015261033e818587610292565b9b9a505050505050505050505056fea164736f6c6343000817000a";

type ConverterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConverterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Converter__factory extends ContractFactory {
  constructor(...args: ConverterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Converter & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Converter__factory {
    return super.connect(runner) as Converter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConverterInterface {
    return new Interface(_abi) as ConverterInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Converter {
    return new Contract(address, _abi, runner) as unknown as Converter;
  }
}
