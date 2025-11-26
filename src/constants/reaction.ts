import { ENUM_REACTION_TYPE } from "@/enums/reaction";

export const reactions: {
  emoji: string;
  label: string;
  value: ENUM_REACTION_TYPE;
  color: string;
}[] = [
  {
    emoji: "👍",
    label: "Like",
    value: ENUM_REACTION_TYPE.LIKE,
    color: "text-blue-500",
  },
  {
    emoji: "❤️",
    label: "Love",
    value: ENUM_REACTION_TYPE.LOVE,
    color: "text-red-500",
  },
  {
    emoji: "😆",
    label: "Haha",
    value: ENUM_REACTION_TYPE.HAHA,
    color: "text-yellow-500",
  },
  {
    emoji: "😮",
    label: "Wow",
    value: ENUM_REACTION_TYPE.WOW,
    color: "text-yellow-500",
  },
  {
    emoji: "😢",
    label: "Sad",
    value: ENUM_REACTION_TYPE.SAD,
    color: "text-yellow-500",
  },
  {
    emoji: "😡",
    label: "Angry",
    value: ENUM_REACTION_TYPE.ANGRY,

    color: "text-orange-500",
  },
];
