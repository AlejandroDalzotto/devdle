import { createContextId } from "@builder.io/qwik";
import { type Icon } from "~/data";

export interface GameState {
  points: number
  currentIcon: Icon | undefined
  isIconHidden: boolean
  state: "pending" | "failed" | "success",
  icons: string[]
  hearts: 0 | 1 | 2 | 3
  userCondition: "playing" | "victory" | "defeat"
  streak: number
}

export const GameContext = createContextId<GameState>("app.game-context")