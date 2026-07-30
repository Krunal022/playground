import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/authHook";
import { addUser } from "../features/AuthSlice";

const Login = () => {
  const {
    navigate,
    register,
    handleSubmit,
    errors,
    RegisterHandler,
    LoginHandler,
    dispatch,
  } = useAuth();

  return (
    <div className="min-h-screen bg-[#2a0d02c3] flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-white rounded-4xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left Panel */}
        <div className="relative hidden md:flex flex-col justify-between p-8 bg-black text-white min-h-150">
          <div>
            <h1 className="text-4xl font-semibold leading-tight">
              Welcome back to your creative workspace.
            </h1>
          </div>

          {/* Abstract Orange Glow */}
          <div className="absolute bottom-0 left-0 right-0 h-72">
            <div className="absolute bottom-0 left-0 w-28 h-72 bg-orange-500 blur-2xl opacity-70"></div>
            <div className="absolute bottom-0 left-16 w-24 h-64 bg-orange-400 blur-2xl opacity-60"></div>
            <div className="absolute bottom-0 left-32 w-20 h-80 bg-orange-600 blur-2xl opacity-70"></div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="mb-8">
              <div className="relative w-15 h-13 sm:w-16 sm:h-16 md:w-20 md:h-16">
                <img
                  src=".\logo.png"
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 className="text-4xl font-bold text-black mb-2">Login</h2>

            <p className="text-gray-500 mb-8">
              Sign in to continue to your account
            </p>

            <form onSubmit={handleSubmit(LoginHandler)} className="space-y-5">
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "email is required!",
                  })}
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm text-gray-600">Password</label>
                  <a
                    href="#"
                    className="text-sm text-orange-500 hover:underline"
                  >
                    Forgot?
                  </a>
                </div>

                <input
                  {...register("password", {
                    required: "password is required!",
                  })}
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-xl transition duration-200 shadow-lg shadow-orange-200 cursor-pointer"
              >
                Sign In
              </button>
            </form>

            <p className="text-center text-gray-500 text-sm mt-6">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/register")}
                className="text-black font-medium hover:underline cursor-pointer"
              >
                Register
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
