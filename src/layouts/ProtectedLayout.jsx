///protectedLayout.jsx  file : 
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import React, { useState } from "react";
import Sidebar from "../Components/SideBar";
import Footer from "../Components/Footer";

const ProtectedLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`app-layout ${collapsed ? "sidebar-collapsed" : "sidebar-expanded"}`}>
      <Navbar />
      <div className="main-content-wrapper">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <div className="page-content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProtectedLayout;