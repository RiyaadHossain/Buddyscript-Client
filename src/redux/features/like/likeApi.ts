// redux/features/like/likeApi.ts
import { ENUM_REACTION_TYPE } from '@/enums/reaction';
import { api } from '../../api/apiSlice';

export interface LikeData {
  
  targetId: string;
  targetType: 'post';
  reaction: string; // e.g., "angry", "love"
  
}

export interface LikeApiResponse {
  success: boolean;
  message: string;
  meta: null | any;
  data: LikeData;
}

interface LikePostPayload {
  targetId: string | undefined;
  targetType: 'post' | 'comment';
  reaction: ENUM_REACTION_TYPE; // e.g., "angry", "love"
  likedBy: string | undefined
}

interface UnLikePostPayload {
  targetId: string;
  targetType: 'post'| 'comment';
}

const likeApi = api.injectEndpoints({
  endpoints: (build) => ({
    likePost: build.mutation<LikeApiResponse, LikePostPayload>({
      query: (body) => ({
        url: '/like',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Post'], // optional: refresh posts if needed
    }),

    unlikePost: build.mutation<LikeApiResponse, UnLikePostPayload>({
      query: (body) => ({
        url: `/like/unlike`,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const { useLikePostMutation, useUnlikePostMutation } = likeApi;
