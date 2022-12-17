import React from "react";
import Header from "../components/Header";

const AuthLayout = ({ children }) => {
  return (
    <div className="vh-100">
      <Header />
      {children}
    </div>
  );
};

export default AuthLayout;
