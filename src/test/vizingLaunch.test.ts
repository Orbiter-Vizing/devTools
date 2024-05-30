import { beforeAll, describe, expect, test } from "vitest";
import { VizingBooster } from "../booster";
import { Wallet, ethers, Signer, keccak256, BigNumberish } from "ethers";
import * as vizing from "../coreContracts";
import * as deployment from "../deployment";
import { getWallet } from "./utils";

require("dotenv").config("./.env");

describe("VizingLaunch", () => {
  let signer: Signer;
  let booster: VizingBooster;
  let OmniTokenBridgeA: vizing.VizingTokenBridge;
  let OmniTokenBridgeB: vizing.VizingTokenBridge;
  let testToken: vizing.ORBIToken;
  beforeAll(async () => {
    const privateKey: string = process.env.PRIVATE_KEY || "";
    const providerUrl: string = process.env.DEFAULT_RPC_URL || "";
    if (!privateKey || !providerUrl) {
      throw new Error(
        "private key can not be empty, pls add your private to the environment to be able to run the tests"
      );
    }
    signer = getWallet(privateKey, providerUrl);
    booster = new VizingBooster(signer);
    await booster.build();

    let nonce = await signer.getNonce();

    // deploy OmniTokenBridge
    const padList = booster.getVizingPads();
    OmniTokenBridgeA = await new vizing.VizingTokenBridge__factory(
      signer
    ).deploy(
      await signer.getAddress(),
      padList[0].vizingPad,
      padList[0].chainId as BigNumberish,
      {
        nonce: nonce,
      }
    );
    await OmniTokenBridgeA.waitForDeployment();

    OmniTokenBridgeB = await new vizing.VizingTokenBridge__factory(
      signer
    ).deploy(
      await signer.getAddress(),
      padList[1].vizingPad,
      padList[1].chainId as BigNumberish,
      {
        nonce: nonce + 1,
      }
    );
    await OmniTokenBridgeB.waitForDeployment();

    testToken = await new vizing.ORBIToken__factory(signer).deploy({
      nonce: nonce + 2,
    });

    // chainA set mirror bridge
    {
      const tx = await OmniTokenBridgeA.setMirrorBridges(
        [padList[1].chainId as BigNumberish],
        [await OmniTokenBridgeB.getAddress()],
        {
          nonce: nonce + 3,
        }
      );
      await tx.wait();
      console.log(
        `set mirror chainId ${
          padList[1].chainId
        },  bridge ${await OmniTokenBridgeB.getAddress()}`
      );
    }

    {
      const tx = await OmniTokenBridgeB.setMirrorBridges(
        [padList[0].chainId as BigNumberish],
        [await OmniTokenBridgeA.getAddress()],
        {
          nonce: nonce + 4,
        }
      );
      await tx.wait();
      console.log(
        `set mirror chainId ${
          padList[0].chainId
        },  bridge ${await OmniTokenBridgeA.getAddress()}`
      );
    }

    {
      const amount = ethers.parseUnits("100", 18);
      // approve to the bridge
      const tx = await testToken.approve(
        await OmniTokenBridgeA.getAddress(),
        amount,
        {
          nonce: nonce + 5,
        }
      );
      await tx.wait();
    }

    console.log("OmniTokenBridgeA", await OmniTokenBridgeA.getAddress());
    console.log("OmniTokenBridgeB", await OmniTokenBridgeB.getAddress());
    console.log("testToken", await testToken.getAddress());
  });

  test("getGlobalState", async () => {
    const globalState = booster.getConfig();
    expect(globalState.signer).toBeDefined();
  });

  test("ERC20 Token bridge", async () => {
    let nonce = await signer.getNonce();
    const padList = booster.getVizingPads();
    const amount = ethers.parseUnits("100", 18);
    console.log("padList", padList);
    const details = await OmniTokenBridgeA.fetchBridgeAssetDetails(
      padList[1].chainId as BigNumberish,
      await signer.getAddress(),
      amount,
      await signer.getAddress(),
      "0x"
    );

    // get receipt
    const receipt = await OmniTokenBridgeA.bridgeAsset(
      padList[1].chainId as BigNumberish,
      await signer.getAddress(),
      amount,
      await testToken.getAddress(),
      "0x",
      "0x",
      {
        value: details.gasFee,
        nonce: nonce,
      }
    ).then((tx) => tx.wait());

    const newToken = await OmniTokenBridgeA.predictTokenAddress(
      padList[1].chainId as BigNumberish,
      padList[0].chainId as BigNumberish,
      await testToken.getAddress(),
      await testToken.name(),
      await testToken.symbol(),
      await testToken.decimals()
    );

    // build new token instance
    const newTokenContract = vizing.ORBIToken__factory.connect(
      newToken,
      signer
    );

    expect(receipt).toBeDefined();

    await booster.launch(receipt!);

    const balanceAfter = await newTokenContract.balanceOf(
      await signer.getAddress()
    );

    expect(balanceAfter).toEqual(amount);
  });
});
