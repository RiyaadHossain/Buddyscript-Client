import { MessageCircle, Share2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import CommentInput from "./CommentInput";
import CommentSection from "./CommentSection";

interface Reaction {
  emoji: string;
  label: string;
  color: string;
}

export default function PostFooter() {
  const [showReactions, setShowReactions] = useState(false);

  const reactions = [
    { emoji: "👍", label: "Like", color: "text-blue-500" },
    { emoji: "❤️", label: "Love", color: "text-red-500" },
    { emoji: "😊", label: "Haha", color: "text-yellow-500" },
    { emoji: "😮", label: "Wow", color: "text-yellow-500" },
    { emoji: "😢", label: "Sad", color: "text-yellow-500" },
    { emoji: "😡", label: "Angry", color: "text-orange-500" },
  ];

  const reactionAvatars = [
    {
      imageUrl: "/assets/images/react_img1.png",
      initials: "KS",
    },
    {
      imageUrl: "/assets/images/react_img2.png",
      initials: "KS",
    },
    {
      imageUrl: "/assets/images/react_img3.png",
      initials: "RR",
    },
    {
      imageUrl: "/assets/images/react_img4.png",
      initials: "DF",
    },
    {
      imageUrl: "/assets/images/react_img5.png",
      initials: "SJ",
    },
    {
      imageUrl: "/assets/images/react_img6.png",
      initials: "MZ",
    },
  ];

  const likeButtonOnclick = () => {
    toast.success("You Liked bro");
  };

  const onClickReact = (react: Reaction): void => {
    toast.success(`You reacted ${react.emoji}`);
  };

  return (
    <>
      {/* Post Footer */}
      <div className="p-4">
        {/* Reactions */}
        <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-100 z-10">
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
        <div className="flex items-center justify-around border-b border-gray-100 pb-3 mb-4">
          <div
            className="relative"
            onMouseEnter={() => setShowReactions(true)}
            onMouseLeave={() => setShowReactions(false)}
          >
            <button
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              onClick={likeButtonOnclick}
            >
              <span className="text-lg">😊</span>
              <span className="text-sm font-medium">Haha</span>
            </button>

            {/* Reactions Popup */}
            {showReactions && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white rounded-full shadow-lg border border-gray-200 px-2 py-2 flex space-x-1 animate-fadeInUp z-50">
                {reactions.map((reaction, index) => (
                  <button
                    onClick={() => onClickReact(reaction)}
                    key={index}
                    className="w-10 h-10 flex items-center justify-center hover:scale-125 transition-transform duration-200 rounded-full hover:bg-gray-100"
                    title={reaction.label}
                  >
                    <span className="text-2xl">{reaction.emoji}</span>
                  </button>
                ))}
                {/* Arrow */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-gray-200 rotate-45"></div>
              </div>
            )}
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Comment</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
            <Share2 className="w-5 h-5" />
            <span className="text-sm font-medium">Share</span>
          </button>
        </div>

        {/* Comment Input */}
        <CommentInput />

        {/* Comments Section */}
        <CommentSection/>
      </div>
    </>
  );
}
