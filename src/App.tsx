import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ResultsPage } from "./pages/ResultsPage";
import { TestPage } from "./pages/TestPage";

export const routes = {
  home: "/",
  results: "/results",
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<TestPage />} />
        <Route path={routes.results} element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
