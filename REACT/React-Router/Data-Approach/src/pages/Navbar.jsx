import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="p-3 bg-black text-white flex items-center justify-center gap-10 font-semibold text-2xl">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/contact"}>Contact</NavLink>
    </div>
  );
};

export default Navbar;
