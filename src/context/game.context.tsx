import { createContextId } from "@builder.io/qwik";
import { type Icon } from "~/interfaces";

export interface GameState {
  points: number
  currentIcon: Icon | undefined
  isIconHidden: boolean
  state: "pending" | "failed" | "success",
  iconsDiscovered: string[]
  hearts: 0 | 1 | 2 | 3
  userCondition: "playing" | "victory" | "defeat"
  streak: number
  allIcons: Icon[]
}

export const GameContext = createContextId<GameState>("app.game-context")