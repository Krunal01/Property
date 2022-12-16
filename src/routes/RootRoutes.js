import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from ".";
import AuthLayout from "../layouts/AuthLayout";
import PublicLayout from "../layouts/PublicLayout";

function RootRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {privateRoutes.map(({ path, component }) => (
          <Route
            key={path}
            path={path}
            element={<AuthLayout>{component}</AuthLayout>}
          />
        ))}
        
        {publicRoutes.map(({ path, component }) => (
          <Route
            key={path}
            path={path}
            element={<PublicLayout>{component}</PublicLayout>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default RootRoutes;
