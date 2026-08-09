import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const AuthLayout = () => {
  const { user, isLoading } = useSelector((store) => store.auth);

  if (isLoading) {
    return <h1>Loading main page...</h1>;
  }

  if (user) {
    return <Navigate to={"/main"} />;
  }
  return <Outlet />;
};

export default AuthLayout;
