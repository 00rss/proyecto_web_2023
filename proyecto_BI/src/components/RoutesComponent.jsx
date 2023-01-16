import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
// import Home from "./pages/Home";
// import Login from "./pages/Login";

// import { history } from "./helpers/history";
const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/home" element={<Home />} /> */}
        {/* <Route exact path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
