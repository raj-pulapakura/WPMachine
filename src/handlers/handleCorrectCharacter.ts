import { Dispatch } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import { routes } from "../App";
import {
  setSpaceRequired,
  incrementCurrentCharacterIndex,
  deactivateShift,
} from "../redux/slices/process";
import { stopTimer } from "../redux/slices/timer";
import store from "../redux/store";

export function handleCorrectCharacter(
  dispatch: Dispatch<any>,
  navigate: NavigateFunction
) {
  const {
    currentCharacterIndex,
    currentWordIndex,
    testTextSplit,
    shiftActivated,
  } = store.getState().process;

  const timerIntervalId = store.getState().timer.intervalId;

  console.log("Hooray!");

  if (currentCharacterIndex === testTextSplit[currentWordIndex].length - 1) {
    // the test has come to an end
    if (currentWordIndex === testTextSplit.length - 1) {
      dispatch(stopTimer());
      if (timerIntervalId) {
        clearInterval(timerIntervalId);
      }
      navigate(routes.results);
    }
    // the word has come to an end
    else {
      dispatch(setSpaceRequired(true));
    }
  }

  if (shiftActivated) {
    dispatch(deactivateShift());
  }

  dispatch(incrementCurrentCharacterIndex());
}
