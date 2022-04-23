import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { routes } from "../App";
import { clearProcessState } from "../redux/slices/process";
import { clearTimerState } from "../redux/slices/timer";
import { RootState } from "../redux/store";
import { calculateAccuracy } from "../utils/calculateAccuracy";
import { calculateWPM } from "../utils/calculateWPM";
import { separateSeconds } from "../utils/separateSeconds";

interface ResultsPageProps {}

export const ResultsPage: React.FC<ResultsPageProps> = ({}) => {
  const { incorrectAttempts, testTextSplit, testText } = useSelector(
    (state: RootState) => state.process
  );
  const { timeStarted, timeEnded } = useSelector(
    (state: RootState) => state.timer
  );

  const [WPM, setWPM] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [calculating, setCalculating] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setCalculating(true);
    const x = separateSeconds(Math.floor((timeEnded - timeStarted) / 1000));
    setWPM(calculateWPM(testTextSplit.length, x));
    setAccuracy(calculateAccuracy(incorrectAttempts, testText.length));
    setCalculating(false);
  }, []);

  function onRetryClick() {
    clearProcessState();
    clearTimerState();
    navigate(routes.home);
  }

  return (
    <div>
      <h1>Results</h1>
      {calculating ? (
        <h3>Calculating...</h3>
      ) : (
        <>
          <h3>WPM: {WPM}</h3>
          <h3>Accuracy: {accuracy}%</h3>
          <button onClick={onRetryClick}>Retry</button>
        </>
      )}
    </div>
  );
};
