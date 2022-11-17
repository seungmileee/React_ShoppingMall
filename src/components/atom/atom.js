import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userInfoState = atom({
  key: "userInfoState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});