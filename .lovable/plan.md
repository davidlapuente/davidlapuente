# Plan: Eliminar o corregir `index.html`

## Objetivo
Resolver qué hacer con el archivo `index.html` actual, que es una página simple de enlaces ("link in bio") y no la web completa de TanStack Start.

## Estado actual confirmado
- El proyecto es una aplicación TanStack Start; la web real vive en `src/routes/index.tsx` y `src/routes/__root.tsx`.
- El `index.html` de la raíz contiene una página estática de enlaces, no el punto de entrada que necesita Vite/TanStack Start.
- En proyectos Vite, `index.html` suele ser el punto de entrada del build. Eliminarlo podría romper la compilación si no hay otro entry point configurado.

## Pasos
1. Verificar si `index.html` es necesario para el build (revisar si Vite/TanStack Start lo requiere como entry point o si lo genera automáticamente).
2. Si es seguro eliminarlo porque es un archivo residual sin uso:
   - Borrar `index.html`.
3. Si Vite lo necesita pero su contenido actual es incorrecto:
   - Reemplazarlo por un `index.html` mínimo compatible con TanStack Start (vacío o con el contenedor que espera el framework).
4. Ejecutar `bun run build` para confirmar que la web completa sigue compilando.
5. Revisar la vista previa para asegurar que se sigue viendo la web completa, no la página de enlaces.

## Notas
- No se modificará contenido, diseño, SEO ni ninguna otra sección de la web.
- Se prioriza que la web siga compilando y publicándose correctamente.