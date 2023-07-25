import { $, component$, useSignal } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { BarsIcon, GithubIcon, HomeIcon, HowToPlayIcon, IconsPageIcon } from './sprites';

export const Navbar = component$(() => {

  const isMenuVisible = useSignal<boolean>(false)

  const toggleMenu = $(() => {
    isMenuVisible.value = !isMenuVisible.value
  })

  return (
    <nav class="w-full h-20 py-3 px-4 flex justify-between md:justify-around items-center bg-neutral-900 border-b-2 border-b-crimson-500">
      <Link href='/' class="font-bold italic text-3xl text-crimson-500">Devdle</Link>

      <button onClick$={toggleMenu} class="md:hidden p-2 rounded fill-neutral-50">
        <BarsIcon />
      </button>

      <ul class={`${isMenuVisible.value ? "block" : "hidden"} md:flex md:gap-x-16 absolute md:relative right-6 md:right-0 z-10 bg-neutral-800 md:bg-transparent p-3 md:p-0 top-16 md:top-0 w-52 md:w-fit rounded animate-fade animate-duration-150`}>
        <li class="my-5 relative">
          <Link onClick$={toggleMenu} href='/' class="flex items-center fill-neutral-50 text-neutral-50 p-2 gap-x-3 text-lg font-bold transition-colors hover:text-crimson-500 hover:fill-crimson-500">
            <HomeIcon />
            Inicio
          </Link>
        </li>
        <li class="my-5 relative">
          <Link onClick$={toggleMenu} href='/how-to-play/' class="flex items-center fill-neutral-50 text-neutral-50 p-2 gap-x-3 text-lg font-bold transition-colors hover:text-crimson-500 hover:fill-crimson-500">
            <HowToPlayIcon />
            ¿Cómo jugar?
          </Link>
        </li>
        <li class="my-5 relative">
          <Link onClick$={toggleMenu} href='/icons/' class="flex items-center fill-neutral-50 text-neutral-50 p-2 gap-x-3 text-lg font-bold transition-colors hover:text-crimson-500 hover:fill-crimson-500">
            <IconsPageIcon />
            Iconos
          </Link>
        </li>
        <li class="my-5 relative">
          <Link onClick$={toggleMenu} target='_blank' href='https://github.com/AlejandroDalzotto/devdle' class="flex items-center fill-neutral-50 text-neutral-50 p-2 gap-x-3 text-lg font-bold transition-colors hover:text-crimson-500 hover:fill-crimson-500">
            <GithubIcon />
            Github
          </Link>
        </li>
      </ul>
    </nav>
  )
});