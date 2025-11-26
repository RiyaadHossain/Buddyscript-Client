import Image from "next/image";
import PostFooter from "./PostFooter";
import { MoreVertical } from "lucide-react";
import { IPost } from "@/interfaces/post";
import { timeAgo } from "@/utils/time";

export default function PostCard({ post }: { post: IPost }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden p-4">
      {/* Post Header */}
      <div className="">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center shrink-0">
              <span className="text-white font-semibold text-sm">
                {post?.author.firstName.slice(0, 1).toUpperCase()}
              </span>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900">
                {`${post.author.firstName} ${post.author.lastName}`}
              </h3>
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span>{timeAgo(post.createdAt)}</span>
                <span>•</span>
                <span>{post.privacy}</span>
              </div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 p-1">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        {/* Post Content */}
        <p className="text-gray-800 mb-3">{post.text}</p>
      </div>

      {/* Post Image */}
      {post?.imageUrl && (
        <div className="w-full h-[378px] rounded-sm flex items-center relative justify-center">
          <Image
            src={post.imageUrl as string}
            alt=""
            fill
            className="rounded-sm object-cover"
          />
        </div>
      )}

      {/* Post Footer */}
      <PostFooter post={post} />
    </div>
  );
}
