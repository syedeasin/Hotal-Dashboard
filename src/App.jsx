import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="main d-flex">
          <div className="sidebarWrapper">
            {/* <span className="sidebarTitle">main pages</span> */}
            <Sidebar />
          </div>
          <div className="context">
            <Routes>
              <Route path={"/"} exact={true} element={<Dashboard />} />
              <Route path={"/dashboard"} exact={true} element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
