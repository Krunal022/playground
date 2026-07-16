import React from "react";

const Navbar = ({ setIsCartOpen }) => {
  return (
    <div className="bg-gray-700 rounded flex items-center justify-between py-3 px-5">
      <div className="logo">
        <img src="./src/assets/react.svg" alt="" />
      </div>
      <div className="links flex gap-7 font-semibold text-2xl text-white">
        <a href="#" onClick={() => setIsCartOpen(false)}>
          Products
        </a>
        <a href="#" onClick={() => setIsCartOpen(true)}>
          Cart
        </a>
      </div>
      <div className="buttons flex gap-2">
        <button className="px-2 py-1 rounded font-semibold bg-gray-50 active:scale-98 cursor-pointer">
          LogIn
        </button>
        <button className="px-2 py-1 rounded font-semibold bg-gray-50 active:scale-98 cursor-pointer">
          SignIn
        </button>
      </div>
    </div>
  );
};

export default Navbar;
