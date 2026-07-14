import React from "react";

const UserCard = () => {
  return (
    <div className="bg-red-300 w-60 border-2 h-80 rounded-md flex overflow-hidden">
      <div className="bg-green-400 w-12 h-full flex items-end justify-center p-3">
        <p className="[writing-mode:vertical-rl] rotate-180 font-bold text-2xl opacity-85 text-black">
          ID CARD –––––––
        </p>
      </div>
      <div className="bg-white w-full h-full flex flex-col justify-between py-2 px-1">
        <p className="text-center text-sm font-semibold">Something..</p>
        <div className=" w-full h-35 flex items-center justify-center">
          <img
            className="obj-cover h-full border-b-4 border-t-4 border-green-400 "
            src="https://i.pinimg.com/736x/ef/0c/e4/ef0ce4b2473d7a6792e220d78fa8e1d0.jpg"
            alt=""
          />
        </div>
        <h2 className="text-xl font-semibold">Krunal Waghela.</h2>
        <div>
          <p className="text-sm font-medium opacity-85">
            mail: krunal12@gmail.com
          </p>
          <p className="text-sm font-medium opacity-85 ">
            phone no: 8160866907
          </p>
          <p className="text-sm font-medium opacity-85">ID no. 01</p>
        </div>
        <div className="flex items-center justify-between mt-2 px-2">
          <button className="px-2 py-1 font-semibold border active:scale-98 cursor-pointer bg-emerald-300 rounded ">
            Update
          </button>
          <button className="px-2 py-1 font-semibold border active:scale-98 cursor-pointer bg-red-400 rounded ">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
