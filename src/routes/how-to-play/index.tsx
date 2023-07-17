import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <section class="flex flex-col gap-y-10 mx-auto container max-w-2xl px-4">
      <header>
        <h2 class="text-2xl font-bold text-crimson-500 text-center my-4">¿Cómo jugar <span class="text-neutral-50 italic">Devdle?</span></h2>
      </header>
      <article class="flex flex-col text-lg">
        <p class="text-neutral-50">El objetivo del juego es simple, adivinar el nombre del icono oculto. Estos iconos pueden abarcar entre: <span class="text-crimson-500 font-bold">
            Lenguajes de programación, Frameworks, Librerías/Bibliotecas de conocimiento general, Plataformas, Herramientas, Sistemas operativos, Entornos de ejecución, Bases de datos
          </span>
        </p>

      </article>
      <article class="flex flex-col text-lg">
        <h3 class="text-xl font-bold text-crimson-500 text-center mb-4">Recomendaciones</h3>
        <p class="text-neutral-50 mt-4">A lo largo del juego existen algunos iconos que contienen simbolos como por ejemplo puntos o signos de suma. Un ejemplo es <span class="text-crimson-500 font-bold">C++</span>.</p>
        <p class="text-neutral-50 mt-4">Para poder adividar correctamente estos iconos tendras que escribir el nombre y el simbolo en inglés.</p>
        <p class="fill-crimson-500 text-neutral-50 mt-4">Ejemplo: C++ cplusplus</p>
        <p class="text-neutral-50 mt-4">A su vez, evita escribir los nombres con espacios.</p>
      </article>
      <footer>

      </footer>
    </section>
  )
});

export const head: DocumentHead = {
  title: "¿Cómo jugar Devdle? | Devdle",
  meta: [
    {
      name: "description",
      content: "Aquí veras cómo aprender a jugar este gran juego, aparte de algunos consejos."
    }
  ]
}
