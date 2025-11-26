import { useState } from "react";
import { useCreateCommentMutation } from "@/redux/features/comment/commentApi";
import { useAppSelector } from "@/redux/hook/hook";
import { Send } from "lucide-react";
import { toast } from "sonner";

export default function CommentInput({ postId }) {
  const { profile: user } = useAppSelector((state) => state.user);
  const [sendComment] = useCreateCommentMutation();

  const [text, setText] = useState("");

  const onHandleComment = async () => {
    if (!text.trim()) return toast.error("Comment cannot be empty.");

    await sendComment({ post: postId, text });

    toast.success("Comment sent successfully.");
    setText(""); // clear input box
  };

  return (
    <div className="flex items-center space-x-3 mb-4">
      <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shrink-0">
        <span className="text-white font-semibold text-sm">
          {user?.firstName?.slice(0, 1)?.toUpperCase()}
        </span>
      </div>

      <div className="flex-1 relative">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment"
          className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />

        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
          <button
            className={`${
              text.trim()
                ? "text-blue-600 hover:text-blue-700"
                : "text-gray-300 cursor-not-allowed"
            }`}
            disabled={!text.trim()}
            onClick={onHandleComment}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
