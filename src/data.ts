
export type TechnologieType = "lenguaje de programación" | "framework" | "librería" | "biblioteca" | "plataforma" | "herramienta" | "sistema operativo" | "entorno de ejecución" | "base de datos" | "empresa"

export interface Icon {
  name: string
  url: `https://cdn.simpleicons.org/${string}`
  color: `#${string}`
}

export interface IconInformation extends Omit<Icon, "state"> {
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
  {
    title: "Svelte",
    name: "svelte",
    url: "https://cdn.simpleicons.org/svelte",
    color: "#FF3E00",
    description: "Svelte es un framework de desarrollo web de código abierto que permite construir aplicaciones web interactivas y de alto rendimiento.\nA diferencia de otros frameworks como React o Vue, Svelte se enfoca en compilar el código durante el proceso de compilación en lugar de ejecutarlo en tiempo de ejecución en el navegador.",
    type: "framework",
    docs: "https://svelte.dev/docs",
    usage: ["Desarrollo web", "Componentes de interfaz de usuario"],
  },
  {
    title: "Google",
    name: "google",
    url: "https://cdn.simpleicons.org/google",
    color: "#4285F4",
    description: "Google es una empresa multinacional estadounidense de tecnología que se especializa en servicios y productos relacionados con Internet. Fundada en 1998, Google ha crecido hasta convertirse en una de las compañías más grandes e influyentes del mundo.",
    type: "empresa",
    docs: "https://www.google.com/",
    usage: ["Motor de búsqueda", "Servicios en línea", "Computación en la nube"],
  },
  {
    title: "Deno",
    name: "deno",
    url: "https://cdn.simpleicons.org/deno",
    color: "#000000",
    description: "Deno es un entorno de ejecución para JavaScript y TypeScript basado en el motor de JavaScript V8. Fue creado por Ryan Dahl, quien también creó Node.js, y se enfoca en abordar algunas limitaciones y desafíos asociados con Node.js.",
    type: "entorno de ejecución",
    docs: "https://deno.land/manual",
    usage: ["Scripting en el lado del servidor", "Herramientas de línea de comandos"],
  },
  {
    title: "Scala",
    name: "scala",
    url: "https://cdn.simpleicons.org/scala",
    color: "#DC322F",
    description: "Scala es un lenguaje de programación multiparadigma diseñado para combinar los conceptos de programación orientada a objetos y programación funcional. Fue creado en 2004 y se ejecuta en la máquina virtual de Java (JVM).",
    type: "lenguaje de programación",
    docs: "https://docs.scala-lang.org/",
    usage: ["Desarrollo backend", "Análisis de datos"],
  },
  {
    title: "Go",
    name: "go",
    url: "https://cdn.simpleicons.org/go",
    color: "#00ADD8",
    description: "Go, también conocido como Golang, es un lenguaje de programación creado por Google. Es un lenguaje de programación de propósito general que se centra en la simplicidad, la eficiencia y la concurrencia.",
    type: "lenguaje de programación",
    docs: "https://golang.org/doc/",
    usage: ["Programación en el lado del servidor", "Redes"],
  },
  {
    title: "Dart",
    name: "dart",
    url: "https://cdn.simpleicons.org/dart",
    color: "#0175C2",
    description: "Dart es un lenguaje de programación desarrollado por Google. Es un lenguaje orientado a objetos y de tipado estático, diseñado para ser fácil de aprender, eficiente y adecuado para desarrollar aplicaciones web, móviles y de servidor.",
    type: "lenguaje de programación",
    docs: "https://dart.dev/guides",
    usage: ["Desarrollo multiplataforma", "Aplicaciones móviles"],
  },
  {
    title: "Flutter",
    name: "flutter",
    url: "https://cdn.simpleicons.org/flutter",
    color: "#02569B",
    description: "Flutter es un framework de desarrollo de aplicaciones móviles de código abierto creado por Google. Utiliza el lenguaje de programación Dart y permite construir aplicaciones nativas de alta calidad para iOS, Android, web y escritorio desde una sola base de código.",
    type: "framework",
    docs: "https://flutter.dev/docs",
    usage: ["Desarrollo de aplicaciones multiplataforma", "Diseño de interfaz de usuario"],
  },
  {
    title: "Firebase",
    name: "firebase",
    url: "https://cdn.simpleicons.org/firebase",
    color: "#FFCA28",
    description: "Firebase es una plataforma de desarrollo de aplicaciones móviles y web creada por Google. Proporciona una variedad de servicios y herramientas para facilitar el desarrollo rápido y eficiente de aplicaciones, así como también para ayudar en el crecimiento y la administración de las mismas.",
    type: "plataforma",
    docs: "https://firebase.google.com/docs",
    usage: ["Base de datos en tiempo real", "Autenticación", "Hosting"],
  },
  {
    title: "Elixir",
    name: "elixir",
    url: "https://cdn.simpleicons.org/elixir",
    color: "#4B275F",
    description: "Elixir es un lenguaje de programación funcional y concurrente diseñado para construir aplicaciones escalables y robustas.\nFue creado por José Valim en 2011 y se basa en la máquina virtual de Erlang (BEAM), conocida por su capacidad de manejar sistemas distribuidos y concurrentes de manera eficiente.",
    type: "lenguaje de programación",
    docs: "https://elixir-lang.org/getting-started/introduction.html",
    usage: ["Sistemas distribuidos", "Concurrencia"],
  },
  {
    title: "Git",
    name: "git",
    url: "https://cdn.simpleicons.org/git",
    color: "#F05032",
    description: "Git es un sistema de control de versiones distribuido ampliamente utilizado en el desarrollo de software. Proporciona una forma de rastrear los cambios en archivos y carpetas a lo largo del tiempo, lo que permite a los desarrolladores colaborar de manera efectiva en proyectos.",
    type: "herramienta",
    docs: "https://git-scm.com/doc",
    usage: ["Desarrollo colaborativo", "Control de versiones"],
  },
  {
    title: "GitHub",
    name: "github",
    url: "https://cdn.simpleicons.org/github",
    color: "#181717",
    description: "GitHub es una plataforma web de alojamiento de código fuente, seguimiento de versiones y gestión de proyectos. Permite a los desarrolladores colaborar en proyectos, compartir código y comentarios, y realizar un seguimiento de los cambios en el código.",
    type: "plataforma",
    docs: "https://help.github.com/en/articles/about-github",
    usage: ["Desarrollar software", "Compartir código", "Colaborar con otros desarrolladores"],
  },
  {
    title: "Windows",
    name: "windows",
    url: "https://cdn.simpleicons.org/windows",
    color: "#0078D4",
    description: "Windows es un sistema operativo gráfico desarrollado por Microsoft. El mismo proporciona una interfaz gráfica de usuario intuitiva que permite a los usuarios interactuar con el software y el hardware de sus dispositivos.",
    type: "sistema operativo",
    docs: "https://docs.microsoft.com/en-us/windows",
    usage: ["Navegar por Internet", "Ejecutar programas", "Jugar juegos"],
  },
  {
    title: "Lua",
    name: "lua",
    url: "https://cdn.simpleicons.org/lua",
    color: "#2C2D72",
    description: "Lua es un lenguaje de programación multiparadigma, ligero e interpretado. Fue diseñado principalmente para ser utilizado de manera incorporada en aplicaciones. Se caracteriza por ser un lenguaje sencillo de aprender y utilizar, pero a la vez muy potente.",
    type: "lenguaje de programación",
    docs: "https://www.lua.org/docs.html",
    usage: ["Desarrollo de juegos", "Desarrollo de aplicaciones web", "Desarrollo de aplicaciones móviles"],
  },
  {
    title: "R",
    name: "r",
    url: "https://cdn.simpleicons.org/r",
    color: "#276DC3",
    description: "R es un lenguaje de programación y un entorno de software libre y gratuito para el cálculo estadístico, gráficos y gráficos. Es utilizado por científicos, estadísticos, economistas, financieros y otros profesionales que necesitan realizar análisis estadísticos.",
    type: "lenguaje de programación",
    docs: "https://www.r-project.org/",
    usage: ["Análisis estadístico", "Gráficos", "Machine learning"],
  },
  {
    title: "Ruby",
    name: "ruby",
    url: "https://cdn.simpleicons.org/ruby",
    color: "#CC342D",
    description: "Ruby es un lenguaje de programación de código abierto orientado a objetos creado por Yukihiro Matsumoto en 1995. Está diseñado para ser fácil de usar y aprender, y tiene una gran comunidad de usuarios y desarrolladores.",
    type: "lenguaje de programación",
    docs: "https://ruby-lang.org/en/",
    usage: ["Desarrollo web", "Desarrollo de aplicaciones de escritorio"],
  },
  {
    title: "Zig",
    name: "zig",
    url: "https://cdn.simpleicons.org/zig",
    color: "#F7A41D",
    description: "Zig es un lenguaje de programación de propósito general, compilado y de tipado estático, creado por Andrew Kelley en 2016. Está diseñado para ser un reemplazo moderno para el lenguaje C, con el objetivo de ser más pequeño, simple, seguro y optimizado.",
    type: "lenguaje de programación",
    docs: "https://ziglang.org/",
    usage: ["Desarrollo de sistemas embebidos", "Desarrollo de aplicaciones de escritorio", "Desarrollo de juegos"],
  },
  {
    title: "Swift",
    name: "swift",
    url: "https://cdn.simpleicons.org/swift",
    color: "#F05138",
    description: "Swift es un lenguaje de programación desarrollado por Apple. Fue presentado en 2014 como un reemplazo para el antiguo lenguaje Objective-C, utilizado para el desarrollo de aplicaciones en el ecosistema de Apple.",
    type: "lenguaje de programación",
    docs: "https://www.swift.org/documentation/",
    usage: ["Desarrollo de aplicaciones iOS", "Desarrollo de aplicaciones macOS"],
  },
  {
    title: "Docker",
    name: "docker",
    url: "https://cdn.simpleicons.org/docker",
    color: "#2496ED",
    description: "Docker es una plataforma de código abierto que permite a los desarrolladores crear, desplegar y ejecutar aplicaciones de manera eficiente utilizando contenedores. Los contenedores son entornos ligeros y portátiles que contienen todo lo necesario para que una aplicación se ejecute, incluyendo el código, las bibliotecas, las dependencias y las configuraciones.",
    type: "plataforma",
    docs: "https://docs.docker.com/",
    usage: ["Ejecución de aplicaciones", "Entornos de microservicios", "Configuración de entornos de desarrollo"],
  },
]

export const icons: Icon[] = [
  {
    name: "dotnet",
    url: "https://cdn.simpleicons.org/dotnet",
    color: "#512BD4",
  },
  {
    name: "javascript",
    url: "https://cdn.simpleicons.org/javascript",
    color: "#F7DF1E",
  },
  {
    name: "react",
    url: "https://cdn.simpleicons.org/react",
    color: "#61DAFB"
  },
  {
    name: "angular",
    url: "https://cdn.simpleicons.org/angular",
    color: "#DD0031"
  },
  {
    name: "vuejs",
    url: "https://cdn.simpleicons.org/vuedotjs",
    color: "#4FC08D",
  },
  {
    name: "vercel",
    url: "https://cdn.simpleicons.org/vercel",
    color: "#000000"
  },
  {
    name: "spring",
    url: "https://cdn.simpleicons.org/spring",
    color: "#6DB33F"
  },
  {
    name: "testinglibrary",
    url: "https://cdn.simpleicons.org/testinglibrary",
    color: "#E33332"
  },
  {
    name: "dotenv",
    url: "https://cdn.simpleicons.org/dotenv",
    color: "#ECD53F"
  },
  {
    name: "nextjs",
    url: "https://cdn.simpleicons.org/nextdotjs",
    color: "#000000"
  },
  {
    name: "nestjs",
    url: "https://cdn.simpleicons.org/nestjs",
    color: "#E0234E"
  },
  {
    name: "netlify",
    url: "https://cdn.simpleicons.org/netlify",
    color: "#00C7B7"
  },
  {
    name: "kotlin",
    url: "https://cdn.simpleicons.org/kotlin",
    color: "#7F52FF"
  },
  {
    name: "notion",
    url: "https://cdn.simpleicons.org/notion",
    color: "#000000"
  },
  {
    name: "tailwindcss",
    url: "https://cdn.simpleicons.org/tailwindcss",
    color: "#06B6D4"
  },
  {
    name: "bootstrap",
    url: "https://cdn.simpleicons.org/bootstrap",
    color: "#7952B3"
  },
  {
    name: "nuxtjs",
    url: "https://cdn.simpleicons.org/nuxtdotjs",
    color: "#00DC82"
  },
  {
    name: "linux",
    url: "https://cdn.simpleicons.org/linux",
    color: "#FCC624"
  },
  {
    name: "ubuntu",
    url: "https://cdn.simpleicons.org/ubuntu",
    color: "#E95420"
  },
  {
    name: "nodejs",
    url: "https://cdn.simpleicons.org/nodedotjs",
    color: "#339933"
  },
  {
    name: "notepadplusplus",
    url: "https://cdn.simpleicons.org/notepadplusplus",
    color: "#90E59A"
  },
  {
    name: "typescript",
    url: "https://cdn.simpleicons.org/typescript",
    color: "#3178C6"
  },
  {
    name: "npm",
    url: "https://cdn.simpleicons.org/npm",
    color: "#CB3837"
  },
  {
    name: "pnpm",
    url: "https://cdn.simpleicons.org/pnpm",
    color: "#F69220"
  },
  {
    name: "postgresql",
    url: "https://cdn.simpleicons.org/postgresql",
    color: "#4169E1"
  },
  {
    name: "mongodb",
    url: "https://cdn.simpleicons.org/mongodb",
    color: "#47A248"
  },
  {
    name: "python",
    url: "https://cdn.simpleicons.org/python",
    color: "#3776AB"
  },
  {
    name: "cplusplus",
    url: "https://cdn.simpleicons.org/cplusplus",
    color: "#00599C"
  },
  {
    name: "rust",
    url: "https://cdn.simpleicons.org/rust",
    color: "#000000"
  },
  {
    name: "php",
    url: "https://cdn.simpleicons.org/php",
    color: "#777BB4"
  },
  {
    name: "svelte",
    url: "https://cdn.simpleicons.org/svelte",
    color: "#FF3E00"
  },
  {
    name: "google",
    url: "https://cdn.simpleicons.org/google",
    color: "#4285F4"
  },
  {
    name: "deno",
    url: "https://cdn.simpleicons.org/deno",
    color: "#000000"
  },
  {
    name: "scala",
    url: "https://cdn.simpleicons.org/scala",
    color: "#DC322F"
  },
  {
    name: "go",
    url: "https://cdn.simpleicons.org/go",
    color: "#00ADD8"
  },
  {
    name: "dart",
    url: "https://cdn.simpleicons.org/dart",
    color: "#0175C2"
  },
  {
    name: "flutter",
    url: "https://cdn.simpleicons.org/flutter",
    color: "#02569B"
  },
  {
    name: "firebase",
    url: "https://cdn.simpleicons.org/firebase",
    color: "#FFCA28"
  },
  {
    name: "elixir",
    url: "https://cdn.simpleicons.org/elixir",
    color: "#4B275F"
  },
  {
    name: "git",
    url: "https://cdn.simpleicons.org/git",
    color: "#F05032"
  },
  {
    name: "github",
    url: "https://cdn.simpleicons.org/github",
    color: "#181717",
  },
  {
    name: "windows",
    url: "https://cdn.simpleicons.org/windows",
    color: "#0078D4",
  },
  {
    name: "lua",
    url: "https://cdn.simpleicons.org/lua",
    color: "#2C2D72",
  },
  {
    name: "r",
    url: "https://cdn.simpleicons.org/r",
    color: "#276DC3",
  },
  {
    name: "ruby",
    url: "https://cdn.simpleicons.org/ruby",
    color: "#CC342D",
  },
  {
    name: "zig",
    url: "https://cdn.simpleicons.org/zig",
    color: "#F7A41D",
  },
  {
    name: "swift",
    url: "https://cdn.simpleicons.org/swift",
    color: "#F05138",
  },
  {
    name: "docker",
    url: "https://cdn.simpleicons.org/docker",
    color: "#2496ED",
  },
]