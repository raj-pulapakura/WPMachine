import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { ResultsPage } from "./pages/ResultsPage";

export const routes = {
  home: "/",
  results: "/results",
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<MainPage />} />
        <Route path={routes.results} element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
