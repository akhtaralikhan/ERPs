import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import SignUp from "./Pages/Auth/SignUp";
import Login from "./Pages/Auth/Login";
import "./assets/css/theme.min.css";
import "./vendors/simplebar/simplebar.min.css";
import feather from "feather-icons";
import Navbar from "./Components/Navbar";
import BankAccounts from "./Pages/DashBoard/BankAccounts";
import Sidebar from "./Components/SideBar";
import Index from "./Pages/DashBoard/Index";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
const App = () => {
  const location = useLocation();

  const hideNavbarRoutes = ["/SignUp", "/Login", "/ForgetPassword"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
  const shouldHideSidebar = hideNavbarRoutes.includes(location.pathname);

  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      {!shouldHideSidebar && <Sidebar />}
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Index />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/BankAccounts" element={<BankAccounts />} />
      </Routes>
    </>
  );
};

export default App;
