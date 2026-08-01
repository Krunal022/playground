import React, { useContext } from "react";
import { Mail, Lock } from "lucide-react";
import { Auth } from "../context/AuthContext"; // adjust path

const UserProfileCard = () => {
  const { loggedInUser } = useContext(Auth);

  if (!loggedInUser) return null;

  const name = loggedInUser.username || loggedInUser.name || "Guest User";
  const email = loggedInUser.email || "No email";
  const password = loggedInUser.password || "••••••••";

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative overflow-hidden rounded-4xl bg-white/80 backdrop-blur-2xl border border-purple-100 shadow-[0_20px_60px_rgba(168,85,247,0.18)] p-8">
        {/* Decorative glow */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-purple-300/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-violet-300/30 rounded-full blur-3xl"></div>

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Name */}
          <h2 className="text-2xl font-bold text-gray-900 capitalize">
            {name}
          </h2>

          <p className="text-sm text-purple-600 font-medium mt-1">
            Profile Overview
          </p>

          {/* Info Cards */}
          <div className="w-full mt-8 space-y-4">
            <div className="flex items-center gap-4 rounded-2xl bg-purple-50/80 border border-purple-100 p-4 hover:bg-purple-100/70 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-purple-600 shadow-sm">
                <Mail size={20} />
              </div>

              <div className="text-left flex-1 min-w-0">
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                  Email
                </p>
                <p className="text-sm font-medium text-gray-800 truncate">
                  {email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-purple-50/80 border border-purple-100 p-4 hover:bg-purple-100/70 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-purple-600 shadow-sm">
                <Lock size={20} />
              </div>

              <div className="text-left flex-1 min-w-0">
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold">
                  Password
                </p>
                <p className="text-sm font-medium text-gray-800 truncate">
                  {password}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
