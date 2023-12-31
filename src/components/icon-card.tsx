import { $, type QwikKeyboardEvent, component$, useSignal } from "@builder.io/qwik";
import { type Icon } from "~/interfaces";
import { ModalInformation } from "./modal-information";

interface Props {
  icon: Icon
  tabIndex: number
}

export const IconCard = component$(({ icon, tabIndex }: Props) => {

  const showModal = useSignal(false)

  const handleKeydown = $((ev: QwikKeyboardEvent<HTMLDivElement>) => {

    if (ev.key === "Enter") {
      showModal.value = true
    }

    if (ev.key === "Escape") {
      showModal.value = false
    }

  })

  return (
    <>
      {showModal.value && <ModalInformation signal={showModal} iconName={icon.name} />}
      <div tabIndex={tabIndex} onClick$={() => showModal.value = !showModal.value} onKeyDown$={(ev) => handleKeydown(ev)} class="flex flex-col cursor-pointer">
        <div style={{ borderColor: icon.color }} class={`bg-neutral-800 p-4 rounded shadow flex justify-center items-center border-4`}>
          <img class="aspect-square md:w-20 md:h-20" src={icon.url} width={40} height={40} alt="Icon image" />
        </div>
        <span class="text-neutral-50 text-lg italic text-center">{icon.name}</span>
      </div>
    </>
  )
});