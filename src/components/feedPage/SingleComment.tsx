import { timeAgo } from "@/utils/time";
import NestedReplyInput from "./NestedReplyInput";
import { useState } from "react";
import { useGetCommentReactQuery } from "@/redux/features/comment/commentApi";
import { useAppSelector } from "@/redux/hook/hook";
import {
  useLikePostMutation,
  useUnlikePostMutation,
} from "@/redux/features/like/likeApi";
import { ENUM_REACTION_TYPE } from "@/enums/reaction";
import { toast } from "sonner";

export default function SingleComment({ comment, postId }) {
  const [nestedReply, setNestedReply] = useState(false);
  const { data, isLoading } = useGetCommentReactQuery({
    id: comment?._id,
  });

  const { profile: user } = useAppSelector((state) => state.user);

  const [like] = useLikePostMutation();
  const [unlike] = useUnlikePostMutation();

  if (isLoading) return;

  const alreadyLiked = data?.data;
  const likeButtonOnclick = async () => {
    if (!alreadyLiked) {
      await like({
        targetId: comment?._id,
        targetType: "comment",
        reaction: ENUM_REACTION_TYPE.LIKE,
        likedBy: user?._id,
      });
      toast.success("You Liked bro");
      return;
    }

    await unlike({ targetId: comment?._id, targetType: "comment" });
    toast.success("You unliked bro");
  };

  return (
    <div className="space-y-4">
      {/* Single Comment */}
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-linear-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shrink-0">
          <span className="text-white font-semibold text-sm">
            {comment?.author?.firstName.slice(0, 1).toUpperCase()}
          </span>
        </div>
        <div className="flex-1">
          <div className="bg-gray-50 rounded-lg p-3 mb-2 z-10">
            <h4 className="text-sm font-semibold text-gray-900 mb-1">
              {`${comment?.author?.firstName} ${comment?.author?.lastName}`}
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              {comment?.text}
            </p>
          </div>
          <div className="flex items-center space-x-4 text-xs text-gray-600 px-3">
            <button
              className={`hover:text-blue-500 font-medium transition-colors duration-200 ${
                alreadyLiked && "text-blue-500"
              }`}
              onClick={likeButtonOnclick}
            >
              Like
            </button>
            <span className="text-gray-400">•</span>
            <button
              className="hover:text-blue-500 font-medium transition-colors duration-200"
              onClick={() => setNestedReply(true)}
            >
              Reply
            </button>
            <span className="text-gray-400">•</span>
            <button className="hover:text-blue-500 font-medium transition-colors duration-200">
              Share
            </button>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500">
              {comment?.createdAt
                ? timeAgo(comment?.createdAt)
                : "No Time Found"}
            </span>
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
              <span className="text-sm font-medium text-gray-700">
                {comment?.likesCount || 0}
              </span>
            </div>
          </div>

          {/* Nested Reply Input */}
          {nestedReply && <NestedReplyInput setNestedReply={setNestedReply} postId={postId} parentCommentId={comment._id} />}
        </div>
      </div>
    </div>
  );
}
