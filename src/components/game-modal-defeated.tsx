import { $, component$, useContext } from "@builder.io/qwik";
import { GameContext } from "~/context/game.context";
import { icons } from "~/data";

export const GameModalDefeated = component$(() => {

  const gameState = useContext(GameContext)

  const tryAgain = $(() => {
    gameState.state = "pending"
    gameState.userCondition = "playing"
    gameState.hearts = 3
    gameState.icons = icons

    const incompleteIcons = [...icons].filter(i => i.state === "incomplete")
    const randomIndex = Math.floor(Math.random() * incompleteIcons.length)
    const initialIcon = incompleteIcons[randomIndex]
    gameState.currentIcon = initialIcon
  })

  const iconsDiscovered = icons.length - gameState.icons.length

  return (
    <div class="animate-fade duration-75 h-screen w-screen flex items-center justify-center bg-black/30 absolute z-10">
      <section class="gap-y-4 animate-jump p-3 rounded bg-[#e3d4d0] h-auto max-w-sm md:max-w-md flex flex-col items-center relative z-20">
        <header class="flex items-center justify-between w-full relative">
          <div>
            <h3 class="text-neutral-800 text-2xl font-bold text-center mb-3">Derrota</h3>
            <p class="text-neutral-600 text-center [text-wrap:balance] mb-3">¡Vaya! parecen que se te han acabado las vidas, pero no te preocupes, puedes volver a intentarlo.</p>
          </div>
        </header>
        <article class="w-full">
          <h3 class="text-neutral-800 text-2xl font-bold mb-3">Tus estadisticas</h3>
          <p class="text-neutral-700 mb-4">Puntos: {gameState.points}</p>
          <p class="text-neutral-700 mb-4">Cantidad de iconos descubiertos: {iconsDiscovered}</p>
        </article>
        <footer class="w-full flex items-center justify-center">
          <button onClick$={tryAgain} class="text-neutral-100 bg-neutral-800 rounded text-2xl font-bold mb-3 py-2 px-4">Volver a intertar</button>
        </footer>
      </section>
    </div>
  )
});