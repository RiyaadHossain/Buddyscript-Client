import { Image as LucidImage } from "lucide-react";

export default function CommentSection() {
  return (
    <>
      {/* View Previous Comments */}
      <button className="text-sm text-gray-600 hover:text-gray-800 font-medium mb-4 transition-colors duration-200">
        View 4 previous comments
      </button>

      {/* Comment Section */}
      <div className="space-y-4">
        {/* Single Comment */}
        <div className="flex items-start space-x-3">
          <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shrink-0">
            <span className="text-white font-semibold text-sm">RS</span>
          </div>
          <div className="flex-1">
            <div className="bg-gray-50 rounded-lg p-3 mb-2">
              <h4 className="text-sm font-semibold text-gray-900 mb-1">
                Radovan SkillArena
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-600 px-3">
              <button className="hover:text-blue-500 font-medium transition-colors duration-200">
                Like
              </button>
              <span className="text-gray-400">•</span>
              <button className="hover:text-blue-500 font-medium transition-colors duration-200">
                Reply
              </button>
              <span className="text-gray-400">•</span>
              <button className="hover:text-blue-500 font-medium transition-colors duration-200">
                Share
              </button>
              <span className="text-gray-400">•</span>
              <span className="text-gray-500">21m</span>
              <div className="flex items-center space-x-1 ml-auto">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-blue-500"
                >
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                </svg>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-red-500"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
                <span className="text-sm font-medium text-gray-700">198</span>
              </div>
            </div>

            {/* Nested Reply Input */}
            <div className="flex items-center space-x-3 mt-3">
              <div className="w-8 h-8 bg-linear-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shrink-0">
                <span className="text-white font-semibold text-xs">KS</span>
              </div>
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Write a comment"
                  className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" y1="19" x2="12" y2="23" />
                      <line x1="8" y1="23" x2="16" y2="23" />
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <LucidImage className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
