import React from "react";
import { Arena } from "../components/Arena/Arena";

interface MainPageProps {}

export const MainPage: React.FC<MainPageProps> = ({}) => {
  return (
    <div>
      <h1>WPMachine</h1>
      <Arena />
    </div>
  );
};
