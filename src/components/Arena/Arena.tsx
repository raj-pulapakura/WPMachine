import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getRandomBlock } from "../../data/bank";
import {
  addIncorrectIndex,
  decrementCurrentCharIndex,
  incrementCurrentCharIndex,
  setLoaded,
  startProcess,
  updateCurrentBlock,
  setIncorrectIndexes,
  updateTimeEnded,
  updateTimeStarted,
} from "../../redux/slices/process";
import { RootState } from "../../redux/store";
import { CorrectCharacter } from "../Characters/CorrectCharacter/CorrectCharacter";
import { CurrentCharacter } from "../Characters/CurrentCharacter/CurrentCharacter";
import { IncorrectCharacter } from "../Characters/IncorrectCharacter/IncorrectCharacter";
import { UntouchedCharacter } from "../Characters/UntouchedCharacter/UntouchedCharacter";
import { ArenaContainer } from "./Arena.styles";

interface ArenaProps {}

export const Arena: React.FC<ArenaProps> = ({}) => {
  const { loaded, currentBlock, currentCharIndex, started, incorrectIndexes } =
    useSelector((state: RootState) => state.process);

  const dispatch = useDispatch();

  // setting loaded state
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

  // starting the timer when the user has started typing
  useEffect(() => {
    if (started) {
      dispatch(updateTimeStarted(Date.now()));
      setInterval(() => dispatch(updateTimeEnded(Date.now())), 1000);
    }
  }, [started]);

  // main logic for handling a key press
  function onKeyUp(e: KeyboardEvent) {
    e.preventDefault();

    if (!started) {
      dispatch(startProcess());
    }

    const { key, metaKey, altKey, ctrlKey, shiftKey } = e;
    // console.log({ key, metaKey, altKey, ctrlKey, shiftKey });

    if (key === "Backspace") {
      dispatch(decrementCurrentCharIndex());
      return;
    }

    const actual = currentBlock[currentCharIndex];

    // eliminating characters such as "Shift" and "Delete" etc.
    if (key.length === 1) {
      console.log({ key, actual });

      if (key !== actual) {
        dispatch(addIncorrectIndex(currentCharIndex));
      }

      dispatch(incrementCurrentCharIndex());
    }
  }

  // used to prevent the page from scrolling when the space key is clicked
  function onKeyPressed(e: KeyboardEvent) {
    if (e.key === " ") {
      e.preventDefault();
    }
  }

  return (
    <>
      <ArenaContainer>
        {Array.from(currentBlock).map((char, index) => {
          // character is the current character
          if (index === currentCharIndex) {
            if (char === " ") {
              return <CurrentCharacter key={index}>&nbsp;</CurrentCharacter>;
            } else {
              return <CurrentCharacter key={index}>{char}</CurrentCharacter>;
            }
          }

          if (index < currentCharIndex) {
            // character has been typed incorrectly
            if (incorrectIndexes.includes(index)) {
              if (char === " ") {
                return (
                  <IncorrectCharacter key={index}>&nbsp;</IncorrectCharacter>
                );
              } else {
                return (
                  <IncorrectCharacter key={index}>{char}</IncorrectCharacter>
                );
              }
            }
            // character has been typed correctly
            else {
              if (char === " ") {
                return <CorrectCharacter key={index}>&nbsp;</CorrectCharacter>;
              } else {
                return <CorrectCharacter key={index}>{char}</CorrectCharacter>;
              }
            }
          }

          // character has not been typed yet
          if (char === "") {
            return <UntouchedCharacter key={index}>&nbsp;</UntouchedCharacter>;
          } else {
            return <UntouchedCharacter key={index}>{char}</UntouchedCharacter>;
          }
        })}
      </ArenaContainer>
    </>
  );
};
