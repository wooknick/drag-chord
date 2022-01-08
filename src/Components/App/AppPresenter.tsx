import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Forbidden from "../Forbidden";
import Home from "../Home";

const AppPresenter: React.FunctionComponent = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Forbidden />} />
    </Routes>
  </BrowserRouter>
);

export default AppPresenter;
