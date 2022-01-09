import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Components/Header";
import Forbidden from "../Routes/Forbidden";
import Home from "../Routes/Home";

const AppPresenter: React.FunctionComponent = () => (
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Forbidden />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default AppPresenter;
