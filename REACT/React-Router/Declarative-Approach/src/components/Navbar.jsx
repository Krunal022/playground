import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="mx-2 rounded-xl px-5 py-2 bg-gray-700 flex items-center justify-between">
      <div className="logo p-4 rounded-full bg-black"></div>
      <div className="links flex gap-10 font-semibold text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold"
              : "text-white hover:text-blue-300"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold"
              : "text-white hover:text-blue-300"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold"
              : "text-white hover:text-blue-300"
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive
              ? "text-blue-500 font-bold"
              : "text-white hover:text-blue-300"
          }
        >
          Products
        </NavLink>
      </div>
      <div className="buttons flex gap-2">
        <button className="px-4 py-1.5 bg-blue-500 rounded-lg cursor-pointer ">
          LogIn
        </button>
        <button className="px-4 py-1.5 bg-blue-700 rounded-lg cursor-pointer ">
          SignIn
        </button>
      </div>
    </div>
  );
};

export default Navbar;
