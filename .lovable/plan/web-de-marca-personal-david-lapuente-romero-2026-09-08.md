# Web de marca personal — David Lapuente Romero

Una página de marca personal y servicios en español, con estilo oscuro elegante, que usa los datos reales del perfil de LinkedIn de David.

## Qué verá el visitante

Una única página (ruta `/`) con estas secciones:

1. **Cabecera destacada**: nombre, titular profesional, foto de perfil y botones de acción (contactar / ver LinkedIn).
2. **Sobre mí**: resumen profesional extraído del perfil.
3. **Servicios**: 3-4 tarjetas de servicios derivadas de la experiencia de David.
4. **Experiencia y formación**: línea de tiempo con puestos y estudios del perfil.
5. **Contacto**: botones de correo y LinkedIn, más un enlace al perfil.
6. **Pie de página** sencillo con copyright.

## Cómo se construye

1. **Conectar LinkedIn**: se abrirá una tarjeta para que David autorice su cuenta de LinkedIn. Con eso obtendremos su nombre, titular y foto reales mediante la API de LinkedIn (`GET /v2/userinfo` a través de la pasarela de conectores).
   - Nota: la API pública de LinkedIn solo expone datos básicos del perfil (nombre, foto, titular si está disponible). El resto del contenido (resumen, experiencia, servicios) se redactará de forma profesional y David podrá corregirlo fácilmente pidiéndolo en el chat.
2. **Diseño**: fondo oscuro (`#0F172A`), superficies `#1E293B`, acento azul cielo `#38BDF8`, texto claro; títulos en Space Grotesk y cuerpo en DM Sans (cargadas vía Google Fonts).
3. **Estructura técnica**:
   - Reescribir `src/routes/index.tsx` con la página completa (reemplaza el placeholder).
   - Ajustar tokens de color en `src/styles.css` (tema oscuro por defecto).
   - Metadatos propios en `head()` de la ruta: título "David Lapuente Romero", descripción, og:type y twitter:card.
   - Si la foto de LinkedIn devuelve una URL https absoluta, se usará también como og:image.
   - Animaciones sutiles de aparición al hacer scroll (Motion) para dar sensación premium.
4. **Contenido de ejemplo editable**: cualquier texto que LinkedIn no proporcione (descripción de servicios, logros) se marcará para que David lo revise y ajuste.

## Detalles técnicos

- TanStack Start + Tailwind v4 (tokens en `src/styles.css`, fuentes por `<link>` en `__root.tsx`).
- Conector LinkedIn en modo pasarela (server-side, sin exponer claves al navegador).
- Sin base de datos: contenido estático en la página.
- Idioma: español (`lang="es"`).
