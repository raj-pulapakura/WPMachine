import { Dispatch } from "@reduxjs/toolkit";
import {
  incrementCurrentWordIndex,
  resetCurrentCharacterIndex,
  setSpaceRequired,
} from "../redux/slices/process";
import store from "../redux/store";
import { handleIncorrectCharacter } from "./handleIncorrectCharacter";

export default function handleSpace(dispatch: Dispatch<any>) {
  const { spaceRequired } = store.getState().process;

  if (!spaceRequired) {
    handleIncorrectCharacter(dispatch);
    return;
  }

  dispatch(setSpaceRequired(false));
  dispatch(incrementCurrentWordIndex());
  dispatch(resetCurrentCharacterIndex());
}
