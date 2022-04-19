import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ResultsPage } from "./old/pages/ResultsPage";
import { TestPage } from "./old/pages/TestPage";

export const routes = {
  home: "/",
  results: "/results",
};

function App() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path={routes.home} element={<TestPage />} />
    //     <Route path={routes.results} element={<ResultsPage />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
