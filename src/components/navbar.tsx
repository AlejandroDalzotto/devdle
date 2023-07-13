import { $, component$, useSignal } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { BarsIcon } from './icons';

export const Navbar = component$(() => {

  const isMenuVisible = useSignal<boolean>(false)

  const toggleMenu = $(() => {
    isMenuVisible.value = !isMenuVisible.value
  })

  return (
    <nav class="w-full h-20 py-3 px-4 flex justify-between md:justify-around items-center bg-neutral-100 border-b-4 border-b-neutral-800">
      <h1 class="font-bold italic text-3xl text-neutral-800">Devdle</h1>

      <button onClick$={toggleMenu} class="md:hidden p-2 rounded fill-neutral-800">
        <BarsIcon />
      </button>

      <ul class={`${isMenuVisible.value ? "block" : "hidden"} md:flex md:gap-x-20 absolute md:relative right-6 md:right-0 z-10 bg-neutral-900 md:bg-transparent p-3 md:p-0 top-16 md:top-0 w-52 md:w-fit rounded animate-fade animate-duration-150`}>
        <li class="my-5 relative">
          <Link href='/' class="text-neutral-100 md:text-neutral-800 py-2 px-4 text-lg font-bold block transition-colors hover:text-rose-500">Inicio</Link>
        </li>
        <li class="my-5 relative">
          <Link href='/icons/' class="text-neutral-100 md:text-neutral-800 py-2 px-4 text-lg font-bold block transition-colors hover:text-rose-500">Iconos</Link>
        </li>
        <li class="my-5 relative">
          <Link href='#' class="text-neutral-100 md:text-neutral-800 py-2 px-4 text-lg font-bold block transition-colors hover:text-rose-500">Github</Link>
        </li>
      </ul>
    </nav>
  )
});