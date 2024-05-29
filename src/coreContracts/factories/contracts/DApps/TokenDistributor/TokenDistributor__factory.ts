/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  TokenDistributor,
  TokenDistributorInterface,
} from "../../../../contracts/DApps/TokenDistributor/TokenDistributor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_vizingPad",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "LandingPadAccessDenied",
    type: "error",
  },
  {
    inputs: [],
    name: "NotImplement",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "LandingPad",
    outputs: [
      {
        internalType: "contract IMessageChannel",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LaunchPad",
    outputs: [
      {
        internalType: "contract IMessageChannel",
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
        name: "mode",
        type: "bytes1",
      },
      {
        internalType: "bytes1",
        name: "tokenSymbol",
        type: "bytes1",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PacketAdditionParams",
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
        name: "targetContract",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "gasLimit",
        type: "uint24",
      },
      {
        internalType: "uint64",
        name: "price",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "PacketMessage",
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
        internalType: "bytes1[]",
        name: "mode",
        type: "bytes1[]",
      },
      {
        internalType: "address[]",
        name: "targetContract",
        type: "address[]",
      },
      {
        internalType: "uint24[]",
        name: "gasLimit",
        type: "uint24[]",
      },
      {
        internalType: "uint64[]",
        name: "price",
        type: "uint64[]",
      },
      {
        internalType: "bytes[]",
        name: "message",
        type: "bytes[]",
      },
    ],
    name: "PacketMessages",
    outputs: [
      {
        internalType: "bytes[]",
        name: "",
        type: "bytes[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "destChainid",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "computeTradeFee",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultBridgeMode",
    outputs: [
      {
        internalType: "bytes1",
        name: "",
        type: "bytes1",
      },
    ],
    stateMutability: "view",
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
    name: "emit2LaunchPad",
    outputs: [],
    stateMutability: "payable",
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
    name: "estimateVizingGasFee",
    outputs: [
      {
        internalType: "uint256",
        name: "vizingGasFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "destChainid",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    name: "exactInput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "destChainid",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
    ],
    name: "exactOutput",
    outputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
    ],
    stateMutability: "view",
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
    name: "maxGasLimit",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
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
    name: "minGasLimit",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    name: "mirrorExchanger",
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
    name: "owner",
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
        internalType: "uint64",
        name: "srcChainId",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "srcContract",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
    ],
    name: "receiveStandardMessage",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "selectedRelayer",
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
        internalType: "uint64[]",
        name: "chainIds",
        type: "uint64[]",
      },
      {
        internalType: "address[]",
        name: "exchangers",
        type: "address[]",
      },
    ],
    name: "setMirrorExchangers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64[]",
        name: "destChainid",
        type: "uint64[]",
      },
      {
        internalType: "uint256[]",
        name: "amountOut",
        type: "uint256[]",
      },
      {
        internalType: "address[]",
        name: "tokenReceiver",
        type: "address[]",
      },
    ],
    name: "tokenDistribute",
    outputs: [],
    stateMutability: "payable",
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

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620024d8380380620024d88339810160408190526200003491620000fa565b80808033806200005e57604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b6200006981620000aa565b50600180546001600160a01b0319166001600160a01b03831617905550600280546001600160a01b0319166001600160a01b0383161790555050506200012c565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156200010d57600080fd5b81516001600160a01b03811681146200012557600080fd5b9392505050565b61239c806200013c6000396000f3fe60806040526004361061017f5760003560e01c80638da5cb5b116100d6578063cb2bfa931161007f578063e0b838e911610059578063e0b838e9146103de578063f2fde38b1461040b578063fd39aa441461042b57600080fd5b8063cb2bfa931461037b578063d6b414211461039b578063de8aeda01461021d57600080fd5b8063b3685741116100b0578063b36857411461031b578063b77f034714610348578063c23d11381461035b57600080fd5b80638da5cb5b146102bc578063a5abc639146102e7578063b0cfd4d21461030757600080fd5b80635ad3ad0611610138578063715018a611610112578063715018a61461026757806376c813121461027c5780638aa718691461029c57600080fd5b80635ad3ad061461021d5780635aeb4d771461021d5780635e45da231461021d57600080fd5b8063424170231161016957806342417023146101f0578063456362791461021d578063589301d31461023957600080fd5b806273b555146101845780630e82845d14610199575b600080fd5b610197610192366004611643565b61043e565b005b3480156101a557600080fd5b506002546101c69073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156101fc57600080fd5b5061021061020b3660046116f6565b6104a1565b6040516101e791906117c4565b34801561022957600080fd5b50604051600081526020016101e7565b34801561024557600080fd5b506102596102543660046117d7565b610531565b6040519081526020016101e7565b34801561027357600080fd5b5061019761066e565b34801561028857600080fd5b50610259610297366004611803565b610682565b3480156102a857600080fd5b506102106102b73660046119ae565b610704565b3480156102c857600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff166101c6565b3480156102f357600080fd5b50610197610302366004611a77565b610735565b34801561031357600080fd5b5060006101c6565b34801561032757600080fd5b5061033b610336366004611d1c565b610874565b6040516101e79190611e59565b610197610356366004611e6c565b61098e565b34801561036757600080fd5b506102596103763660046117d7565b610ce2565b34801561038757600080fd5b506102596103963660046117d7565b610ddb565b3480156103a757600080fd5b506101c66103b6366004611ef4565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b3480156103ea57600080fd5b506001546101c69073ffffffffffffffffffffffffffffffffffffffff1681565b34801561041757600080fd5b50610197610426366004611f11565b610ed4565b610197610439366004611f2e565b610f38565b60025473ffffffffffffffffffffffffffffffffffffffff16331461048f576040517ffb2541ea00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61049b84848484610fda565b50505050565b6040517fff00000000000000000000000000000000000000000000000000000000000000868116602083015285166021820152606084811b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000908116602284015284821b166036830152604a820183905290606a015b604051602081830303815290604052905095945050505050565b600154604080517f84bc75a6000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff16916384bc75a69160048083019260209291908290030181865afa1580156105a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c59190611ff9565b6040517f589301d300000000000000000000000000000000000000000000000000000000815267ffffffffffffffff851660048201526024810184905273ffffffffffffffffffffffffffffffffffffffff919091169063589301d3906044015b602060405180830381865afa158015610643573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106679190612016565b9392505050565b610676611129565b610680600061117c565b565b60006106f9878787878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020601f8b0181900481028201810190925289815292508991508890819084018382808284376000920191909152506111f192505050565b979650505050505050565b6060858573ffffffffffffffffffffffffffffffffffffffff1685858560405160200161051795949392919061202f565b61073d611129565b8281146107ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c6964206c656e67746800000000000000000000000000000000000060448201526064015b60405180910390fd5b60005b8381101561086d578282828181106107c8576107c86120d6565b90506020020160208101906107dd9190611f11565b600360008787858181106107f3576107f36120d6565b90506020020160208101906108089190611ef4565b67ffffffffffffffff168152602081019190915260400160002080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff929092169190911790556001016107ae565b5050505050565b60606000825167ffffffffffffffff811115610892576108926118a2565b6040519080825280602002602001820160405280156108c557816020015b60608152602001906001900390816108b05790505b50905060005b83518110156109835761095e8882815181106108e9576108e96120d6565b6020026020010151888381518110610903576109036120d6565b602002602001015188848151811061091d5761091d6120d6565b6020026020010151888581518110610937576109376120d6565b6020026020010151888681518110610951576109516120d6565b6020026020010151610704565b828281518110610970576109706120d6565b60209081029190910101526001016108cb565b509695505050505050565b8481146109f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f546f6b656e4469737472696275746f723a20496e76616c6964206c656e67746860448201526064016107a2565b60008567ffffffffffffffff811115610a1257610a126118a2565b604051908082528060200260200182016040528015610a3b578160200160208202803683370190505b50905060008667ffffffffffffffff811115610a5957610a596118a2565b604051908082528060200260200182016040528015610a82578160200160208202803683370190505b50905060008767ffffffffffffffff811115610aa057610aa06118a2565b604051908082528060200260200182016040528015610ad357816020015b6060815260200190600190039081610abe5790505b50905060005b88811015610c6257600360008b8b84818110610af757610af76120d6565b9050602002016020810190610b0c9190611ef4565b67ffffffffffffffff168152602081019190915260400160002054845173ffffffffffffffffffffffffffffffffffffffff90911690859083908110610b5457610b546120d6565b602002602001019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505062013880838281518110610ba457610ba46120d6565b602002602001019062ffffff16908162ffffff1681525050858582818110610bce57610bce6120d6565b9050602002016020810190610be39190611f11565b888883818110610bf557610bf56120d6565b90506020020135604051602001610c2e92919073ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b604051602081830303815290604052828281518110610c4f57610c4f6120d6565b6020908102919091010152600101610ad9565b50610cd789898080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050604080516020808d0282810182019093528c82528994509092508c918c918291908501908490808284376000920191909152508892508791506112989050565b505050505050505050565b600154604080517f84bc75a6000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff16916384bc75a69160048083019260209291908290030181865afa158015610d52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d769190611ff9565b6040517fc23d113800000000000000000000000000000000000000000000000000000000815267ffffffffffffffff851660048201526024810184905273ffffffffffffffffffffffffffffffffffffffff919091169063c23d113890604401610626565b600154604080517f84bc75a6000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff16916384bc75a69160048083019260209291908290030181865afa158015610e4b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6f9190611ff9565b6040517fcb2bfa9300000000000000000000000000000000000000000000000000000000815267ffffffffffffffff851660048201526024810184905273ffffffffffffffffffffffffffffffffffffffff919091169063cb2bfa9390604401610626565b610edc611129565b73ffffffffffffffffffffffffffffffffffffffff8116610f2c576040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600060048201526024016107a2565b610f358161117c565b50565b6001546040517f209afe5600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063209afe56903490610f9e908c908c908c908c908c908c908c908c90600401612105565b6000604051808303818588803b158015610fb757600080fd5b505af1158015610fcb573d6000803e3d6000fd5b50505050505050505050505050565b600080610fe983850185612189565b91509150803414611056576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f496e76616c696420616d6f756e7400000000000000000000000000000000000060448201526064016107a2565b60008273ffffffffffffffffffffffffffffffffffffffff163460405160006040518083038185875af1925050503d80600081146110b0576040519150601f19603f3d011682016040523d82523d6000602084013e6110b5565b606091505b5050905080611120576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f4661696c656420746f2073656e6420657468657200000000000000000000000060448201526064016107a2565b50505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314610680576040517f118cdaa70000000000000000000000000000000000000000000000000000000081523360048201526024016107a2565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001546040517f85fdd54200000000000000000000000000000000000000000000000000000000815260009173ffffffffffffffffffffffffffffffffffffffff16906385fdd5429061124e9088908890889088906004016121a7565b602060405180830381865afa15801561126b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061128f9190612016565b95945050505050565b6000815167ffffffffffffffff8111156112b4576112b46118a2565b6040519080825280602002602001820160405280156112e757816020015b60608152602001906001900390816112d25790505b50905060005b82518110156113a557611380600160f81b878381518110611310576113106120d6565b602002602001015186848151811061132a5761132a6120d6565b602002602001015161136e8a8681518110611347576113476120d6565b60200260200101518c8781518110611361576113616120d6565b60200260200101516114ae565b878681518110610951576109516120d6565b828281518110611392576113926120d6565b60209081029190910101526001016112ed565b506001546040805161010081018252600080825260208201819052918101919091523360608201526080810186905260a08101889052835173ffffffffffffffffffffffffffffffffffffffff9092169163b14280ea91349160c082019067ffffffffffffffff81111561141b5761141b6118a2565b60405190808252806020026020018201604052801561144e57816020015b60608152602001906001900390816114395790505b508152602001858152506040518363ffffffff1660e01b81526004016114749190612259565b6000604051808303818588803b15801561148d57600080fd5b505af11580156114a1573d6000803e3d6000fd5b5050505050505050505050565b600154604080517f84bc75a6000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff16916384bc75a69160048083019260209291908290030181865afa15801561151e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115429190611ff9565b6040517fabb860fc00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff858116600483015267ffffffffffffffff85166024830152919091169063abb860fc90604401602060405180830381865afa1580156115c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106679190612372565b67ffffffffffffffff81168114610f3557600080fd5b60008083601f84011261160c57600080fd5b50813567ffffffffffffffff81111561162457600080fd5b60208301915083602082850101111561163c57600080fd5b9250929050565b6000806000806060858703121561165957600080fd5b8435611664816115e4565b935060208501359250604085013567ffffffffffffffff81111561168757600080fd5b611693878288016115fa565b95989497509550505050565b80357fff00000000000000000000000000000000000000000000000000000000000000811681146116cf57600080fd5b919050565b73ffffffffffffffffffffffffffffffffffffffff81168114610f3557600080fd5b600080600080600060a0868803121561170e57600080fd5b6117178661169f565b94506117256020870161169f565b93506040860135611735816116d4565b92506060860135611745816116d4565b949793965091946080013592915050565b60005b83811015611771578181015183820152602001611759565b50506000910152565b60008151808452611792816020860160208601611756565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081526000610667602083018461177a565b600080604083850312156117ea57600080fd5b82356117f5816115e4565b946020939093013593505050565b6000806000806000806080878903121561181c57600080fd5b86359550602087013561182e816115e4565b9450604087013567ffffffffffffffff8082111561184b57600080fd5b6118578a838b016115fa565b9096509450606089013591508082111561187057600080fd5b5061187d89828a016115fa565b979a9699509497509295939492505050565b803562ffffff811681146116cf57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611918576119186118a2565b604052919050565b600082601f83011261193157600080fd5b813567ffffffffffffffff81111561194b5761194b6118a2565b61197c60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016118d1565b81815284602083860101111561199157600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080600060a086880312156119c657600080fd5b6119cf8661169f565b945060208601356119df816116d4565b93506119ed6040870161188f565b925060608601356119fd816115e4565b9150608086013567ffffffffffffffff811115611a1957600080fd5b611a2588828901611920565b9150509295509295909350565b60008083601f840112611a4457600080fd5b50813567ffffffffffffffff811115611a5c57600080fd5b6020830191508360208260051b850101111561163c57600080fd5b60008060008060408587031215611a8d57600080fd5b843567ffffffffffffffff80821115611aa557600080fd5b611ab188838901611a32565b90965094506020870135915080821115611aca57600080fd5b5061169387828801611a32565b600067ffffffffffffffff821115611af157611af16118a2565b5060051b60200190565b600082601f830112611b0c57600080fd5b81356020611b21611b1c83611ad7565b6118d1565b8083825260208201915060208460051b870101935086841115611b4357600080fd5b602086015b8481101561098357611b598161169f565b8352918301918301611b48565b600082601f830112611b7757600080fd5b81356020611b87611b1c83611ad7565b8083825260208201915060208460051b870101935086841115611ba957600080fd5b602086015b84811015610983578035611bc1816116d4565b8352918301918301611bae565b600082601f830112611bdf57600080fd5b81356020611bef611b1c83611ad7565b8083825260208201915060208460051b870101935086841115611c1157600080fd5b602086015b8481101561098357611c278161188f565b8352918301918301611c16565b600082601f830112611c4557600080fd5b81356020611c55611b1c83611ad7565b8083825260208201915060208460051b870101935086841115611c7757600080fd5b602086015b84811015610983578035611c8f816115e4565b8352918301918301611c7c565b600082601f830112611cad57600080fd5b81356020611cbd611b1c83611ad7565b82815260059290921b84018101918181019086841115611cdc57600080fd5b8286015b8481101561098357803567ffffffffffffffff811115611d005760008081fd5b611d0e8986838b0101611920565b845250918301918301611ce0565b600080600080600060a08688031215611d3457600080fd5b853567ffffffffffffffff80821115611d4c57600080fd5b611d5889838a01611afb565b96506020880135915080821115611d6e57600080fd5b611d7a89838a01611b66565b95506040880135915080821115611d9057600080fd5b611d9c89838a01611bce565b94506060880135915080821115611db257600080fd5b611dbe89838a01611c34565b93506080880135915080821115611dd457600080fd5b50611a2588828901611c9c565b60008282518085526020808601955060208260051b8401016020860160005b84811015611e4c577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0868403018952611e3a83835161177a565b98840198925090830190600101611e00565b5090979650505050505050565b6020815260006106676020830184611de1565b60008060008060008060608789031215611e8557600080fd5b863567ffffffffffffffff80821115611e9d57600080fd5b611ea98a838b01611a32565b90985096506020890135915080821115611ec257600080fd5b611ece8a838b01611a32565b90965094506040890135915080821115611ee757600080fd5b5061187d89828a01611a32565b600060208284031215611f0657600080fd5b8135610667816115e4565b600060208284031215611f2357600080fd5b8135610667816116d4565b600080600080600080600080610100898b031215611f4b57600080fd5b8835611f56816115e4565b97506020890135611f66816115e4565b96506040890135611f76816116d4565b95506060890135611f86816116d4565b94506080890135935060a0890135611f9d816115e4565b925060c089013567ffffffffffffffff80821115611fba57600080fd5b611fc68c838d01611920565b935060e08b0135915080821115611fdc57600080fd5b50611fe98b828c01611920565b9150509295985092959890939650565b60006020828403121561200b57600080fd5b8151610667816116d4565b60006020828403121561202857600080fd5b5051919050565b7fff00000000000000000000000000000000000000000000000000000000000000861681528460018201527fffffff00000000000000000000000000000000000000000000000000000000008460e81b1660218201527fffffffffffffffff0000000000000000000000000000000000000000000000008360c01b166024820152600082516120c581602c850160208701611756565b91909101602c019695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b67ffffffffffffffff8981168252888116602083015273ffffffffffffffffffffffffffffffffffffffff88811660408401528716606083015260808201869052841660a082015261010060c082018190526000906121668382018661177a565b905082810360e084015261217a818561177a565b9b9a5050505050505050505050565b6000806040838503121561219c57600080fd5b82356117f5816116d4565b84815267ffffffffffffffff841660208201526080604082015260006121d0608083018561177a565b82810360608401526106f9818561177a565b60008151808452602080850194506020840160005b83811015612213578151875295820195908201906001016121f7565b509495945050505050565b60008151808452602080850194506020840160005b8381101561221357815167ffffffffffffffff1687529582019590820190600101612233565b6020815261227460208201835167ffffffffffffffff169052565b60006020830151612291604084018267ffffffffffffffff169052565b50604083015173ffffffffffffffffffffffffffffffffffffffff8116606084015250606083015173ffffffffffffffffffffffffffffffffffffffff811660808401525060808301516101008060a08501526122f26101208501836121e2565b915060a08501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0808685030160c087015261232e848361221e565b935060c08701519150808685030160e087015261234b8483611de1565b935060e08701519150808685030183870152506123688382611de1565b9695505050505050565b60006020828403121561238457600080fd5b8151610667816115e456fea164736f6c6343000817000a";

type TokenDistributorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenDistributorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenDistributor__factory extends ContractFactory {
  constructor(...args: TokenDistributorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _vizingPad: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_vizingPad, overrides || {});
  }
  override deploy(
    _vizingPad: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_vizingPad, overrides || {}) as Promise<
      TokenDistributor & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TokenDistributor__factory {
    return super.connect(runner) as TokenDistributor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenDistributorInterface {
    return new Interface(_abi) as TokenDistributorInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TokenDistributor {
    return new Contract(address, _abi, runner) as unknown as TokenDistributor;
  }
}