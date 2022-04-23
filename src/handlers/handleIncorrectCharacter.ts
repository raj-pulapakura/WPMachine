import { current, Dispatch } from "@reduxjs/toolkit";
import {
  incrementIncorrectAttempts,
  updateMostRecentIncorrectIndex,
} from "../redux/slices/process";
import store from "../redux/store";

export function handleIncorrectCharacter(dispatch: Dispatch<any>) {
  const {
    incorrectAttempts,
    mostRecentIncorrectIndex,
    currentCharacterIndex,
    currentWordIndex,
  } = store.getState().process;

  if (
    mostRecentIncorrectIndex.charIndex === currentCharacterIndex &&
    mostRecentIncorrectIndex.wordIndex === currentWordIndex
  ) {
    return;
  }

  console.log("increment incorrect attempts");

  dispatch(incrementIncorrectAttempts());
  dispatch(
    updateMostRecentIncorrectIndex({
      charIndex: currentCharacterIndex,
      wordIndex: currentWordIndex,
    })
  );
}
