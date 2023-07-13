import { $, component$, useContext, useSignal } from "@builder.io/qwik";
import { GameContext } from "~/context/game.context";

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
        gameState.streak += 1
        gameState.state = "success"

        gameState.points += 1 * gameState.streak
        gameState.icons = [...gameState.icons].filter(i => i.state === "incomplete" && i.name !== gameState.currentIcon?.name)
      } else {
        gameState.state = "failed"
        gameState.hearts -= 1

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
    <form preventdefault: submit onSubmit$={handleGameResult} class="flex gap-x-2">
      <input
        disabled={!gameState.isIconHidden}
        onInput$={handleChange}
        value={inputValue.value}
        autoComplete="off"
        name="icon"
        class="md:w-[500px] bg-transparent text-2xl outline-none transition-all focus:ring-2 focus:ring-neutral-800 focus:shadow py-3 px-4 rounded w-[95%] mx-auto block placeholder:text-neutral-600 placeholder:font-semibold text-neutral-800 disabled:opacity-75"
        type="text"
        placeholder="¿De qué es este icono?"
      />
      <button disabled={!gameState.isIconHidden} type="submit" class="bg-transparent px-3 py-1 rounded text-xl font-bold border-2 border-neutral-800 text-neutral-800 disabled:opacity-75">Submit</button>
    </form>
  )
});