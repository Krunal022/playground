import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Form = ({ setToggle, setUsers }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const submitHandle = (data) => {
    data.id = nanoid();
    setUsers((prev) => [...prev, data]);
    reset();
    setToggle((prev) => !prev);
  };

  return (
    <div className="text-white p-5 flex items-center justify-center flex-col gap-2 h-[83vh]">
      <form
        onSubmit={handleSubmit(submitHandle)}
        className="bg-gray-200 text-black w-150 h-130 rounded-2xl p-5 flex flex-col gap-3 relative overflow-hidden"
      >
        <p className="text-sm text-center py-3 text-blue-800">
          Complete the fields below to add a new user!
        </p>
        <input
          {...register("name", {
            required: "Name Required!",
            pattern: {
              value: /^\S.*$/,
              message: "Starting Spaces are not allowed [ ! ]",
            },
          })}
          className="w-full capitalize outline-0 border z-10 text-2xl font-semibold rounded-xl py-3  p-2"
          type="text"
          placeholder="John Doe"
        />
        {errors.name && (
          <small className="text-red-600">{errors.name.message}</small>
        )}
        <input
          {...register("email", {
            required: "Email Required!",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter valid email",
            },
          })}
          className="w-full outline-0 border z-10 text-2xl font-semibold rounded-xl py-3  p-2"
          type="email"
          placeholder="John@email.com"
        />
        {errors.email && (
          <small className="text-red-600">{errors.email.message}</small>
        )}
        <input
          {...register("mobile", {
            required: "Phone no. Required!",
            minLength: {
              value: 10,
              message: "Minimum 10 digits...",
            },
            maxLength: {
              value: 10,
              message: "Maximum 10 digits..",
            },
          })}
          className="w-full outline-0 border z-10 text-2xl font-semibold rounded-xl py-3  p-2"
          type="number"
          placeholder="91+ 8111111111"
        />
        {errors.mobile && (
          <small className="text-red-600">{errors.mobile.message}</small>
        )}
        <input
          {...register("image", {
            required: "Image Required!",
          })}
          className="w-full outline-0 border z-10 text-2xl font-semibold rounded-xl py-3  p-2"
          type="url"
          placeholder="Image URL"
        />
        {errors.image && (
          <small className="text-red-600">{errors.image.message}</small>
        )}
        <button className="w-full mt-3 outline-0 z-10 bg-blue-500 text-white  border border-black text-2xl font-semibold rounded-xl py-3 cursor-pointer active:scale-99  p-2">
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
