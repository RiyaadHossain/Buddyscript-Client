import { ENUM_REACTION_TYPE } from "@/enums/reaction";


export const reactionMap: Record<
  ENUM_REACTION_TYPE,
  { emoji: string; label: string }
> = {
  [ENUM_REACTION_TYPE.LIKE]: { emoji: "👍", label: "Like" },
  [ENUM_REACTION_TYPE.LOVE]: { emoji: "❤️", label: "Love" },
  [ENUM_REACTION_TYPE.HAHA]: { emoji: "😂", label: "Haha" },
  [ENUM_REACTION_TYPE.WOW]:  { emoji: "😮", label: "Wow" },
  [ENUM_REACTION_TYPE.SAD]:  { emoji: "😢", label: "Sad" },
  [ENUM_REACTION_TYPE.ANGRY]: { emoji: "😡", label: "Angry" },
};
