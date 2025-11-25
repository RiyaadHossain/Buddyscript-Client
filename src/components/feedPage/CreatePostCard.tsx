import {
  Calendar,
  FileText,
  Image as LucideImage,
  Send,
  Video,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function CreatePostCard() {
  const [postContent, setPostContent] = useState("");

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      {/* Post Input */}
      <div className="flex items-start space-x-3 mb-4">
        <div className="w-10 h-10 rounded-full flex items-center justify-center relative">
          <Image src="/assets/images/people2.png" alt="" fill className="" />
        </div>
        <div className="flex-1">
          <textarea
            rows={2}
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="Write something ..."
            className="w-full resize-none px-4 py-2.5 bg-gray-50 border-none  rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="flex space-x-2">
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
            <LucideImage className="w-5 h-5" />
            <span className="text-sm font-medium">Photo</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
            <Video className="w-5 h-5" />
            <span className="text-sm font-medium">Video</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-medium">Event</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
            <FileText className="w-5 h-5" />
            <span className="text-sm font-medium">Article</span>
          </button>
        </div>
        <button className="flex items-center space-x-2 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200">
          <Send className="w-4 h-4" />
          <span className="text-sm font-semibold">Post</span>
        </button>
      </div>
    </div>
  );
}
