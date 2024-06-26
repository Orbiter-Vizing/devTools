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
import type { NonPayableOverrides } from "../../../../common";
import type {
  ChainA_EncodeMessageDemo,
  ChainA_EncodeMessageDemoInterface,
} from "../../../../contracts/mocks/dAppDemo.sol/ChainA_EncodeMessageDemo";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "bridgeSignatureMessage",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
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
    ],
    name: "bridgeSignatureMessage2",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
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
    ],
    name: "bridgeSignatureMessage3",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes1",
        name: "mode",
        type: "bytes1",
      },
      {
        internalType: "address",
        name: "toAddress",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "gasLimit",
        type: "uint24",
      },
      {
        internalType: "uint256",
        name: "args",
        type: "uint256",
      },
    ],
    name: "buildMessage",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddr",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "excuteMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "storeMessage",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506106ea806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c8063c11953e011610050578063c11953e014610123578063d21aa9a014610138578063e5a99a181461013857600080fd5b80631867fa5c14610077578063383c004b146100a0578063635774f4146100a8575b600080fd5b61008a610085366004610472565b61014b565b6040516100979190610512565b60405180910390f35b61008a610242565b61008a6100b6366004610563565b604080513360248201526044808201939093528151808203909301835260640190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f40c10f190000000000000000000000000000000000000000000000000000000017905290565b61013661013136600461057c565b6102d0565b005b61008a610146366004610563565b6103b5565b6040513360248201526044810182905260609073ffffffffffffffffffffffffffffffffffffffff851690600090879083908790606401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f40c10f190000000000000000000000000000000000000000000000000000000017905290516102099594939291016105ff565b604080518083037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018152919052979650505050505050565b6000805461024f9061067a565b80601f016020809104026020016040519081016040528092919081815260200182805461027b9061067a565b80156102c85780601f1061029d576101008083540402835291602001916102c8565b820191906000526020600020905b8154815290600101906020018083116102ab57829003601f168201915b505050505081565b60008373ffffffffffffffffffffffffffffffffffffffff16620f424084846040516102fd9291906106cd565b60006040518083038160008787f1925050503d806000811461033b576040519150601f19603f3d011682016040523d82523d6000602084013e610340565b606091505b50509050806103af576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600c60248201527f657863757465206572726f720000000000000000000000000000000000000000604482015260640160405180910390fd5b50505050565b60606000826040516024016103cc91815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa0712d68000000000000000000000000000000000000000000000000000000001790529392505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461046d57600080fd5b919050565b6000806000806080858703121561048857600080fd5b84357fff00000000000000000000000000000000000000000000000000000000000000811681146104b857600080fd5b93506104c660208601610449565b9250604085013562ffffff811681146104de57600080fd5b9396929550929360600135925050565b60005b838110156105095781810151838201526020016104f1565b50506000910152565b60208152600082518060208401526105318160408501602087016104ee565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b60006020828403121561057557600080fd5b5035919050565b60008060006040848603121561059157600080fd5b61059a84610449565b9250602084013567ffffffffffffffff808211156105b757600080fd5b818601915086601f8301126105cb57600080fd5b8135818111156105da57600080fd5b8760208285010111156105ec57600080fd5b6020830194508093505050509250925092565b7fff00000000000000000000000000000000000000000000000000000000000000851681528360018201527fffffff00000000000000000000000000000000000000000000000000000000008360e81b1660218201526000825161066a8160248501602087016104ee565b9190910160240195945050505050565b600181811c9082168061068e57607f821691505b6020821081036106c7577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b818382376000910190815291905056fea164736f6c6343000817000a";

type ChainA_EncodeMessageDemoConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChainA_EncodeMessageDemoConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChainA_EncodeMessageDemo__factory extends ContractFactory {
  constructor(...args: ChainA_EncodeMessageDemoConstructorParams) {
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
      ChainA_EncodeMessageDemo & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): ChainA_EncodeMessageDemo__factory {
    return super.connect(runner) as ChainA_EncodeMessageDemo__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChainA_EncodeMessageDemoInterface {
    return new Interface(_abi) as ChainA_EncodeMessageDemoInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ChainA_EncodeMessageDemo {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ChainA_EncodeMessageDemo;
  }
}
