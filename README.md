# Aplicación para informarse de personajes de Marvel

Esta aplicación consiste en una pequeña web en la que puedes buscar personajes y añadirlos como favoritos, además, puedes ver la información de cada uno así como los cómics que pertenecen al personaje.

Esta web se está desplegada en [Netlify](https://app.netlify.com/) y se puede acceder desde el siguiente enlace: [Marvel App]().

## Primeros pasos

### Requisitos

- Node >= 20.16.x

### Instalación

Para instalar las dependencias es necesario tener instalado un gestor de dependencias como npm o yarn.

En el directorio raíz del proyecto ejecutamos:

```bash
npm install
```

o

```bash
yarn install
```

## Ejecución de la aplicación

Tenemos dos modos de ejecución de la aplicación, modo desarrollo y modo producción. En el modo desarrollo los assets se sirven sin minimizar y en el modo producción se sirven concatenados y minimizados.

Para ejecutar la aplicación en modo desarrollo o modo producción debemos situarnos en la raíz del proyecto (donde se encuentra el fichero package.json) y ejecutar:

### _Modo desarrollo_

```bash
npm run dev
```

### _Modo producción_

```bash
npm run build
```

```bash
npm run preview
```

## Arquitectura y Estructura

Para la realización de esta web se utilizó la biblioteca [React](https://react.dev/) y como lenguaje ha sido [Typescript](https://www.typescriptlang.org/). Además, para un desarrollo más eficaz y rápido se empleó [Vite](https://vitejs.dev/). En cuanto al diseño se utilizó [Sass](https://sass-lang.com/). Y por último, para las pruebas de la web se implementó [Jest](https://jestjs.io/).
