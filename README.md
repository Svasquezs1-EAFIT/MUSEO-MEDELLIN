# MUSEO-MEDELLIN

Proyecto web desarrollado con **React + Vite** para explorar lugares culturales e históricos por medio de fichas, mapa interactivo y recursos narrativos.

## Tecnologías principales

- React
- Vite
- React Router
- Leaflet / React Leaflet
- Firebase Hosting

## Requisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado:

- Node.js
- npm
- Git

## Instalación

Clona el repositorio y entra al proyecto:

```bash
git clone https://github.com/Svasquezs1-EAFIT/MUSEO-MEDELLIN.git
cd MUSEO-MEDELLIN
```

Instala las dependencias:

```bash
npm install
```

## Ejecución local

Para iniciar el entorno de desarrollo:

```bash
npm run dev
```

Luego abre en el navegador la URL local que muestra Vite, normalmente:

```text
http://localhost:5173/
```

## Scripts disponibles

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

### Descripción de scripts

- `npm run dev`: inicia el servidor de desarrollo
- `npm run build`: genera la versión de producción en la carpeta `dist`
- `npm run preview`: permite visualizar localmente la build generada
- `npm run lint`: ejecuta ESLint para revisar el código

## Despliegue

El proyecto usa **Firebase Hosting**.

Flujo general de despliegue:

1. Realizar cambios en una rama
2. Probar localmente
3. Subir la rama al repositorio remoto
4. Crear un Pull Request hacia `main`
5. Validar que el proyecto compile correctamente
6. Hacer merge una vez aprobado

## Buenas prácticas de trabajo

- No trabajar directamente sobre `main`
- Crear una rama por cada issue o tarea
- Hacer commits pequeños y claros
- Probar localmente antes de subir cambios
- Agregar solo archivos relacionados con la tarea
- No versionar `node_modules`
- No versionar `dist` si la build se genera en el despliegue

## Recomendaciones para el equipo

- Mantener una sola fuente de verdad para los datos de lugares
- Documentar nuevas estructuras de datos antes de expandir contenido
- Separar cambios funcionales, visuales y de documentación en commits distintos
- Usar Pull Requests para revisar cambios antes de pasarlos a `main`

## Estado actual del proyecto

Este README documenta la base técnica y el flujo de trabajo del repositorio. La estructura funcional del producto seguirá creciendo por medio de issues, ramas y pull requests.