import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} exact={true} element={<Dashboard />} />
          <Route path={"/dashboard"} exact={true} element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
