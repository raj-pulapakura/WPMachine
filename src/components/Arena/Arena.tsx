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
  incrementIncorrectChars,
} from "../../redux/slices/process";
import store, { RootState } from "../../redux/store";
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

  useEffect(() => {
    console.log("update", currentCharIndex);
  }, [currentCharIndex]);

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

    // pulling the most recent data from the store
    const currentCharIndex = store.getState().process.currentCharIndex;
    const currentBlock = store.getState().process.currentBlock;
    const incorrectIndexes = store.getState().process.incorrectIndexes;
    const actual = currentBlock[currentCharIndex];
    const started = store.getState().process.started;

    if (!started) {
      dispatch(startProcess());
    }

    const { key, metaKey, altKey, ctrlKey, shiftKey } = e;

    // handling a backspace
    if (key === "Backspace") {
      if (incorrectIndexes.includes(currentCharIndex - 1)) {
        dispatch(
          setIncorrectIndexes(
            incorrectIndexes.filter((i) => i !== currentCharIndex - 1)
          )
        );
      }

      dispatch(decrementCurrentCharIndex());
      return;
    }

    // eliminating characters such as "Shift" and "Delete" etc.
    if (key.length === 1) {
      console.log({ key, actual });

      // the character has been typed correctly
      if (key === actual) {
        if (incorrectIndexes.includes(currentCharIndex)) {
          dispatch(
            setIncorrectIndexes(
              incorrectIndexes.filter((i) => i !== currentCharIndex)
            )
          );
        }
      }
      // the character has been typed incorrectly
      else {
        if (incorrectIndexes.includes(currentCharIndex - 1)) {
          return;
        }

        if (!incorrectIndexes.includes(currentCharIndex)) {
          dispatch(incrementIncorrectChars());
          dispatch(addIncorrectIndex(currentCharIndex));
        }
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
