# Plan: Usar el logo como favicon

## Objetivo
Reemplazar el favicon actual de la web por el logo subido (`Mi-logo.png`).

## Pasos
1. Convertir `Mi-logo.png` a un favicon cuadrado de 64×64 px con fondo transparente, guardado como `public/favicon.png`.
2. Actualizar `src/routes/__root.tsx` para que el `link` de icono apunte a `/favicon.png` en lugar de `/favicon.ico`.
3. Eliminar el favicon antiguo `public/favicon.ico`.
4. Verificar que la compilación sea correcta y que el favicon se cargue en la vista previa.

## Notas
- No se tocará ningún otro elemento de diseño ni contenido.
- El favicon se mantendrá como archivo real en `public/`, no como puntero de CDN.
