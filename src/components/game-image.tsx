import { component$ } from '@builder.io/qwik';
import { Image } from '@unpic/qwik';

interface Props {
  id?: number
  url: string
  isHidden: boolean
}

export const GameImage = component$(({ isHidden, url }: Props) => {

  return (
    <Image
      class={`${isHidden ? "brightness-0 blur-md" : "brightness-100 blur-0"} w-52 h-52 transition-all animate-jump-in flex-grow select-none [-webkit-user-drag:none]`}
      src={url}
      alt="icon name here"
      width={200}
      height={200}
      layout="constrained"
    />
  )
});