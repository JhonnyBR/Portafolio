# Auditoría final integral

Fecha: 2026-10-31  
Proyecto: `C:\Users\jbelt\Documents\jbeltra99`

## Resumen ejecutivo

La aplicación funciona localmente en las nueve rutas previstas y responde correctamente en 1440×900, 768×1024 y 390×844. La navegación, el menú móvil, la validación cliente del formulario, el consentimiento inicial y las comprobaciones de compilación no presentan fallos observables en esta auditoría.

La recomendación no es todavía “listo para publicar” por dos asuntos: no existe JSON-LD y la página de privacidad sigue siendo un placeholder mientras está marcada como `noindex`. Tampoco se probó un envío real con Resend ni se verificó la entrega de correo, por lo que esa integración queda pendiente de una prueba autorizada.

## Comprobaciones superadas

### Rutas y navegación

Se comprobaron con Playwright las rutas `/`, `/about`, `/career-journey`, `/experience`, `/artificial-intelligence`, `/education`, `/skills`, `/contact` y `/privacy`.

- HTTP 200 en las nueve rutas.
- Un `h1` presente por ruta y viewport.
- Enlaces internos, anclas `/#trayectoria` y `/#contacto`, footer y enlace externo de LinkedIn presentes.
- A 390×844: el menú inicia cerrado, abre con el botón, actualiza `aria-expanded` y se cierra con Escape.
- El menú funciona mediante teclado; Enter abre el control enfocado.

### Responsive y visual

Se generaron capturas de página completa en:

`C:\Users\jbelt\AppData\Local\Temp\portfolio-visual-check\final-audit-desktop.png`  
`C:\Users\jbelt\AppData\Local\Temp\portfolio-visual-check\final-audit-tablet.png`  
`C:\Users\jbelt\AppData\Local\Temp\portfolio-visual-check\final-audit-mobile.png`

Viewports comprobados: 1440×900, 768×1024 y 390×844. No se detectó desplazamiento horizontal ni fallo de carga. La figura del hero permanece oculta en móvil según lo documentado.

### Formulario

- El formulario está presente en `/contact`.
- Las etiquetas apuntan a `contact-name`, `contact-email`, `contact-subject`, `contact-message` y `contact-website`.
- La validación cliente rechaza nombre, correo y mensaje inválidos y muestra `Revisa nombre, correo y mensaje.`.
- No se envió ningún mensaje real.
- No se simuló un éxito del backend.

### Consentimiento y analítica

- En contextos Playwright nuevos, el banner aparece en local.
- No se aceptó ni rechazó automáticamente.
- `localStorage` no contenía una decisión previa en la comprobación del formulario.
- No se observaron solicitudes fallidas ni errores de consola durante la navegación.

### SEO

Comprobado en la implementación:

- Título y descripción únicos por ruta.
- `robots` con `noindex, nofollow` para `/privacy`.
- URL canónica por ruta.
- Metadatos Open Graph de título, descripción, tipo, URL y sitio.
- Metadatos Twitter Card, título y descripción.
- `public/robots.txt`: HTTP 200, permite el sitio y excluye `/privacy`.
- `public/sitemap.xml`: HTTP 200 y contiene las rutas públicas excepto `/privacy`.

## Problemas encontrados

### Severidad media

1. **No existe JSON-LD.** La auditoría del DOM no encontró `script[type="application/ld+json"]`. Esto reduce la información estructurada disponible para buscadores, aunque no impide el funcionamiento de la página.

2. **La privacidad no está lista para publicación.** `/privacy` muestra un placeholder y correctamente permanece `noindex`, pero la política legal definitiva aún debe aprobarse antes de publicar.

### Severidad baja

3. **No se configuró imagen Open Graph/Twitter.** La implementación incluye título y descripción, pero no `og:image` ni `twitter:image`; las previsualizaciones sociales podrían ser menos completas.

4. **La comparación visual contra el sitio publicado no forma parte de esta ejecución.** Se verificó la implementación local mediante capturas en los tres tamaños, pero no se modificó ni se volvió a capturar la referencia remota en esta auditoría.

## Diferencias visuales pendientes

- El banner de consentimiento aparece en local y altera la parte inferior de las capturas; se considera una diferencia de estado, no un defecto visual confirmado.
- La geometría azul del hero sigue siendo una aproximación CSS y puede conservar diferencias finas de posición, opacidad y conexiones respecto a la referencia publicada.
- No se declara coincidencia pixel-perfect.

## Riesgos antes de publicar

- Falta configurar y validar credenciales reales de Resend, remitente verificado y entrega autorizada.
- El rate limiting del backend es en memoria y no distribuido.
- La política de privacidad definitiva debe aprobarse antes de retirar el `noindex`.
- Debe decidirse si se requiere JSON-LD e imagen social antes del lanzamiento.
- El audit de npm documentado previamente mantiene vulnerabilidades de desarrollo pendientes; no se ejecutaron actualizaciones forzadas.

## Resultados automatizados

- `npx.cmd tsc -b --pretty false`: correcto.
- `npm.cmd run build`: correcto; frontend y backend compilados.
- `npm.cmd test`: correcto; 1 archivo y 7 tests.
- Playwright: nueve rutas × tres viewports, HTTP 200, sin errores de consola ni solicitudes fallidas.
- `/robots.txt` y `/sitemap.xml`: HTTP 200.

## Recomendación final

**Requiere correcciones y decisiones previas a publicación.** La base funcional está operativa, pero deben resolverse la política legal, la validación autorizada de Resend y la decisión sobre JSON-LD/imagen social antes de considerar el portfolio listo para producción.
