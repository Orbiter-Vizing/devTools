import { Signer } from "ethers";
import { IBoosterGlobalState, vizingPadMeta } from "./types";
import * as vizing from "./coreContracts";

let boosterGlobalState: IBoosterGlobalState = {
  isMainnet: false,
  signer: {} as Signer,
  meta: [] as vizingPadMeta[],
};

function setGlobalState(newState: Partial<IBoosterGlobalState> = {}) {
  const globalStateKeys = Object.keys(newState);
  if (!!globalStateKeys.length) {
    globalStateKeys.forEach((v) => {
      boosterGlobalState[v] = newState[v] ?? boosterGlobalState[v];
    });
  }
}

function getGlobalState(): IBoosterGlobalState {
  return boosterGlobalState;
}

export { setGlobalState, getGlobalState };
