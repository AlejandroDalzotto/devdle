
export type TechnologieType = "lenguaje de programación" | "framework" | "librería" | "biblioteca" | "plataforma" | "herramienta" | "sistema operativo" | "entorno de ejecución" | "base de datos" | "empresa"

export type ColorType = `#${string}`

export interface Icon {
  name: string
  url: string
  color: ColorType
  description: string
  icon_type: TechnologieType
  docs: string
  usage: string[]
  title: string
}
