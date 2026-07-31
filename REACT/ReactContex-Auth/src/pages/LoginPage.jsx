import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formHandler = (data) => {
    console.log("Login DAta:", data);
    reset()
  };

  return (
    <div className="min-h-screen bg-[#6b647d] flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-6xl bg-[#211a35] rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left Side */}
        <div className="hidden lg:flex lg:w-1/2 p-4">
          <div className="relative w-full rounded-3xl overflow-hidden bg-linear-to-br from-purple-700 via-purple-800 to-black">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop"
              alt="Desert"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />

            <div className="relative z-10 flex flex-col justify-between h-full p-8">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-widest text-white">
                  Project i.
                </h1>

                <button className="px-4 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white/20 transition">
                  Back to website →
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl font-bold text-white leading-tight">
                    Capturing Moments,
                    <br />
                    Creating Memories
                  </h2>
                </div>

                <div className="flex gap-2">
                  <span className="w-8 h-1 rounded-full bg-white/40"></span>
                  <span className="w-8 h-1 rounded-full bg-white/40"></span>
                  <span className="w-8 h-1 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 md:p-12">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden mb-8 text-center">
              <h1 className="text-3xl font-bold tracking-widest text-white">
                ⁛
              </h1>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-3">
              Welcome back
            </h2>

            <p className="text-gray-400 mb-8">
              Don't have an account?{" "}
              <a
                onClick={() => navigate("/register")}
                className="text-purple-400 hover:text-purple-300 cursor-pointer"
              >
                Sign up
              </a>
            </p>

            <form onSubmit={handleSubmit(formHandler)} className="space-y-5">
              {/* Email */}
              <div>
                <input
                  {...register("email", { required: "email is required!" })}
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-4 rounded-xl bg-[#2d2545] border border-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                />
              </div>

              {/* Password */}
              <div className="relative">
                <input
                  {...register("password", {
                    required: "password is required!",
                  })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 py-4 pr-12 rounded-xl bg-[#2d2545] border border-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition cursor-pointer"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-300">
                  <input type="checkbox" className="accent-purple-500" />
                  Remember me
                </label>

                <a className="text-purple-400 hover:text-purple-300 cursor-pointer">
                  Forgot password?
                </a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition duration-200 shadow-lg shadow-purple-900/30 cursor-pointer"
              >
                Login
              </button>
            </form>

            <p className="text-center text-gray-500 text-sm mt-8">
              © 2026 Project 0.1 | All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
