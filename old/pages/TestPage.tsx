import React from "react";
import { useSelector } from "react-redux";
import { Arena } from "../components/Arena/Arena";
import { CapsLockBanner } from "../components/CapsLockBanner/CapsLockBanner";
import { StatusBanner } from "../components/StatusBanner/StatusBanner";
import { StatusBar } from "../components/StatusBar/StatusBar";
import { Timer } from "../components/Timer/Timer";
import { RootState } from "../../redux/store";

interface TestPageProps {}

export const TestPage: React.FC<TestPageProps> = ({}) => {
  const capsLockActivated = useSelector(
    (state: RootState) => state.process.capsLockActivated
  );

  return (
    <>
      <h1>WPM Machine</h1>
      <StatusBar>
        {capsLockActivated && <CapsLockBanner />}
        <StatusBanner />
        <Timer />
      </StatusBar>
      <Arena />
    </>
  );
};
