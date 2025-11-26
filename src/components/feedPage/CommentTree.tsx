import SingleComment from "./SingleComment";

export default function CommentTree({ comment, postId }) {
  return (
    <div className="mb-4">
      {/* Main comment */}
      <SingleComment comment={comment} postId={postId}/>

      {/* Replies */}
      {comment.replies?.length > 0 && (
        <div className="ml-6 mt-2 border-l pl-4 space-y-4">
          {comment.replies.map((reply) => (
            <CommentTree key={reply._id} comment={reply} postId={postId} />
          ))}
        </div>
      )}
    </div>
  );
}
