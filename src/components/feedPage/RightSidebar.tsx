"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import Image from "next/image";

const RightSidebar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const suggestedUser = {
    name: "Radovan SkillArena",
    role: "Founder & CEO at Trophy",
    avatar: "RS",
    avatarBg: "from-orange-400 to-red-500",
    imageUrl: "/assets/images/chat1_img.png",
  };

  const friends = [
    {
      name: "Steve Jobs",
      role: "CEO of Apple",
      avatar: "SJ",
      avatarBg: "from-gray-700 to-gray-900",
      lastSeen: "5 minute ago",
      isOnline: false,
      imageUrl: "/assets/images/chat2_img.png",
    },
    {
      name: "Ryan Roslansky",
      role: "CEO of Linkedin",
      avatar: "RR",
      avatarBg: "from-blue-500 to-blue-700",
      isOnline: true,
      imageUrl: "/assets/images/chat3_img.png",
    },
    {
      name: "Dylan Field",
      role: "CEO of Figma",
      avatar: "DF",
      avatarBg: "from-purple-500 to-pink-500",
      isOnline: true,
      imageUrl: "/assets/images/chat4_img.png",
    },
    {
      name: "Steve Jobs",
      role: "CEO of Apple",
      avatar: "SJ",
      avatarBg: "from-gray-700 to-gray-900",
      isOnline: false,
      imageUrl: "/assets/images/chat5_img.png",
    },
  ];

  return (
    <div className="w-[350px] min-h-screen p-4 space-y-4">
      {/* You Might Like Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">You Might Like</h2>
          <button className="text-blue-500 hover:text-blue-600 text-sm transition-colors duration-200">
            See All
          </button>
        </div>

        {/* Suggested User Card */}
        <div className="space-y-4">
          <div className="flex items-start space-x-3 mb-4">
            <div
              className={`w-12 h-12 rounded-full flex items-center relative justify-center `}
            >
              <Image
                src={suggestedUser.imageUrl}
                alt=""
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-gray-900 mb-1">
                {suggestedUser.name}
              </h3>
              <p className="text-sm text-gray-500">{suggestedUser.role}</p>
            </div>
          </div>

          {/* Action Buttons - Full Width */}
          <div className="flex space-x-2">
            <button className="flex-1 px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200">
              Ignore
            </button>
            <button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-colors duration-200">
              Follow
            </button>
          </div>
        </div>
      </div>

      {/* Your Friends Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Your Friends</h2>
          <button className="text-blue-500 hover:text-blue-600 text-sm transition-colors duration-200">
            See All
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2.5 border-none rounded-full bg-gray-100 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="input search text"
          />
        </div>

        {/* Friends List */}
        <div className="space-y-4">
          {friends.map((friend, index) => (
            <div
              key={index}
              className="flex items-center justify-between group cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200"
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center relative`}
                >
                  <Image
                    src={friend.imageUrl}
                    alt=""
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 truncate">
                    {friend.name}
                  </h3>
                  <p className="text-xs text-gray-500 truncate">
                    {friend.role}
                  </p>
                </div>
              </div>
              <div className="flex items-center ml-2">
                {friend.isOnline ? (
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></div>
                ) : (
                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    {friend.lastSeen}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
