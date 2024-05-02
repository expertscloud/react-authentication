import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const accessToken = localStorage.getItem("access_token");
  const location = useLocation();

  if (accessToken) {
    return children;
  }

  if (!location.pathname.includes("login")) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default AuthGuard;
