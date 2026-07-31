import React from "react";
import { NavLink } from "react-router";
import { Home, Users, ShoppingBag, Info, Mail } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Users", path: "/main/users", icon: Users },
  { name: "Products", path: "/main/products", icon: ShoppingBag },
  { name: "About", path: "/main/about", icon: Info },
  { name: "Contact", path: "/main/contact", icon: Mail },
];

const Navbar = () => {
  return (
    <aside className=" sticky top-0 h-screen w-72 bg-white/90 backdrop-blur-xl border-r border-purple-100 shadow-[0_10px_40px_rgba(168,85,247,0.12)] p-5 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-11 h-11 rounded-2xl bg-linear-to-br from-purple-500 to-violet-400 flex items-center justify-center shadow-lg shadow-purple-200">
          <span className="text-white font-bold text-lg">K</span>
        </div>

        <div>
          <h1 className="text-lg font-semibold text-gray-900">Project 0.1</h1>
          <p className="text-xs text-gray-500">Navigation</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-linear-to-r from-transparent via-purple-200 to-transparent mb-6"></div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-2">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-purple-100 text-purple-700 shadow-sm"
                    : "text-gray-700 hover:bg-purple-50 hover:text-purple-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-white text-purple-600 shadow-sm"
                        : "bg-transparent text-gray-500 group-hover:text-purple-600"
                    }`}
                  >
                    <Icon size={20} />
                  </div>

                  <span>{item.name}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Bottom Card */}
      <div className="mt-auto pt-6">
        <div className="rounded-3xl bg-linear-to-br from-purple-50 to-violet-100 p-4 border border-purple-100 shadow-inner">
          <p className="text-xs text-purple-700 mt-1 leading-relaxed">
            Your session will end after logging out.{" "}
          </p>

          <button className="mt-4 w-full rounded-xl bg-white text-purple-600 text-sm font-medium py-2.5 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm cursor-pointer">
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Navbar;
