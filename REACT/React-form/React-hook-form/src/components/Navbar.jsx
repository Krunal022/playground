import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <div className="mx-2 p-2 bg-gray-800 text-white flex items-center justify-between px-15 rounded-2xl">
      <div className="w-15">
        <img
          className="border border-black rounded-4xl"
          src="https://i.pinimg.com/736x/ef/0c/e4/ef0ce4b2473d7a6792e220d78fa8e1d0.jpg"
          alt=""
        />
      </div>
      <div className="links cursor-pointer flex font-semibold gap-10 text-xl">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button
        onClick={() => setToggle((prev) => !prev)}
        className="p-2 px-4 cursor-pointer text-black bg-gray-400 rounded-xl font-medium text-sm py-3 active:scale-99"
      >
        Create user 👥
      </button>
    </div>
  );
};

export default Navbar;
