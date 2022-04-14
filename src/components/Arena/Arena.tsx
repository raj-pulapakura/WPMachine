import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getRandomBlock } from "../../data/bank";
import {
  incrementCurrentCharIndex,
  startProcess,
  updateCurrentBlock,
  updateTimeEnded,
  updateTimeStarted,
} from "../../redux/slices/process";
import { RootState } from "../../redux/store";
import { CurrentCharacter } from "../Characters/CurrentCharacter/CurrentCharacter";
import { UntouchedCharacter } from "../Characters/UntouchedCharacter/UntouchedCharacter";
import { ArenaContainer } from "./Arena.styles";

interface ArenaProps {}

export const Arena: React.FC<ArenaProps> = ({}) => {
  const { currentBlock, currentCharIndex, started } = useSelector(
    (state: RootState) => state.process
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateCurrentBlock(getRandomBlock()));
  }, []);

  useEffect(() => {
    document.addEventListener("keypress", (e) => {
      if (!started) {
        dispatch(startProcess());
      }

      const candidate = e.key;

      if (candidate === " ") {
        e.preventDefault();
      }

      console.log(candidate);

      /* MAIN LOGIC */

      // updating current character index

      dispatch(incrementCurrentCharIndex());
    });
  }, []);

  useEffect(() => {
    if (started) {
      dispatch(updateTimeStarted(Date.now()));
      setInterval(() => dispatch(updateTimeEnded(Date.now())), 1000);
    }
  }, [started]);

  const segmentedBlock = Array.from(currentBlock);

  // TODO: Render spaces as normal characters

  return (
    <>
      <ArenaContainer>
        {segmentedBlock.map((char, index) =>
          index === currentCharIndex ? (
            <CurrentCharacter key={index}>{char}</CurrentCharacter>
          ) : (
            <UntouchedCharacter key={index}>{char}</UntouchedCharacter>
          )
        )}
      </ArenaContainer>
    </>
  );
};
