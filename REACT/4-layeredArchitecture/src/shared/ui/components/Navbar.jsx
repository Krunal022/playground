import React from "react";
import { NavLink } from "react-router";
import { useAuth } from "../../../features/auth/hooks/useAuthHook";

const Navbar = () => {
  const { logOutHandler } = useAuth();
  return (
    <div className="w-full bg-black/80 px-4 py-4">
      <div className="mx-auto max-w-5xl bg-white rounded-full p-2 shadow-lg">
        <div className="flex items-center justify-between gap-2 overflow-x-auto">
          {/* Home */}
          <NavLink
            to="/main"
            className={({ isActive }) =>
              ` px-4 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-orange-400 text-black shadow-md"
                  : "text-gray-700 hover:bg-orange-100 hover:text-orange-600"
              }`
            }
            end
          >
            Home
          </NavLink>

          {/* Products */}
          <NavLink
            to="/main/product"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-orange-400 text-black shadow-md"
                  : "text-gray-700 hover:bg-orange-100 hover:text-orange-600"
              }`
            }
          >
            Products
            <span className="bg-black text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">
              4
            </span>
          </NavLink>

          {/* Blog */}
          <NavLink
            to="/main/cart"
            className={({ isActive }) =>
              `px-4 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-orange-400 text-black shadow-md"
                  : "text-gray-700 hover:bg-orange-100 hover:text-orange-600"
              }`
            }
          >
            Cart
          </NavLink>

          {/* About */}
          <NavLink
            to="/main/order"
            className={({ isActive }) =>
              `px-4 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-orange-400 text-black shadow-md"
                  : "text-gray-700 hover:bg-orange-100 hover:text-orange-600"
              }`
            }
          >
            Orders
          </NavLink>

          {/* Logout Button */}
          <button
            onClick={() => logOutHandler()}
            className="px-4 py-3 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-all duration-300 whitespace-nowrap cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
