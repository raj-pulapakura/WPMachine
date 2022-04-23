import { Dispatch } from "@reduxjs/toolkit";
import {
  setSpaceRequired,
  incrementCurrentCharacterIndex,
} from "../redux/slices/process";
import store from "../redux/store";

export function handleCorrectCharacter(dispatch: Dispatch<any>) {
  const { currentCharacterIndex, currentWordIndex, testTextSplit } =
    store.getState().process;

  console.log("Hooray!");

  // the word has come to an end
  if (currentCharacterIndex === testTextSplit[currentWordIndex].length - 1) {
    dispatch(setSpaceRequired(true));
  }

  dispatch(incrementCurrentCharacterIndex());
}
