import React from "react";
import { Arena } from "./components/Arena/Arena";
import { Timer } from "./components/Timer/Timer";

function App() {
  return (
    <div>
      <h1>WPM Machine</h1>
      <Timer />
      <Arena />
    </div>
  );
}

export default App;
