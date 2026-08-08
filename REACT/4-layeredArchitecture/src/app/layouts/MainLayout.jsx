import React from "react";
import { Navigate, Outlet } from "react-router";
import Navbar from "../../shared/ui/components/Navbar";
import { useSelector } from "react-redux";
import AuthLayout from "./AuthLayout";

const MainLayout = () => {
  const { user, isLoading } = useSelector((store) => store.auth);

  if (isLoading) {
    return <h1>Loading main page...</h1>;
  }
  if (!user) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <Navbar />
      <div className="p-4 bg-black min-h-163 text-white">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
