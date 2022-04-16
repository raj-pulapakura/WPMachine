import React from "react";
import { Arena } from "../components/Arena/Arena";
import { Timer } from "../components/Timer/Timer";

interface TestPageProps {}

export const TestPage: React.FC<TestPageProps> = ({}) => {
  return (
    <div>
      <h1>WPM Machine</h1>
      <Timer />
      <Arena />
    </div>
  );
};
