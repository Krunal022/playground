import React from "react";
import Navbar from "../pages/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="p-2 text-3xl">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
