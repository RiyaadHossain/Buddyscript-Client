"use client";

import React from "react";
import {
  MoreVertical,
  MessageCircle,
  Share2,
} from "lucide-react";
import Image from "next/image";
import CreatePostCard from "./CreatePostCard";

const Feed = () => {
  const reactionAvatars = [
    {
      imageUrl: "/assets/images/react_img1.png",
      bg: "from-yellow-500 to-orange-500",
      initials: "KS",
    },
    {
      imageUrl: "/assets/images/react_img2.png",
      bg: "from-yellow-500 to-orange-500",
      initials: "KS",
    },
    {
      imageUrl: "/assets/images/react_img3.png",
      bg: "from-pink-500 to-red-500",
      initials: "RR",
    },
    {
      imageUrl: "/assets/images/react_img4.png",
      bg: "from-purple-500 to-blue-500",
      initials: "DF",
    },
    {
      imageUrl: "/assets/images/react_img5.png",
      bg: "from-green-500 to-teal-500",
      initials: "SJ",
    },
    {
      imageUrl: "/assets/images/react_img6.png",
      bg: "from-blue-500 to-cyan-500",
      initials: "MZ",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      {/* Create Post Card */}
      <CreatePostCard/>

      {/* Post Card */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden p-4">
        {/* Post Header */}
        <div className="">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center relative">
                <Image
                  src="/assets/images/people3.png"
                  alt=""
                  fill
                  className=""
                />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  Karim Saif
                </h3>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span>5 minute ago</span>
                  <span>•</span>
                  <span>Public</span>
                </div>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600 p-1">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          {/* Post Content */}
          <p className="text-gray-800 mb-3">-Healthy Tracking App</p>
        </div>

        {/* Post Image */}
        <div className="w-[560px] h-[378px] rounded-sm flex items-center relative justify-center">
          <Image
            src="/assets/images/timeline_img.png"
            alt=""
            fill
            className=""
          />
        </div>

        {/* Post Footer */}
        <div className="pt-3">
          {/* Reactions */}
          <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-100">
            <div className="flex items-center">
              <div className="flex -space-x-4">
                {reactionAvatars.map((avatar, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 rounded-full flex items-center justify-center relative z-10"
                  >
                    <Image src={avatar.imageUrl} alt="" fill className="" />
                  </div>
                ))}
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white z-50">
                  <span className="text-white font-semibold text-xs">9+</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="hover:text-gray-700 cursor-pointer">
                12 Comment
              </span>
              <span className="hover:text-gray-700 cursor-pointer">
                122 Share
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-around">
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
              </svg>
              <span className="text-sm font-medium">Like</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Comment</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              <Share2 className="w-5 h-5" />
              <span className="text-sm font-medium">Share</span>
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Feed;
