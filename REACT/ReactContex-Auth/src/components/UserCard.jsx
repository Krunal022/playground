import React from "react";
import { Mail, Phone, MapPin, Hash } from "lucide-react";

const UserCard = ({ user }) => {
  const fullName = `${user.name.firstname} ${user.name.lastname}`;
  const initials =
    `${user.name.firstname[0]}${user.name.lastname[0]}`.toUpperCase();

  return (
    <div className="group cursor-pointer shadow-purple-200 shadow-sm bg-white/90 backdrop-blur-xl border border-purple-100 rounded-3xl p-5 shadow-[0_10px_40px_rgba(168,85,247,0.10)] hover:shadow-[0_20px_50px_rgba(168,85,247,0.18)] hover:-translate-y-1 transition-all duration-300">
      {/* Header */}
      <div className="flex items-center gap-4 mb-5">
        <div className="w-16 h-16 rounded-2xl bg-lenear-to-br from-purple-500 to-violet-400 flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-purple-200">
          {initials}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 capitalize truncate">
            {fullName}
          </h3>

          <p className="text-sm text-purple-600 font-medium truncate">
            @{user.username}
          </p>
        </div>

        <div className="w-3 h-3 rounded-full bg-green-400 shadow-sm"></div>
      </div>

      {/* Info */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 text-sm text-gray-700">
          <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
            <Mail size={16} />
          </div>
          <span className="truncate">{user.email}</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-700">
          <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
            <Phone size={16} />
          </div>
          <span className="truncate">{user.phone}</span>
        </div>

        <div className="flex items-start gap-3 text-sm text-gray-700">
          <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mt-0.5">
            <MapPin size={16} />
          </div>

          <div className="min-w-0">
            <p className="capitalize font-medium text-gray-800">
              {user.address.city}
            </p>

            <p className="capitalize text-gray-500 truncate">
              {user.address.number} {user.address.street}
            </p>

            <p className="text-gray-400 text-xs">ZIP: {user.address.zipcode}</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 pt-4 border-t border-purple-100 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Hash size={14} />
          User ID: {user.id}
        </div>

        <button className="px-4 py-2 rounded-xl bg-purple-50 text-purple-700 text-sm font-medium hover:bg-purple-600 hover:text-white transition-all duration-300">
          View
        </button>
      </div>
    </div>
  );
};

export default UserCard;
