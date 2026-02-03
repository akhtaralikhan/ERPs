import React from "react";
import { Outlet } from "react-router-dom";

const NonAuthLayout = () => {
  return (
    <main className="auth-layout">
      <Outlet />
    </main>
  );
};

export default NonAuthLayout;
