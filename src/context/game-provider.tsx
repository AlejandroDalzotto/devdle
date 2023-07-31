import { Slot, component$, useContextProvider, useStore, useTask$ } from "@builder.io/qwik";
import { GameContext, type GameState } from "./game.context";
import { server$ } from "@builder.io/qwik-city";
import { type Icon } from "~/interfaces";

const fetchIcons = server$(async () => {

  const data = await fetch('https://devdle-server.onrender.com/api/icons').then(res => res.json()) as Icon[]

  return data
})

export const GameProvider = component$(() => {

  const useInitialData = useStore<GameState>({
    isIconHidden: true,
    points: 0,
    currentIcon: undefined,
    state: "pending",
    iconsDiscovered: [],
    hearts: 3,
    userCondition: "playing",
    streak: 1,
    allIcons: []
  })

  useTask$(async () => {

    const icons = await fetchIcons()

    const randomIndex = Math.floor(Math.random() * icons.length)
    const initialIcon = icons[randomIndex]

    useInitialData.allIcons = icons
    useInitialData.currentIcon = initialIcon
  })

  useContextProvider(GameContext, useInitialData)

  return (<Slot />)
});