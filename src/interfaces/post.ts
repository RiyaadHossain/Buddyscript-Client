import { IComment } from "./comment";
import { IUser } from "./user";

export interface IPost {
  _id: string;
  author: IUser;                 
  text: string;
  imageUrl?: string;
  privacy: "public" | "friends" | "private";
  likesCount: number;
  commentsCount: number;

  reactions: Record<string, number>;

  firstComment?: IComment;     

  createdAt: string;
  updatedAt: string;
}
