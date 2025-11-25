"use client";

import React from "react";
import {
  MoreVertical,
} from "lucide-react";
import Image from "next/image";
import CreatePostCard from "./CreatePostCard";
import PostFooter from "./PostFooter";

const Feed = () => {
  

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
        <PostFooter/>
      </div>
    </div>
  );
};

export default Feed;
