import { IPost } from "@/interfaces/post";

export const posts: IPost[] = [
  {
    _id: "69241b4ef9de35abb20db6bf",
    author: {
      _id: "6923fa1af0534da72df046a1",
      firstName: "Riyad",
      lastName: "Hossain",
      email: "riyadhossain017037@gmail.com",
    },
    text: "This is text",
    imageUrl: "https://images.unsplash.com/photo-1475260151973-4b51c9c9af2d",
    privacy: "public",
    likesCount: 1,
    commentsCount: 3,
    reactions: {
      love: 0,
      angry: 1,
    },
    firstComment: {
      _id: "692422e36a7071d7270ac58b",
      author: {
        _id: "6923fa1af0534da72df046a1",
        firstName: "Riyad",
        lastName: "Hossain",
        email: "riyadhossain017037@gmail.com"
      },
      post: "69241b4ef9de35abb20db6bf",
      text: "oh, man",
      parentComment: null,
      repliesCount: 1,
      likesCount: 0,
      reactions: {},
      createdAt: "2025-11-24T09:18:27.291Z",
      updatedAt: "2025-11-24T09:22:09.013Z",
    },
    createdAt: "2025-11-24T08:46:06.814Z",
    updatedAt: "2025-11-24T09:31:10.131Z",
  },
];
