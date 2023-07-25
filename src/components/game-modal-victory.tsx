import { $, component$, useContext } from "@builder.io/qwik";
import { GameContext } from "~/context/game.context";
import { icons } from "~/data";

export const GameModalVictory = component$(() => {

  const gameState = useContext(GameContext)

  const tryAgain = $(() => {
    gameState.state = "pending"
    gameState.userCondition = "playing"
    gameState.hearts = 3
    gameState.icons = []

    const randomIndex = Math.floor(Math.random() * icons.length)
    const initialIcon = icons[randomIndex]
    gameState.currentIcon = initialIcon
  })

  const iconsDiscovered = gameState.icons.length

  return (
    <div class="animate-fade duration-75 h-screen w-screen flex items-center justify-center bg-black/30 absolute z-10">
      <section class="gap-y-4 animate-jump p-3 rounded bg-[#e3d4d0] h-auto max-w-sm md:max-w-md flex flex-col items-center relative z-20">
        <header class="flex items-center justify-between w-full relative">
          <div>
            <h3 class="text-neutral-800 text-2xl font-bold text-center mb-3">Victoria</h3>
            <p class="text-neutral-600 text-center [text-wrap:balance] mb-3">¡Vaya! eres muy bueno para esto, te has pasado el juego. ¡Muchas gracias por jugar! ^^</p>
          </div>
        </header>
        <article class="w-full">
          <h3 class="text-neutral-800 text-2xl font-bold mb-3">Tus estadisticas</h3>
          <p class="text-neutral-700 mb-4">Puntos: {gameState.points}</p>
          <p class="text-neutral-700 mb-4">Cantidad de iconos descubiertos: {iconsDiscovered}</p>
        </article>
        <footer class="w-full flex items-center justify-center">
          <button onClick$={tryAgain} class="text-neutral-100 bg-neutral-800 rounded text-2xl font-bold mb-3 py-2 px-4">¡Quiero hacerlo otra vez!</button>
        </footer>
      </section>
    </div>
  )
});