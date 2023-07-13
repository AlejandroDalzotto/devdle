import { $, component$, useContext, useSignal } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { GameContext } from "~/context/game.context";
import { GameImage } from "~/components/game-image";
import { ModalInformation } from "~/components/modal-information";
import { GameForm } from "~/components/game-form";
import { GameModalDefeated } from "~/components/game-modal-defeated";
import { GameModalVictory } from "~/components/game-modal-victory";

export default component$(() => {

  const gameState = useContext(GameContext)
  const showModal = useSignal(false)

  const changeIconToNext = $(() => {
    gameState.isIconHidden = true
    setTimeout(() => {
      if (gameState.icons.length > 0) {
        gameState.state = "pending"
        const randomIndex = Math.floor(Math.random() * gameState.icons.length)
        gameState.currentIcon = gameState.icons[randomIndex]
      }
    }, 700)
  })

  return (
    <section class="h-full w-full max-w-max mx-auto flex flex-col items-center justify-center gap-y-20 pb-20">
      {showModal.value && <ModalInformation signal={showModal} iconName={gameState.currentIcon!.name} />}
      {gameState.hearts === 0 && <GameModalDefeated />}
      {gameState.icons.length === 0 && <GameModalVictory />}
      <div class="w-full p-4 relative flex flex-col items-center flex-grow">
        <div class="h-14 w-full flex justify-end">
          <button onClick$={() => showModal.value = !showModal.value} class={`animate-jump p-2 rounded fill-neutral-800 grid place-content-center ${!gameState.isIconHidden ? "block" : "hidden"}`}>
            <svg width="50" height="50">
              <use xlink: href="./icons.svg#info" />
            </svg>
          </button>
        </div>
        {gameState.icons.length > 0 && gameState.currentIcon && (

          <GameImage url={gameState.currentIcon.url} isHidden={gameState.isIconHidden} />

        )}
        {gameState.icons.length === 0 && <p class="text-neutral-800 font-medium text-center text-xl w-52 h-52">¡Vaya! Parece que te has completado todo lo que habia aquí, eres muy bueno</p>}
      </div>

      <GameForm />

      <div class="h-10 w-full flex items-center justify-around max-w-lg px-4">
        <button
          onClick$={changeIconToNext}
          class="font-black text-xl text-neutral-800 py-2 px-4 rounded bg-neutral-300 focus:brightness-75 hover:text-[#fef9f1] hover:bg-neutral-800"
        >
          Siguiente
        </button>
        <div class="flex gap-x-3 items-center">
          {Array.from({ length: gameState.hearts }, (_, idx) => {
            return (
              <div key={idx}>
                <svg width="30" height="30" class="fill-red-500 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
                </svg>
              </div>
            )
          })}
        </div>
      </div>
      <div class="w-fit h-9">
        {gameState.icons.length > 0 && <p class="text-center [text-wrap:balance] font-semibold text-3xl text-neutral-800">Te faltan {gameState.icons.length} iconos por adivinar 😮</p>}
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Home | Devdle",
  meta: [
    {
      name: "description",
      content: "Home page of devdle",
    },
  ],
};
