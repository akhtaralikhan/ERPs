import React from "react";
import { Routes, Route } from "react-router-dom";

import { publicRoutes, privateRoutes } from "../routes/allRoutes";
import AuthProtected from "../routes/AuthProtected";

// Layouts
import DefaultLayout from "../layouts/ProtectedLayout";
import NonAuthLayout from "../layouts/NonAuthLayout";

const IndexRouter = () => {
  return (
    <Routes>
      {/* Public Layout */}
      <Route element={<NonAuthLayout />}>
        {publicRoutes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.component} />
        ))}
      </Route>

      {/* Protected Layout */}
      <Route element={<AuthProtected />}>
        <Route element={<DefaultLayout />}>
          {privateRoutes.map((route, idx) => (
            <Route key={idx} path={route.path} element={route.component} />
          ))}
        </Route>
      </Route>
    </Routes>
  );
};

export default IndexRouter;