import { IUser } from "./user";

export interface IComment {
  _id: string;
  author: IUser;        // can be populated or just an ID
  post: string;                  // post ID
  text: string;
  parentComment: string | null;  // for threaded replies
  repliesCount: number;
  likesCount: number;
  reactions: Record<string, number>;
  createdAt: string;
  updatedAt: string;
}
