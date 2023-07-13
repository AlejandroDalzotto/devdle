
export type TechnologieType = "lenguaje de programación" | "framework" | "librería" | "biblioteca" | "plataforma" | "herramienta" | "sistema operativo" | "entorno de ejecución" | "base de datos"

export interface Icon {
  name: string
  url: string
  color: `#${string}`
  state: "finished" | "incomplete",
}

export interface IconInformation extends Pick<Icon, "name" | "color" | "url"> {
  description: string
  type: TechnologieType
  docs: string
  usage: string[]
  title: string
}

export const technologiesInformation: IconInformation[] = [
  {
    title: ".NET",
    name: "dotnet",
    url: "https://cdn.simpleicons.org/dotnet",
    color: "#512BD4",
    description: ".NET es una plataforma para desarrolladores de código abierto, multiplataforma y gratuita para crear muchos tipos de aplicaciones diferentes.\nCon .NET, puede usar varios lenguajes, editores y bibliotecas para crear aplicaciones web, móviles, de escritorio, juegos, IoT, etc.",
    type: "framework",
    docs: "https://docs.microsoft.com/dotnet/",
    usage: ["Desarrollo de aplicaciones web", "Desarrollo de aplicaciones de escritorio"],
  },
  {
    title: "JavaScript",
    name: "javascript",
    url: "https://cdn.simpleicons.org/javascript",
    color: "#F7DF1E",
    description: "JavaScript es un lenguaje de programación basado en prototipos, multiparadigma, de un solo hilo, dinámico, con soporte para programación orientada a objetos, imperativa y declarativa (por ejemplo programación funcional).",
    type: "lenguaje de programación",
    docs: "https://developer.mozilla.org/docs/Web/JavaScript",
    usage: ["Desarrollo de aplicaciones web", "Desarrollo de juegos"],
  },
  {
    title: "React",
    name: "react",
    url: "https://cdn.simpleicons.org/react",
    color: "#61DAFB",
    description: "React es una biblioteca de JavaScript de código abierto para construir interfaces de usuario. Está basada en la componetización de la UI.",
    type: "librería",
    docs: "https://react.dev/",
    usage: ["Desarrollo de aplicaciones web interactivas"],
  },
  {
    title: "Angular",
    name: "angular",
    url: "https://cdn.simpleicons.org/angular",
    color: "#DD0031",
    description: "Angular es una plataforma y un framework, mantenido por Google, para crear aplicaciones de una sola página en el lado del cliente usando HTML y TypeScript.",
    type: "framework",
    docs: "https://angular.io/",
    usage: ["Desarrollo de aplicaciones web escalables"],
  },
  {
    title: "Vue.js",
    name: "vuejs",
    url: "https://cdn.simpleicons.org/vuedotjs",
    color: "#4FC08D",
    description: "Vue es un framework progresivo para construir interfaces de usuario. A diferencia de otros frameworks monolíticos, Vue está diseñado desde cero para ser utilizado incrementalmente.",
    type: "framework",
    docs: "https://vuejs.org/",
    usage: ["Desarrollo de aplicaciones web interactivas"],
  },
  {
    title: "Vercel",
    name: "vercel",
    url: "https://cdn.simpleicons.org/vercel",
    color: "#000000",
    description: "Vercel es una plataforma para desarrolladores que proporciona las herramientas, los flujos de trabajo y la infraestructura necesaria para crear e implementar sus aplicaciones web más rápido, sin necesidad de una configuración adicional.",
    type: "plataforma",
    docs: "https://vercel.com/",
    usage: ["Despliegue de aplicaciones web"],
  },
  {
    title: "Spring",
    name: "spring",
    url: "https://cdn.simpleicons.org/spring",
    color: "#6DB33F",
    description: "Spring es un framework para el desarrollo de aplicaciones y contenedor de inversión de control, de código abierto para la plataforma Java.",
    type: "framework",
    docs: "https://spring.io/",
    usage: ["Desarrollo de aplicaciones empresariales", "Desarrollo de microservicios"],
  },
  {
    title: "Testing library",
    name: "testinglibrary",
    url: "https://cdn.simpleicons.org/testinglibrary",
    color: "#E33332",
    description: "Testing library son un conjunto de herramientas y utilidades de test simples para pruebas de componentes de UI",
    type: "librería",
    docs: "https://testing-library.com/",
    usage: ["Pruebas de UI"],
  },
  {
    title: ".ENV",
    name: "dotenv",
    url: "https://cdn.simpleicons.org/dotenv",
    color: "#662D91",
    description: ".ENV es una librería para cargar variables de entorno desde archivos",
    type: "librería",
    docs: "https://github.com/motdotla/dotenv#-documentation",
    usage: ["Gestión de variables de entorno"],
  },
  {
    title: "Next.js",
    name: "nextjs",
    url: "https://cdn.simpleicons.org/nextdotjs",
    color: "#000000",
    description: "Next.js es un Framework para crear aplicaciones web.\nCon Next.js, puedes crear interfaces de usuario utilizando componentes de React. Luego, Next.js proporciona estructura, funciones y optimizaciones adicionales para la aplicación.",
    type: "framework",
    docs: "https://nextjs.org/",
    usage: ["Desarrollo de aplicaciones web escalables"],
  },
  {
    title: "NestJS",
    name: "nestjs",
    url: "https://cdn.simpleicons.org/nestjs",
    color: "#E0234E",
    description: "Nest (NestJS) es un marco para crear aplicaciones del lado del servidor Node.js eficientes y escalables. Utiliza JavaScript progresivo, está construido con TypeScript y es totalmente compatible y combina elementos de Programación orientada a objetos, Programación funcional y Programación reactiva funcional.",
    type: "framework",
    docs: "https://nestjs.com/",
    usage: ["Desarrollo de aplicaciones backend"],
  },
  {
    title: "Netlify",
    name: "netlify",
    url: "https://cdn.simpleicons.org/netlify",
    color: "#00C7B7",
    description: "Netlify es una empresa de computación en la nube que ofrece una plataforma de desarrollo para aplicaciones web y sitios web dinámicos. Proporciona servicios para construir, implementar y proporcionar servicios serverless de back-end.",
    type: "plataforma",
    docs: "https://docs.netlify.com/",
    usage: ["Despliegue de sitios web estáticos"],
  },
  {
    title: "Kotlin",
    name: "kotlin",
    url: "https://cdn.simpleicons.org/kotlin",
    color: "#7F52FF",
    description: "Kotlin es un lenguaje de programación estático de código abierto que admite la programación funcional y orientada a objetos. Proporciona una sintaxis y conceptos similares a los de otros lenguajes, como C#, Java y Scala, entre muchos otros.",
    type: "lenguaje de programación",
    docs: "https://kotlinlang.org/",
    usage: ["Desarrollo de aplicaciones Android", "Desarrollo de backend"],
  },
  {
    title: "Notion",
    name: "notion",
    url: "https://cdn.simpleicons.org/notion",
    color: "#000000",
    description: "Notion es un organizador de tareas multiplataforma, es decir, una aplicación de productividad que permite gestionar la planificación de la vida laboral y personal.",
    type: "herramienta",
    docs: "https://www.notion.so/es-es",
    usage: ["Organización personal", "Gestión de proyectos"],
  },
  {
    title: "TailwindCSS",
    name: "tailwindcss",
    url: "https://cdn.simpleicons.org/tailwindcss",
    color: "#38B2AC",
    description: "TailwindCSS es un Framework CSS de primera utilidad repleto de clases como por ejemplo; flex, pt-4, text-center y rotate-90 que se pueden componer para crear cualquier diseño.",
    type: "framework",
    docs: "https://tailwindcss.com/",
    usage: ["Desarrollo de interfaces web rápidas", "Desarrollo de sitios web responsive"],
  },
  {
    title: "Bootstrap",
    name: "bootstrap",
    url: "https://cdn.simpleicons.org/bootstrap",
    color: "#7952B3",
    description: "Bootstrap es un popular Framework de CSS que proporciona herramientas y componentes predefinidos para crear interfaces web de manera rápida y eficiente.",
    type: "framework",
    docs: "https://getbootstrap.com/",
    usage: ["Desarrollo de sitios web responsive"],
  },
  {
    title: "NuxtJS",
    name: "nuxtjs",
    url: "https://cdn.simpleicons.org/nuxtdotjs",
    color: "#00C58E",
    description: "Nuxt.js es un framework de JavaScript de código abierto basado en Vue.js que se utiliza para desarrollar aplicaciones web de una sola página (SPA) y aplicaciones universales (SSR).",
    type: "framework",
    docs: "https://v2.nuxt.com/",
    usage: ["Desarrollo de aplicaciones web universales"],
  },
  {
    title: "Linux",
    name: "linux",
    url: "https://cdn.simpleicons.org/linux",
    color: "#FCC624",
    description: "Linux es un sistema operativo de código abierto y gratuito basado en el kernel de Linux. Es ampliamente utilizado en una variedad de dispositivos, desde servidores y computadoras personales hasta dispositivos móviles y sistemas integrados.",
    type: "sistema operativo",
    docs: "https://www.linux.org/",
    usage: ["Servidores", "Desarrollo de software"],
  },
  {
    title: "Ubuntu",
    name: "ubuntu",
    url: "https://cdn.simpleicons.org/ubuntu",
    color: "#E95420",
    description: "Ubuntu es una popular distribución del sistema operativo Linux basada en Debian. Es conocida por ser una opción amigable para los usuarios y fácil de usar, lo que la hace especialmente popular entre los principiantes en Linux.",
    type: "sistema operativo",
    docs: "https://ubuntu.com/",
    usage: ["Sistemas operativos de escritorio", "Servidores"],
  },
  {
    title: "NodeJS",
    name: "nodejs",
    url: "https://cdn.simpleicons.org/nodedotjs",
    color: "#339933",
    description: "Node.js es un entorno de tiempo de ejecución de JavaScript basado en el motor de JavaScript V8 de Google Chrome. Se utiliza principalmente en el lado del servidor para ejecutar aplicaciones web y desarrollar servicios y aplicaciones de red escalables.",
    type: "entorno de ejecución",
    docs: "https://nodejs.org/",
    usage: ["Desarrollo de aplicaciones backend", "Herramientas de línea de comandos"],
  },
  {
    title: "Notepad++",
    name: "notepadplusplus",
    url: "https://cdn.simpleicons.org/notepadplusplus",
    color: "#90E59A",
    description: "Notepad++ es un editor de texto de código abierto y gratuito para sistemas Windows. Está diseñado principalmente para programadores y ofrece una amplia gama de características y funcionalidades que facilitan la edición y el desarrollo de código.",
    type: "herramienta",
    docs: "https://notepad-plus-plus.org/",
    usage: ["Edición de archivos de texto y código fuente"],
  },
  {
    title: "TypeScript",
    name: "typescript",
    url: "https://cdn.simpleicons.org/typescript",
    color: "#007ACC",
    description: "TypeScript es un lenguaje de programación de código abierto desarrollado por Microsoft. Se basa en JavaScript y agrega características de tipado estático opcional y características adicionales que mejoran el desarrollo de aplicaciones a gran escala.",
    type: "lenguaje de programación",
    docs: "https://www.typescriptlang.org/",
    usage: ["Desarrollo de aplicaciones escalables", "Mejora del desarrollo en JavaScript"],
  },
  {
    title: "npm",
    name: "npm",
    url: "https://cdn.simpleicons.org/npm",
    color: "#CB3837",
    description: "npm (Node Package Manager) es el sistema de gestión de paquetes predeterminado para Node.js. Es una herramienta que facilita la instalación, actualización y administración de bibliotecas y paquetes de código reutilizable en proyectos de Node.js.",
    type: "herramienta",
    docs: "https://www.npmjs.com/",
    usage: ["Gestión de dependencias", "Publicación de paquetes"],
  },
  {
    title: "pnpm",
    name: "pnpm",
    url: "https://cdn.simpleicons.org/pnpm",
    color: "#F69220",
    description: "pnpm es un sistema de gestión de paquetes para proyectos de Node.js, al igual que npm. Sin embargo, se diferencia en su enfoque de almacenamiento y manejo de dependencias. Cuando usas npm, las dependencias se instalan en almacenamientos individuales, lo que provoca que descargues la misma dependencia por cada proyecto que dependa de esta (Almacenamiento compartido).",
    type: "herramienta",
    docs: "https://pnpm.io/es/",
    usage: ["Gestión de dependencias", "Instalación y ejecución de paquetes"],
  },
  {
    title: "PostgreSQL",
    name: "postgresql",
    url: "https://cdn.simpleicons.org/postgresql",
    color: "#336791",
    description: "PostgreSQL es un sistema de gestión de bases de datos relacional de código abierto y de alto rendimiento. Es conocido por su robustez, capacidad de escala y soporte para características avanzadas.\nSe destaca como una opción popular para una amplia gama de aplicaciones, desde aplicaciones web hasta aplicaciones empresariales.",
    type: "base de datos",
    docs: "https://www.postgresql.org/",
    usage: ["Almacenamiento y consulta de datos"],
  },
  {
    title: "MongoDB",
    name: "mongodb",
    url: "https://cdn.simpleicons.org/mongodb",
    color: "#47A248",
    description: "MongoDB es un sistema de gestión de bases de datos NoSQL (no relacional) de alto rendimiento y de código abierto. Se basa en el modelo de almacenamiento de documentos, lo que significa que los datos se almacenan en documentos flexibles similares a JSON en lugar de en filas y columnas tradicionales.",
    type: "base de datos",
    docs: "https://www.mongodb.com/",
    usage: ["Almacenamiento y consulta de datos no estructurados"],
  },
  {
    title: "Python",
    name: "python",
    url: "https://cdn.simpleicons.org/python",
    color: "#3776AB",
    description: "Python es un lenguaje de programación interpretado, de alto nivel y multipropósito. Es conocido por su simplicidad, legibilidad y facilidad de uso, lo que lo convierte en una opción popular para una amplia gama de aplicaciones y niveles de experiencia en programación.",
    type: "lenguaje de programación",
    docs: "https://www.python.org/",
    usage: ["Desarrollo de aplicaciones web", "Análisis de datos", "Automatización de tareas"],
  },
  {
    title: "C++",
    name: "cplusplus",
    url: "https://cdn.simpleicons.org/cplusplus",
    color: "#00599C",
    description: "C++ es un lenguaje de programación de propósito general que combina características de lenguajes de alto nivel y bajo nivel. Es una extensión del lenguaje C y ofrece una amplia gama de funcionalidades y flexibilidad para el desarrollo de aplicaciones de alto rendimiento.",
    type: "lenguaje de programación",
    docs: "https://learn.microsoft.com/en-us/cpp/cpp/?view=msvc-170",
    usage: ["Desarrollo de aplicaciones de alto rendimiento", "Programación de sistemas", "Desarrollo de videojuegos"],
  },
  {
    title: "Rust",
    name: "rust",
    url: "https://cdn.simpleicons.org/rust",
    color: "#000000",
    description: "Rust es un lenguaje de programación de sistemas de alto rendimiento que se centra en la seguridad, la concurrencia y la concisión del código.\nFue desarrollado por Mozilla y se ha ganado popularidad por su combinación única de características.",
    type: "lenguaje de programación",
    docs: "https://www.rust-lang.org/learn",
    usage: ["Desarrollo de software de alto rendimiento", "Programación de sistemas"],
  },
  {
    title: "PHP",
    name: "php",
    url: "https://cdn.simpleicons.org/php",
    color: "#777BB4",
    description: "PHP es un lenguaje de programación de código abierto y ampliamente utilizado, especialmente para el desarrollo de aplicaciones web.\nUna de las principales ventajas de PHP es su facilidad de uso y aprendizaje. Tiene una sintaxis similar a otros lenguajes como C y JavaScript, lo que facilita a los desarrolladores familiarizarse rápidamente con él.",
    type: "lenguaje de programación",
    docs: "https://www.php.net/",
    usage: ["Desarrollo de aplicaciones web dinámicas"],
  },
]

export const icons: Icon[] = [
  {
    name: "dotnet",
    url: "https://cdn.simpleicons.org/dotnet",
    color: "#512BD4",
    state: "incomplete"
  },
  {
    name: "javascript",
    url: "https://cdn.simpleicons.org/javascript",
    color: "#F7DF1E",
    state: "incomplete"
  },
  {
    name: "react",
    url: "https://cdn.simpleicons.org/react",
    color: "#61DAFB",
    state: "incomplete"
  },
  {
    name: "angular",
    url: "https://cdn.simpleicons.org/angular",
    color: "#DD0031",
    state: "incomplete"
  },
  {
    name: "vuejs",
    url: "https://cdn.simpleicons.org/vuedotjs",
    color: "#4FC08D",
    state: "incomplete"
  },
  {
    name: "vercel",
    url: "https://cdn.simpleicons.org/vercel",
    color: "#000000",
    state: "incomplete"
  },
  {
    name: "spring",
    url: "https://cdn.simpleicons.org/spring",
    color: "#6DB33F",
    state: "incomplete"
  },
  {
    name: "testinglibrary",
    url: "https://cdn.simpleicons.org/testinglibrary",
    color: "#E33332",
    state: "incomplete"
  },
  {
    name: "dotenv",
    url: "https://cdn.simpleicons.org/dotenv",
    color: "#ECD53F",
    state: "incomplete"
  },
  {
    name: "nextjs",
    url: "https://cdn.simpleicons.org/nextdotjs",
    color: "#000000",
    state: "incomplete"
  },
  {
    name: "nestjs",
    url: "https://cdn.simpleicons.org/nestjs",
    color: "#E0234E",
    state: "incomplete"
  },
  {
    name: "netlify",
    url: "https://cdn.simpleicons.org/netlify",
    color: "#00C7B7",
    state: "incomplete"
  },
  {
    name: "kotlin",
    url: "https://cdn.simpleicons.org/kotlin",
    color: "#7F52FF",
    state: "incomplete"
  },
  {
    name: "notion",
    url: "https://cdn.simpleicons.org/notion",
    color: "#000000",
    state: "incomplete"
  },
  {
    name: "tailwindcss",
    url: "https://cdn.simpleicons.org/tailwindcss",
    color: "#06B6D4",
    state: "incomplete"
  },
  {
    name: "bootstrap",
    url: "https://cdn.simpleicons.org/bootstrap",
    color: "#7952B3",
    state: "incomplete"
  },
  {
    name: "nuxtjs",
    url: "https://cdn.simpleicons.org/nuxtdotjs",
    color: "#00DC82",
    state: "incomplete"
  },
  {
    name: "linux",
    url: "https://cdn.simpleicons.org/linux",
    color: "#FCC624",
    state: "incomplete"
  },
  {
    name: "ubuntu",
    url: "https://cdn.simpleicons.org/ubuntu",
    color: "#E95420",
    state: "incomplete"
  },
  {
    name: "nodejs",
    url: "https://cdn.simpleicons.org/nodedotjs",
    color: "#339933",
    state: "incomplete"
  },
  {
    name: "notepadplusplus",
    url: "https://cdn.simpleicons.org/notepadplusplus",
    color: "#90E59A",
    state: "incomplete"
  },
  {
    name: "typescript",
    url: "https://cdn.simpleicons.org/typescript",
    color: "#3178C6",
    state: "incomplete"
  },
  {
    name: "npm",
    url: "https://cdn.simpleicons.org/npm",
    color: "#CB3837",
    state: "incomplete"
  },
  {
    name: "pnpm",
    url: "https://cdn.simpleicons.org/pnpm",
    color: "#F69220",
    state: "incomplete"
  },
  {
    name: "postgresql",
    url: "https://cdn.simpleicons.org/postgresql",
    color: "#4169E1",
    state: "incomplete"
  },
  {
    name: "mongodb",
    url: "https://cdn.simpleicons.org/mongodb",
    color: "#47A248",
    state: "incomplete"
  },
  {
    name: "python",
    url: "https://cdn.simpleicons.org/python",
    color: "#3776AB",
    state: "incomplete"
  },
  {
    name: "cplusplus",
    url: "https://cdn.simpleicons.org/cplusplus",
    color: "#00599C",
    state:"incomplete"
  },
  {
    name: "rust",
    url: "https://cdn.simpleicons.org/rust",
    color: "#000000",
    state: "incomplete"
  },
  {
    name: "php",
    url: "https://cdn.simpleicons.org/php",
    color: "#777BB4",
    state: "incomplete"
  },
]