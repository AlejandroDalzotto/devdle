import { $, component$, useContext, useSignal } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { GameContext } from "~/context/game.context";
import { GameImage } from "~/components/game-image";
import { ModalInformation } from "~/components/modal-information";
import { GameForm } from "~/components/game-form";
import { GameModalDefeated } from "~/components/game-modal-defeated";
import { GameModalVictory } from "~/components/game-modal-victory";
import { HeartIcon, InfoIcon } from "~/components/icons";

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
          <button
            onClick$={() => showModal.value = !showModal.value}
            class={`animate-jump p-2 rounded fill-neutral-800 grid place-content-center ${!gameState.isIconHidden ? "block" : "hidden"}`}
            aria-label="See icon information"
          >
            <InfoIcon />
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
                <HeartIcon />
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
