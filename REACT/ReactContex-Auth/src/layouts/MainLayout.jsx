import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="grid grid-cols-[1fr_5fr]">
      <Navbar />
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
