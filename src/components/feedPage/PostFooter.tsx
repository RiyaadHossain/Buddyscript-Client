import { MessageCircle, Share2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";
import CommentInput from "./CommentInput";
import CommentSection from "./CommentSection";
import { IPost } from "@/interfaces/post";
import {
  useGetLikesQuery,
  useReactedQuery,
} from "@/redux/features/post/postApi";
import { getReactionInfo } from "@/utils/getReactionInfo";
import {
  useLikePostMutation,
  useUnlikePostMutation,
} from "@/redux/features/like/likeApi";
import { reactions } from "@/constants/reaction";
import { ENUM_REACTION_TYPE } from "@/enums/reaction";
import { useAppSelector } from "@/redux/hook/hook";
import AllComments from "./AllComment";

export interface Reaction {
  emoji: string;
  label: string;
  color: string;
  value: ENUM_REACTION_TYPE;
}

export default function PostFooter({ post }: { post: IPost }) {
  const [showReactions, setShowReactions] = useState(false);
  const [showAllComments, setShowAllComments] = useState(false);
  const { data: reactData, isLoading } = useReactedQuery({ id: post._id });
  const { data: likesData, isLoading: likesIsLoading } = useGetLikesQuery({
    id: post._id,
  });

  const [like] = useLikePostMutation();
  const [unlike] = useUnlikePostMutation();

  const { profile: user } = useAppSelector((state) => state.user);

  if (isLoading || likesIsLoading) return;
  const alreadyReacted = reactData.data;

  const likeButtonOnclick = async () => {
    try {
      await unlike({ targetId: alreadyReacted.targetId, targetType: "post" });
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to react");
    }

    toast.success("You Unliked bro");
    setShowReactions(false);
  };

  const onClickReact = async (react: Reaction) => {
    try {
      await like({
        targetId: post._id,
        targetType: "post", // make sure this matches backend
        reaction: react.value,
        likedBy: user?._id,
      }).unwrap(); // unwrap to get success/error

      toast.success(`You reacted ${react.emoji}`);
      setShowReactions(false);
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to react");
    }
  };

  const reactionAvatars = likesData?.data;

  const reactionInfo = getReactionInfo(alreadyReacted?.reaction);

  return (
    <>
      {/* Post Footer */}
      <div className="p-4">
        {/* Reactions */}
        <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-100 z-10">
          <div className="flex items-center">
            <div className="flex -space-x-4">
              {reactionAvatars.slice(0, 9).map((avatar, index) => (
                <div
                  key={index}
                  className="w-8 h-8 bg-linear-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center shrink-0 border-gray-100 border-2"
                >
                  <span className="text-white font-semibold text-sm">
                    {avatar?.likedBy?.firstName?.slice(0, 1).toUpperCase()}
                  </span>
                </div>
              ))}
              {/* If more than 9, show badge */}
              {reactionAvatars.length > 9 && (
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white z-50">
                  <span className="text-white font-semibold text-xs">
                    +{reactionAvatars.length - 9}
                  </span>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <span className="hover:text-gray-700 cursor-pointer ">
              {post?.likesCount} Likes
            </span>
            <span className="hover:text-gray-700 cursor-pointer">
              {post?.commentsCount} Comment
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-around border-b border-gray-100 pb-3 mb-4">
          <div className="relative">
            {alreadyReacted ? (
              <>
                <button
                  onMouseEnter={() => setShowReactions(true)}
                  onMouseLeave={() => setShowReactions(false)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                  onClick={likeButtonOnclick}
                >
                  <span className="text-lg">{reactionInfo?.emoji}</span>
                  <span className="text-sm font-medium">
                    {reactionInfo?.label}
                  </span>
                </button>
              </>
            ) : (
              <button
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onMouseEnter={() => setShowReactions(true)}
                onMouseLeave={() => setShowReactions(false)}
              >
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
            )}{" "}
            {showReactions && (
              <div
                className="absolute bottom-full left-1/2 transform -translate-x-[30%] bg-white rounded-full shadow-lg border border-gray-200 px-2 py-2 flex space-x-1 animate-fadeInUp z-50"
                onMouseEnter={() => setShowReactions(true)}
                onMouseLeave={() => setShowReactions(false)}
              >
                {reactions?.map((reaction, index) => (
                  <button
                    onClick={() => onClickReact(reaction)}
                    key={index}
                    className="w-10 h-10 flex items-center justify-center hover:scale-125 transition-transform duration-200 rounded-full hover:bg-gray-100"
                    title={reaction.label}
                  >
                    <span className="text-2xl">{reaction.emoji}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200"
            onClick={() => setShowAllComments(true)}
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Comment</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors duration-200">
            <Share2 className="w-5 h-5" />
            <span className="text-sm font-medium">Share</span>
          </button>
        </div>

        {/* Comment Input */}
        <CommentInput postId={post?._id} />

        {/* Comments Section */}
        {(post?.firstComment && !showAllComments) && (
          <CommentSection
             postId={post?._id}
            comment={post?.firstComment}
            setShowAllComments={setShowAllComments}
            showAllComments={showAllComments}
          />
        )}

        {showAllComments && <AllComments postId={post?._id} />}
      </div>
    </>
  );
}
