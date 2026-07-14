import React from "react";

const Form = () => {
  return (
    <div className="text-white p-5 flex items-center justify-center flex-col gap-2 h-[83vh]">
      <form className="bg-gray-200 text-black w-150 h-120 rounded-2xl p-5 flex flex-col gap-4 relative overflow-hidden">
        <p className="text-sm text-center py-3 text-blue-800">
          Complete the fields below to add a new user!
        </p>
        <input
          className="w-full capitalize outline-0 border z-10 text-2xl font-semibold rounded-xl py-3  p-2"
          type="text"
          placeholder="John Doe"
        />
        <input
          className="w-full outline-0 border z-10 text-2xl font-semibold rounded-xl py-3  p-2"
          type="email"
          placeholder="John@email.com"
        />
        <input
          className="w-full outline-0 border z-10 text-2xl font-semibold rounded-xl py-3  p-2"
          type="number"
          placeholder="91+ 8111111111"
        />
        <input
          className="w-full outline-0 border z-10 text-2xl font-semibold rounded-xl py-3  p-2"
          type="url"
          placeholder="Image URL"
        />
        <button className="w-full outline-0 z-10 bg-blue-500 text-white  border border-black text-2xl font-semibold rounded-xl py-3 cursor-pointer active:scale-99  p-2">
          Create
        </button>
        <img
          src="../src/assets/react.svg"
          className="absolute right-30 rotate-95 z-3 bottom-25 opacity-20 scale-900"
          alt=""
        />
      </form>
    </div>
  );
};

export default Form;
