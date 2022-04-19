import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../App";
import { getRandomBlock } from "../../data/bank";
import { uppers } from "../../data/uppers";
import {
  addIncorrectIndex,
  decrementCurrentCharIndex,
  incrementCurrentCharIndex,
  setLoaded,
  startProcess,
  updateCurrentBlock,
  setIncorrectIndexes,
  incrementIncorrectChars,
  endProcess,
  activateShift,
  deactivateShift,
  deactivateCapsLock,
  activateCapsLock,
} from "../../../redux/slices/process";
import {
  updateTimeStarted,
  updateTimeEnded,
  setIntervalId,
} from "../../../redux/slices/timer";
import store, { RootState } from "../../../redux/store";
import { CorrectCharacter } from "../Characters/CorrectCharacter/CorrectCharacter";
import { CurrentCharacter } from "../Characters/CurrentCharacter/CurrentCharacter";
import { IncorrectCharacter } from "../Characters/IncorrectCharacter/IncorrectCharacter";
import { UntouchedCharacter } from "../Characters/UntouchedCharacter/UntouchedCharacter";
import { ArenaContainer } from "./Arena.styles";

interface ArenaProps {}

export const Arena: React.FC<ArenaProps> = ({}) => {
  const { loaded, currentBlock, currentCharIndex, started, incorrectIndexes } =
    useSelector((state: RootState) => state.process);

  const intervalId = useSelector((state: RootState) => state.timer.intervalId);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  // setting key-press event listeners
  useEffect(() => {
    if (!loaded) {
      dispatch(setLoaded());

      document.addEventListener("keyup", onKeyUp);
      document.addEventListener("keypress", onKeyPressed);
    }
  }, []);

  // setting a current block
  useEffect(() => {
    dispatch(updateCurrentBlock(getRandomBlock()));
  }, []);

  // timer configuration
  useEffect(() => {
    if (started) {
      // start timer
      dispatch(updateTimeStarted(Date.now()));
      const timerId = setInterval(
        () => dispatch(updateTimeEnded(Date.now())),
        1000
      );
      dispatch(setIntervalId(timerId));
    }
  }, [started]);

  useEffect(() => {
    if (currentBlock && currentCharIndex >= currentBlock.length) {
      dispatch(endProcess());

      // clear timer
      if (intervalId) {
        console.log("clearing timer");
        clearInterval(intervalId);
      }

      navigate(routes.results);
    }
  }, [currentCharIndex]);

  // main logic for handling a key press
  function onKeyUp(e: KeyboardEvent) {
    e.preventDefault();

    // pulling the most recent data from the store
    const {
      currentCharIndex,
      currentBlock,
      incorrectIndexes,
      started,
      shiftActivated,
      capsLockActivated,
    } = store.getState().process;

    // this is what the key should be
    const actual = currentBlock[currentCharIndex];

    if (!started) {
      dispatch(startProcess());
    }

    const { key } = e;

    console.log({ key, actual });

    // handling a backspace
    if (key === "Backspace") {
      /*     
      if the previous character is an incorrectIndex, remove it from the incorrectIndex array, 
      so the user can try again 
      */
      if (incorrectIndexes.includes(currentCharIndex - 1)) {
        dispatch(
          setIncorrectIndexes(
            incorrectIndexes.filter((i) => i !== currentCharIndex - 1)
          )
        );
      }

      // decrement the currentCharIndex
      dispatch(decrementCurrentCharIndex());
      return;
    }

    if (key === "Shift") {
      if (!shiftActivated) {
        dispatch(activateShift());
        return;
      }
    }

    if (key === "CapsLock") {
      console.log("capslock clicked");
      if (capsLockActivated) {
        dispatch(deactivateCapsLock());
      } else {
        dispatch(activateCapsLock());
      }
      return;
    }

    // eliminating characters such as "Shift" and "Delete" etc.
    if (key.length === 1) {
      // the character has been typed correctly
      if (key === actual) {
        /* 
        if the currentCharIndex was previously recorded as an incorrectIndex, 
        remove it from the incorrectIndex array, as it has now been rectified
        */
        if (incorrectIndexes.includes(currentCharIndex)) {
          dispatch(
            setIncorrectIndexes(
              incorrectIndexes.filter((i) => i !== currentCharIndex)
            )
          );
        }
      } else if (shiftActivated && uppers[key] === actual) {
        /* 
        if the currentCharIndex was previously recorded as an incorrectIndex, 
        remove it from the incorrectIndex array, as it has now been rectified
        */
        if (incorrectIndexes.includes(currentCharIndex)) {
          dispatch(
            setIncorrectIndexes(
              incorrectIndexes.filter((i) => i !== currentCharIndex)
            )
          );
        }

        dispatch(deactivateShift());
      }

      // the character has been typed incorrectly
      else {
        dispatch(deactivateShift());
        /* 
        if the previous character has been typed incorrectly and has not been fixed i.e it is an incorrectIndex, 
        then do not continue the process, as two adjacent incorrect characters is not allowed
        */
        if (incorrectIndexes.includes(currentCharIndex - 1)) {
          return;
        }

        /* the character has been typed incorrectly and the previous character has been typed correctly, 
        so increment the incorrectChars counter and add the currentIndex as an incorrectIndex
        */
        if (!incorrectIndexes.includes(currentCharIndex)) {
          dispatch(incrementIncorrectChars());
          dispatch(addIncorrectIndex(currentCharIndex));
        }
      }

      // increment the currentCharIndex
      dispatch(incrementCurrentCharIndex());
    }
  }

  // used to prevent the page from scrolling when the space key is clicked
  function onKeyPressed(e: KeyboardEvent) {
    if (e.key === " ") {
      e.preventDefault();
    }
  }

  const characterArray: JSX.Element[] = [];

  const containerWidth = 720;
  const characterWidth = 30;

  let control = 0;

  Array.from(currentBlock).forEach((char, index) => {
    control += characterWidth;

    if (index === currentCharIndex) {
      if (char === " ") {
        characterArray.push(
          <CurrentCharacter key={index}>&nbsp;</CurrentCharacter>
        );
      } else {
        characterArray.push(
          <CurrentCharacter key={index}>{char}</CurrentCharacter>
        );
      }
    } else if (index < currentCharIndex) {
      // character has been typed incorrectly
      if (incorrectIndexes.includes(index)) {
        if (char === " ") {
          characterArray.push(
            <IncorrectCharacter key={index}>&nbsp;</IncorrectCharacter>
          );
        } else {
          characterArray.push(
            <IncorrectCharacter key={index}>{char}</IncorrectCharacter>
          );
        }
      }
      // character has been typed correctly
      else {
        if (char === " ") {
          characterArray.push(
            <CorrectCharacter key={index}>&nbsp;</CorrectCharacter>
          );
        } else {
          characterArray.push(
            <CorrectCharacter key={index}>{char}</CorrectCharacter>
          );
        }
      }
    } else {
      // character has not been typed yet
      if (char === "") {
        characterArray.push(
          <UntouchedCharacter key={index}>&nbsp;</UntouchedCharacter>
        );
      } else {
        characterArray.push(
          <UntouchedCharacter key={index}>{char}</UntouchedCharacter>
        );
      }
    }
  });

  return (
    <>
      <ArenaContainer>{characterArray}</ArenaContainer>
    </>
  );
};
