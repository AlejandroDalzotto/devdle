import { type Signal, component$, useContext } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { Link } from "@builder.io/qwik-city";
import { GameContext } from "~/context/game.context";

interface Props {
  iconName: string
  signal: Signal<boolean>
}

export const ModalInformation = component$(({ iconName, signal }: Props) => {

  const gameState = useContext(GameContext)
  const item = gameState.allIcons.find(i => i.name === iconName)

  return (
    <div onClick$={() => signal.value = false} class="animate-fade duration-75 h-screen w-screen flex items-center justify-center bg-black/30 absolute z-10 -top-20 left-0">
      <section class="gap-y-4 animate-jump p-3 rounded bg-[#e3d4d0] h-auto max-w-sm md:max-w-xl flex flex-col items-center relative z-20">
        <header class="flex items-center justify-between w-full relative">
          <div>
            <h3 class="text-neutral-800 text-2xl font-bold">{item?.title}</h3>
            <span class="text-neutral-600 capitalize">{item?.icon_type}</span>
          </div>
          <Image
            class="w-20 h-20"
            src={item?.url}
            alt={`${item?.title} icon`}
            width={30}
            height={30}
            layout="constrained"
          />
        </header>
        <article class="w-full">
          <h3 class="text-neutral-800 text-2xl font-bold mb-3">¿Qué es {item?.title}?</h3>
          <p class="text-neutral-700 mb-4">{item?.description}</p>
          <Link href={item?.docs} target="_blank" class="text-neutral-800 hover:underline font-bold">Ir a la documentación</Link>
        </article>
        <footer class="w-full">
          <h3 class="text-neutral-800 text-2xl font-bold mb-3">Usos comunes</h3>
          <div class="flex flex-wrap gap-2">
            {item?.usage.map((el, idx) => {
              return (
                <span key={idx} class="bg-neutral-800 p-2 text-[#fef9f1]">
                  {el}
                </span>
              )
            })}
          </div>
        </footer>
      </section>
    </div>
  )
});