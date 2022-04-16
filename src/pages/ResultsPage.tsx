import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

  const dispatch = useDispatch();

  useEffect(() => {
    const totalNumberOfWords = currentBlock.split(" ").length;
    const duration = separateSeconds(
      Math.round((timeEnded - timeStarted) / 1000)
    );

    console.log({ totalNumberOfWords, duration });

    const WPM = calculateWPM(totalNumberOfWords, duration);

    const accuracy = calculateAccuracy(incorrectChars, currentBlock.length);

    console.log({ WPM, accuracy });
  }, [incorrectChars, currentBlock, timeStarted, timeEnded]);

  return (
    <div>
      <h1>Results page</h1>
    </div>
  );
};
