import { type Signal, component$, useContext } from "@builder.io/qwik";
import { GameContext } from "~/context/game.context";
import { HeartIcon } from "./sprites";

interface Props {
  signal: Signal<boolean>
}

export const GameModalStats = component$(({ signal }: Props) => {

  const gameState = useContext(GameContext)

  const iconsDiscovered = gameState.iconsDiscovered.length

  return (
    <div onClick$={() => signal.value = false} class="animate-fade duration-75 h-screen w-screen flex items-center justify-center bg-black/30 absolute z-10">
      <section class="gap-y-4 animate-jump p-3 rounded bg-[#e3d4d0] h-auto max-w-sm w-full md:max-w-md flex flex-col items-center relative z-20">
        <header class="flex items-center justify-between w-full relative">
          <div>
            <h3 class="text-neutral-800 text-2xl font-bold text-center mb-3">Estadisticas</h3>
          </div>
        </header>
        <article class="w-full">
          <p class="text-neutral-700 text-xl mb-4"><span class="text-crimson-500 font-bold">Puntos: </span>{gameState.points}</p>
          <p class="text-neutral-700 text-xl mb-4"><span class="text-crimson-500 font-bold">Iconos descubiertos: </span>{iconsDiscovered}</p>
          <div class="flex gap-x-3 items-center">
            <span class="text-xl text-crimson-500 font-bold">Vidas actuales</span>
            {Array.from({ length: gameState.hearts }, (_, idx) => {
              return (
                <div key={idx} class={`animate-pulse delay-[${idx * 3}00ms]`}>
                  <HeartIcon />
                </div>
              )
            })}
          </div>
        </article>
        <footer class="w-full flex items-center justify-center mt-10">
          <button onClick$={() => signal.value = false} class="text-neutral-100 bg-neutral-800 rounded text-2xl font-bold mb-3 py-2 px-4">Cerrar</button>
        </footer>
      </section>
    </div>
  )
});