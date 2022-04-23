import React from "react";
import { Arena } from "../components/Arena/Arena";
import { Timer } from "../components/Timer/Timer";

interface MainPageProps {}

export const MainPage: React.FC<MainPageProps> = ({}) => {
  return (
    <div>
      <h1>WPMachine</h1>
      <Timer />
      <Arena />
    </div>
  );
};
