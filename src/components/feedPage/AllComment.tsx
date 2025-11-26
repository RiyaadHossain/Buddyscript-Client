import { useGetCommentsByPostIdQuery } from "@/redux/features/comment/commentApi";
import CommentTree from "./CommentTree";

export default function AllComments({ postId }) {
  const { data, isLoading } = useGetCommentsByPostIdQuery(postId);

  if (isLoading) return null;

  const comments = data?.data || [];
  if (comments.length === 0) {
    return (
      <div className="text-center text-gray-500 py-6">
        No comments yet. Be the first to comment!
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <CommentTree key={comment._id} comment={comment} postId={postId}/>
      ))}
    </div>
  );
}
