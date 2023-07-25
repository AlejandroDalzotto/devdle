import { component$, useContext } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import { IconCard } from '~/components/icon-card';
import { GameContext } from '~/context/game.context';
import { icons } from '~/data';

export default component$(() => {

  const gameState = useContext(GameContext)
  const finishedIcons = icons.filter(i => gameState.icons.includes(i.name))

  return (
    <section class="p-4 flex flex-col gap-y-10">
      <header>
        <h2 class="text-3xl font-bold text-crimson-500 text-center mb-4">Tus iconos</h2>
        <p class="text-neutral-50 font-medium text-lg text-center [text-wrap:balance]">En esta sala apareceran todos los iconos que hayas encontrado, puedes acceder a su información desde aquí de una forma más comoda 😄</p>
      </header>
      <article class="flex flex-wrap gap-4 container mx-auto">
        {finishedIcons.map((icon, idx) => {
          return (
            <IconCard tabIndex={idx+1} icon={icon} key={idx} />
          )
        })}
      </article>
      <footer>

      </footer>
    </section>
  )
});

export const head: DocumentHead = {
  title: "Iconos | Devdle",
  meta: [
    {
      name: "description",
      content: "Sala de iconos de Devdle"
    }
  ]
}