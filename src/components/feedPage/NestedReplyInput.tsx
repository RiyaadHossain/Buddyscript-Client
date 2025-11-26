import { useAppSelector } from "@/redux/hook/hook";
import { Send } from "lucide-react";
import { toast } from "sonner";

export default function NestedReplyInput({ setNestedReply }) {
  const { profile: user } = useAppSelector((state) => state.user);
  const onHandleSend = () => {
    toast.success("Reply Send Successfully");
    setNestedReply(false);
  };

  return (
    <>
      {/* Nested Reply Input */}
      <div className="flex items-center space-x-3 mt-3">
        <div className="w-8 h-8 bg-linear-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center shrink-0">
          <span className="text-white font-semibold text-xs">
            {user?.firstName.slice(0, 1).toUpperCase()}
          </span>
        </div>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Write a comment"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
            <button
              className="text-gray-400 hover:text-gray-600"
              onClick={onHandleSend}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
