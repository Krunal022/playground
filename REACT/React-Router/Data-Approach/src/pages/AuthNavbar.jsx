import React from "react";
import { NavLink } from "react-router";

const AuthNavbar = () => {
  return (
    <div className="p-3 bg-black text-white flex items-center justify-center gap-10 font-semibold text-2xl">
      <NavLink to={"#"}>Login</NavLink>
      <NavLink to={"#"}>SignUp</NavLink>
      <NavLink to={"#"}>Manage Users</NavLink>
    </div>
  );
};

export default AuthNavbar;
