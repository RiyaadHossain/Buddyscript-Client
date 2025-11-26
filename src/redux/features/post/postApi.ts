import { IPost } from "@/interfaces/post";
import { api } from "../../api/apiSlice";
import { PostsApiResponse } from "./postTypes";

interface CreatePostResponse {
  success: boolean;
  message: string;
  data: IPost;
}

const postsApi = api.injectEndpoints({
  endpoints: (build) => ({
    // GET all posts (paginated)
    getPosts: build.query<PostsApiResponse, { page?: number; limit?: number }>({
      query: ({ page = 1, limit = 10 }) =>
        `/post/feed?page=${page}&limit=${limit}`,
      providesTags: ["Post"],
    }),

    // POST a new post
    createPost: build.mutation<CreatePostResponse, any>({
      query: (post) => ({
        url: "/post",
        method: "POST",
        body: post, // token will be auto-added by prepareHeaders
      }),
      invalidatesTags: ["Post"],
    }),

    // GET reacted
    reacted: build.query({
      query: ({ id }) => `/post/reacted/${id}/post`,
      providesTags: ["Post"],
    }),

    getLikes: build.query({
      query: ({ id }) => `/post/${id}/likes`,
      providesTags: ["Post"],
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation, useReactedQuery, useGetLikesQuery } =
  postsApi;
