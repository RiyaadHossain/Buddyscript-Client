import { api } from '../../api/apiSlice';
import { PostsApiResponse, Post } from './PostTypes';

interface CreatePostPayload {
  text: string;
  imageUrl?: string;
  privacy?: 'public' | 'private' | 'friends';
}

interface CreatePostResponse {
  success: boolean;
  message: string;
  data: Post;
}

const postsApi = api.injectEndpoints({
  endpoints: (build) => ({
    // GET all posts (paginated)
    getPosts: build.query<PostsApiResponse, { page?: number; limit?: number }>({
      query: ({ page = 1, limit = 10 }) => `/posts?page=${page}&limit=${limit}`,
      providesTags: ['Post'],
    }),

    // POST a new post
    createPost: build.mutation<CreatePostResponse, CreatePostPayload>({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      invalidatesTags: ['Post'], // automatically refetch list
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation } = postsApi;
