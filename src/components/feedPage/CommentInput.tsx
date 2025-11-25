import {Image as LucidImage} from "lucide-react"

export default function CommentInput() {
  return (
    <div className="flex items-center space-x-3 mb-4">
      <div className="w-10 h-10 bg-linear-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shrink-0">
        <span className="text-white font-semibold text-sm">KS</span>
      </div>
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Write a comment"
          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
          <button className="text-gray-400 hover:text-gray-600">
            <svg
              width="18"
              height="18"
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
            <LucidImage className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
