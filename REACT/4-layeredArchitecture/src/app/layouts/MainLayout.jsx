import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../shared/ui/components/Navbar";

const MainLayout = () => {
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
