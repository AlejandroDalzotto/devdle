import { Slot, component$, useContextProvider, useStore } from "@builder.io/qwik";
import { GameContext, type GameState } from "./game.context";
import { icons } from "~/data";

export const GameProvider = component$(() => {

  const incompleteIcons = [...icons].filter(i => i.state === "incomplete")
  const randomIndex = Math.floor(Math.random() * incompleteIcons.length)
  const initialIcon = incompleteIcons[randomIndex]

  const useInitialData = useStore<GameState>({
    isIconHidden: true,
    points: 0,
    currentIcon: initialIcon,
    state: "pending",
    icons: incompleteIcons,
    hearts: 3,
    userCondition: "playing",
    streak: 1
  })

  useContextProvider(GameContext, useInitialData)

  return (<Slot />)
});