import { api } from "../../api/apiSlice";

export interface CreateCommentPayload {
  post: string;
  text: string;
  parentComment?: string;
}

export interface CommentData {
  _id: string;
  author: string;
  post: string;
  text: string;
  parentComment?: string;
  repliesCount: number;
  likesCount: number;
  reactions: Record<string, any>;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface CreateCommentResponse {
  success: boolean;
  message: string;
  meta: any;
  data: CommentData;
}

export const commentApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCommentsByPostId: build.query({
      query: (postId) => `post/${postId}/comments`,
      providesTags: ["Post"],
    }),

    createComment: build.mutation<CreateCommentResponse, CreateCommentPayload>({
      query: (comment) => ({
        url: "/comment", // adjust endpoint if needed
        method: "POST",
        body: comment,
      }),
      invalidatesTags: ["Post"], // refetch posts/comments
    }),

    deleteComment: build.mutation<
      { success: boolean; message: string },
      string
    >({
      query: (commentId) => ({
        url: `/comment/${commentId}`, // endpoint for deleting comment
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),

    getCommentReact: build.query({
      query: ({ id }) => `/comment/react/${id}/comment`,
      providesTags: ["Post"],
    }),
  }),
});

export const {
  useGetCommentsByPostIdQuery,
  useCreateCommentMutation,
  useDeleteCommentMutation,
  useGetCommentReactQuery,
} = commentApi;
