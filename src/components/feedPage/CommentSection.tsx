import SingleComment from "./SingleComment";

export default function CommentSection({
  comment,
  setShowAllComments,
  showAllComments,
  postId,
}) {
  return (
    <>
      {/* View Previous Comments */}
      {!showAllComments ? (
        <button
          className="text-sm text-gray-600 hover:text-gray-800 font-medium mb-4 transition-colors duration-200"
          onClick={() => setShowAllComments(true)}
        >
          View previous comments
        </button>
      ) : (
        <button
          className="text-sm text-gray-600 hover:text-gray-800 font-medium mb-4 transition-colors duration-200"
          onClick={() => setShowAllComments(false)}
        >
          Hide previous comments
        </button>
      )}

      {/* Comment Section */}
      <SingleComment comment={comment} postId={postId} />
    </>
  );
}
