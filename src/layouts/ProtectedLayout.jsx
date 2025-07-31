import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/SideBar";
import React from "react";
const ProtectedLayout = () => {

  return (
    <div className="app-layout">
      <Navbar />
      <div className="main-content-wrapper">
        <Sidebar />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProtectedLayout;
