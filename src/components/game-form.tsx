import { $, component$, useContext, useSignal } from "@builder.io/qwik";
import { GameContext } from "~/context/game.context";
import { SendIcon } from "./sprites";

export const GameForm = component$(() => {

  const gameState = useContext(GameContext)
  const inputValue = useSignal('')

  const handleChange = $((ev: any) => {
    inputValue.value = ev.target?.value
  });

  const handleGameResult = $(() => {

    if (inputValue.value !== "") {

      if (inputValue.value.toLowerCase() === gameState.currentIcon?.name.toLowerCase()) {

        gameState.isIconHidden = false
        gameState.streak++
        gameState.state = "success"

        gameState.icons.unshift(inputValue.value)

        gameState.points += 1 * gameState.streak

      } else {

        gameState.state = "failed"
        gameState.hearts--
        gameState.streak = 1

        if (gameState.hearts === 0) {
          gameState.userCondition = "defeat"
        }

        setTimeout(() => {
          gameState.state = "pending"
        }, 2000);
      }

      inputValue.value = ''
    }
  });

  return (
    <form preventdefault: submit onSubmit$={handleGameResult} class="flex gap-x-2 my-10">
      <input
        disabled={!gameState.isIconHidden}
        onInput$={handleChange}
        value={inputValue.value}
        autoComplete="off"
        name="icon"
        class="md:w-[500px] bg-neutral-900 text-2xl outline-none py-3 px-4 rounded w-[90%] placeholder:text-neutral-600 placeholder:font-semibold text-neutral-50 disabled:opacity-75"
        type="text"
        placeholder="¿De qué es este icono?"
      />
      <button aria-label="Verify icon name written in input" disabled={!gameState.isIconHidden} type="submit" class="p-2 aspect-square w-14 grid place-content-center rounded text-xl font-bold border-2 border-crimson-500 transition-colors enabled:hover:fill-neutral-950 enabled:hover:bg-crimson-500 fill-neutral-50 disabled:opacity-75">
        <SendIcon />
      </button>
    </form>
  )
});