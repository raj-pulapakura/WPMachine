import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  finishCalculating,
  setAccuracy,
  setWPM,
  startCalculating,
} from "../redux/slices/calculation";
import { RootState } from "../redux/store";
import { calculateAccuracy } from "../utils/calculateAccuracy";
import { calculateWPM } from "../utils/calculateWPM";
import { separateSeconds } from "../utils/separateSeconds";

interface ResultsPageProps {}

export const ResultsPage: React.FC<ResultsPageProps> = ({}) => {
  const { incorrectChars, currentBlock } = useSelector(
    (state: RootState) => state.process
  );

  const { timeStarted, timeEnded } = useSelector(
    (state: RootState) => state.timer
  );

  const { wpm, accuracy, calculating } = useSelector(
    (state: RootState) => state.calculation
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startCalculating());

    const totalNumberOfWords = currentBlock.split(" ").length;
    const duration = separateSeconds(
      Math.round((timeEnded - timeStarted) / 1000)
    );

    const WPM = calculateWPM(totalNumberOfWords, duration);
    const accuracy = calculateAccuracy(incorrectChars, currentBlock.length);

    dispatch(finishCalculating());

    dispatch(setWPM(WPM));
    dispatch(setAccuracy(accuracy));
  }, [incorrectChars, currentBlock, timeStarted, timeEnded]);

  function onRetry() {
    
  }

  return (
    <div>
      <h1>Results page</h1>

      {calculating ? (
        <>
          <h3>Calculating...</h3>
        </>
      ) : (
        <>
          <h3>WPM: {wpm}</h3>
          <h3>Accuracy: {accuracy}</h3>

          <button>Retry test</button>
        </>
      )}
    </div>
  );
};
