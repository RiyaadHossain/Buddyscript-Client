import { ENUM_REACTION_TYPE } from "@/enums/reaction";
import { reactionMap } from "./reactionMap";

export function getReactionInfo(type: string) {
  return reactionMap[type as ENUM_REACTION_TYPE];
}
