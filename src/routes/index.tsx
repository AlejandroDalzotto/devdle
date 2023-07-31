import { $, component$, useContext, useSignal } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { GameContext } from "~/context/game.context";
import { GameImage } from "~/components/game-image";
import { ModalInformation } from "~/components/modal-information";
import { GameForm } from "~/components/game-form";
import { GameModalDefeated } from "~/components/game-modal-defeated";
import { GameModalVictory } from "~/components/game-modal-victory";
import { ArrowRightIcon, HeartIcon, InfoIcon, StatisticsIcon } from "~/components/sprites";
import { GameModalStats } from "~/components/game-modal-stats";

export default component$(() => {

  const gameState = useContext(GameContext)
  const showModalInformation = useSignal(false)
  const showModalStats = useSignal(false)

  const changeIconToNext = $(() => {
    gameState.isIconHidden = true
    setTimeout(() => {
      if (gameState.iconsDiscovered.length !== gameState.allIcons.length) {
        gameState.state = "pending"

        const undiscoveredIcons = gameState.allIcons.filter(i => !gameState.iconsDiscovered.includes(i.name))
        const randomIndex = Math.floor(Math.random() * undiscoveredIcons.length)
        gameState.currentIcon = undiscoveredIcons[randomIndex]

      }
    }, 700)
  })

  return (
    <section class="h-full w-full max-w-max mx-auto flex flex-col items-center justify-center pb-40">
      {showModalInformation.value && <ModalInformation signal={showModalInformation} iconName={gameState.currentIcon!.name} />}
      {showModalStats.value && <GameModalStats signal={showModalStats} />}
      {gameState.hearts === 0 && <GameModalDefeated />}
      {gameState.iconsDiscovered.length === gameState.allIcons.length && <GameModalVictory />}
      <div class="w-full p-4 relative flex flex-col items-center flex-grow">
        <div class="h-14 w-full flex justify-end">
          <button
            onClick$={() => showModalInformation.value = !showModalInformation.value}
            class={`animate-jump p-2 rounded fill-neutral-50 grid place-content-center ${!gameState.isIconHidden ? "block" : "hidden"}`}
            aria-label="See icon information"
          >
            <InfoIcon />
          </button>
        </div>
        {gameState.currentIcon && (

          <GameImage url={gameState.currentIcon.url} isHidden={gameState.isIconHidden} />

        )}
        {gameState.iconsDiscovered.length === gameState.allIcons.length && <p class="text-neutral-800 font-medium text-center text-xl w-52 h-52">¡Vaya! Parece que te has completado todo lo que habia aquí, eres muy bueno</p>}
      </div>
      <div class="flex gap-x-3 items-center my-10 w-full justify-center">
        {Array.from({ length: gameState.hearts }, (_, idx) => {
          return (
            <div key={idx} class={`animate-pulse delay-[${idx * 3}00ms]`}>
              <HeartIcon />
            </div>
          )
        })}
      </div>

      <GameForm />

      <div class="h-14 relative w-full max-w-lg px-4 flex items-center justify-center gap-x-3">
        <button
          onClick$={changeIconToNext}
          class="h-full py-2 px-3 w-fit flex gap-x-3 items-center rounded text-xl font-bold border-2 border-crimson-500 transition-colors hover:fill-neutral-950 hover:text-neutral-950 hover:bg-crimson-500 fill-neutral-50 text-neutral-50"
        >
          Siguiente
          <ArrowRightIcon />
        </button>
        <button
          onClick$={() => showModalStats.value = !showModalStats.value}
          class="p-2 aspect-square h-full grid place-content-center rounded text-xl font-bold border-2 border-crimson-500 transition-colors enabled:hover:fill-neutral-950 enabled:hover:bg-crimson-500 fill-neutral-50"
        >
          <StatisticsIcon />
        </button>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Inicio | Devdle",
  meta: [
    {
      name: "description",
      content: "Home page of devdle",
    },
  ],
};
