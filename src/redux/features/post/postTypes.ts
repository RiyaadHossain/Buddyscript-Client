import { IPost } from "@/interfaces/post";

export interface Author {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface FirstComment {
  _id: string;
  author: string;
  post: string;
  text: string;
  parentComment: string | null;
  repliesCount: number;
  likesCount: number;
  reactions: Record<string, number>;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface PostsApiResponse {
  success: boolean;
  message: string;
  meta: {
    page: number;
    limit: number;
    total: number;
  };
  data: IPost[];
}
