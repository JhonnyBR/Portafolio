# PROJECT SPEC — jbeltra99.com

## Estado

Fase 2 — base React implementada. Backend, analytics, SEO avanzado, E2E y despliegue siguen pendientes.

## Fuente inspeccionada

- URL principal: https://jbeltra99.com/
- Inspección realizada: 21 de octubre de 2026 mediante la versión indexada/disponible.
- La página se identificó como “Jonny Beltran | Software Engineer”.

## Evidencia verificable de la versión publicada

### Contenido visible en la página principal

- Marca: “Jbeltra99” y descriptor “Software Engineer”.
- H1: “Jonny Beltran”.
- Presentación: “Diseño y desarrollo arquitecturas de software modernas, plataformas cloud escalables y sistemas distribuidos enfocados en rendimiento, seguridad y mantenibilidad.”
- Acciones: “Descargar CV” y “Contactar”.
- Sección “Sobre mí”, con texto sobre arquitectura de sistemas, microservicios, plataformas cloud, APIs y sistemas distribuidos.
- Texto de experiencia visible: “Desarollador Semi Senior 2024 — Presente” y “Junior Developer 2022 — 2024”. Se conservará la grafía publicada hasta validar el contenido definitivo.
- Sección “Proyectos recientes”. La versión publicada muestra RBAC Authorization System y Kubernetes Environment Provisioning.
- Sección “Tecnologías”: Node.js, Angular, TypeScript, React, Laravel, SQL Server, Docker y Kubernetes.
- CTA “Trabajemos juntos”, con “Enviar Email” y un correo visible en la referencia publicada.
- Enlace de LinkedIn a `https://linkedin.com/in/jonny-b`.
- Pie: “© 2026 Jonny Beltran”.

### Recursos y enlaces observados

- CV: `/cv/jonny-beltran-cv.pdf`. El recurso no pudo recuperarse durante la inspección; no se debe inventar ni reconstruir su contenido.
- Imagen con alt/texto “Jonny Beltran”. No se pudo confirmar el archivo original ni sus dimensiones desde la inspección textual.
- Imágenes asociadas a los proyectos RBAC y Kubernetes.
- LinkedIn: `https://linkedin.com/in/jonny-b`.

## Rutas solicitadas por el brief

El brief solicita confirmar antes de implementar: `/`, `/about`, `/career-journey`, `/experience`, `/artificial-intelligence`, `/education`, `/skills`, `/contact` y `/privacy`.

La inspección de la página publicada solo verificó contenido de la ruta `/`. No se ha confirmado que las demás rutas existieran en la versión publicada. Se implementarán únicamente cuando exista evidencia suficiente o una decisión explícita documentada.

### Verificación adicional de Fase 1

- Se intentó consultar directamente cada ruta solicitada, además de `robots.txt`, `sitemap.xml` y el PDF del CV.
- La herramienta de inspección no pudo acceder a ninguna de esas URLs; devolvió “URL is not accessible via this tool”.
- Este resultado no demuestra que las rutas no existan: solo confirma que no pueden verificarse con el acceso disponible.
- Una búsqueda indexada adicional solo devolvió la home; no aportó evidencia de rutas internas.
- No hay repositorio disponible en el workspace: no existen `package.json`, código fuente ni configuración que permitan confirmar la arquitectura o las rutas históricas.

## Decisiones para la reconstrucción

- Arquitectura obligatoria: React, TypeScript estricto, Vite, React Router, Tailwind CSS, Vitest, React Testing Library y Playwright cuando sea viable.
- Estructura separada por páginas, componentes, layouts, contenido, configuración, librerías, servicios, estilos y tipos.
- Tema claro/oscuro, responsive, foco visible, navegación por teclado y `prefers-reduced-motion`.
- No publicar inicialmente los proyectos RBAC/Kubernetes: el brief indica que permanecen ocultos hasta confirmar contenido, confidencialidad y autorización.
- No inventar fechas, cargos, clientes, métricas, certificaciones, proyectos de IA ni recursos faltantes.
- Contacto: envío real exclusivamente server-side; Resend es el proveedor preferido. Nunca exponer `RESEND_API_KEY`.
- Analytics: GTM `GTM-W7MZBWTP` y GA4 `G-NBR4NPTRXE` solo después del consentimiento, sin carga directa duplicada de `gtag.js`.
- SEO, privacidad, consentimiento, seguridad y backend se documentarán y validarán en sus fases correspondientes.

## Limitaciones registradas

- La inspección remota no permitió descargar el PDF del CV.
- No se pudieron confirmar rutas internas adicionales, estados responsive, tema oscuro, menú desplegable, animaciones, formulario ni implementación de consentimiento desde la representación textual disponible.
- El contenido publicado difiere del perfil aprobado en el brief; el brief prevalece para datos personales aprobados, mientras que el sitio publicado prevalece para decisiones visuales y contenido verificable. Las discrepancias quedan pendientes de decisión antes de la implementación.

## Confirmaciones requeridas del propietario

- Autorizar las rutas que deben existir aunque no puedan verificarse en la web publicada.
- Decidir si la nueva versión debe reproducir el contenido actualmente publicado o utilizar exclusivamente el perfil aprobado del brief.
- Confirmar si RBAC Authorization System y Kubernetes Environment Provisioning pueden publicarse; por seguridad permanecen ocultos.
- Proporcionar o confirmar el CV, la imagen personal y cualquier recurso visual que deba conservarse.
- Confirmar la institución del título Técnico Profesional en Desarrollo de Software.
- Definir posteriormente el backend/proveedor del formulario y disponibilidad de credenciales; esto no bloquea la base visual, pero sí la Fase 4.

## Base implementada en Fase 2

- React + Vite + TypeScript estricto + React Router + Tailwind CSS 3.4.
- Layout reutilizable con header, navegacion responsive, menu “Más”, footer, foco visible, skip link y tema claro/oscuro.
- Rutas implementadas: `/`, `/about`, `/career-journey`, `/experience`, `/artificial-intelligence`, `/education`, `/skills`, `/contact` y `/privacy`.
- Contenido centralizado en `src/content/site.ts`, sin casos de estudio RBAC/Kubernetes.
- Contacto sin simulacion de envio: requiere backend seguro.
- Prueba Vitest de contenido, navegacion y exclusion de casos restringidos.

## Verificacion posterior

- `npm.cmd audit --json` reporta 7 vulnerabilidades transitivas de desarrollo dentro de Tailwind CSS 3.4: 5 altas y 2 moderadas.
- El reporte indica `fixAvailable: false` para todas. No se ejecuto `npm audit fix`, `--force` ni una actualizacion ciega.
- El servidor Vite local inicio correctamente.
- Las nueve rutas respondieron HTTP 200 desde el servidor local.
- No hay navegador visual disponible en este entorno; no se pudo confirmar visualmente responsive, tema claro/oscuro ni interacciones.

## Fase SEO y accesibilidad

- SEO centralizado por ruta en `src/config/seo.ts` y aplicado desde `src/components/Seo.tsx`.
- Cada ruta tiene title, description, canonical, Open Graph y Twitter Card.
- `/privacy` usa `noindex, nofollow` y no aparece en `public/sitemap.xml`.
- `public/robots.txt` permite el sitio publico, bloquea `/privacy` y referencia el sitemap.
- Se reforzo el foco visible global con `:focus-visible`.
- Se conservaron skip link, `main`, navegacion etiquetada, `aria-expanded` en menu movil, `h1` unico por pagina y `prefers-reduced-motion`.
- Se agrego prueba automatizada para unicidad de metadatos y exclusion de privacidad.
- No se pudo hacer auditoria visual de contraste, responsive, tema o teclado porque no hay navegador disponible.

## Preparacion de revision visual y migracion Tailwind

- Inicio local: `npm.cmd run dev -- --host 127.0.0.1`.
- URL local: `http://127.0.0.1:5173/`.
- Revision visual no realizada: el entorno no dispone de navegador.
- Se corrigio el tema persistido al cargar y el cierre del menu movil con `Escape`.
- El menu movil ahora expone `aria-controls="primary-navigation"` y mantiene `aria-expanded`.
- `npm ls` confirma Tailwind `3.4.17` y el arbol afectado: `chokidar 3.6.0`, `braces 3.0.3`, `fast-glob 3.3.3`, `micromatch 4.0.8`, `postcss-nested 6.2.0` y `postcss-selector-parser 6.1.5`.
- `@tailwindcss/postcss 4.3.3` esta instalado pero no se usa con Tailwind 3; no se cambio.
- Migracion propuesta, no ejecutada: Tailwind 4 requiere plugin PostCSS/Vite, `@import "tailwindcss"` y revisar directives, `@apply`, `@layer`, config JS y navegadores.

## Migracion Tailwind 4 completada

## Reconstruccion visual inicial de la home (2026-10-22)

### Ajuste de experiencia y geometria del hero (2026-10-22)

### Restauracion literal de contenido y ajuste prudente de experiencia (2026-10-22)

### Comparacion con capturas verificadas (2026-10-22)

### Ajustes puntuales solicitados (2026-10-22)

### Diagnostico PC posterior (2026-10-22)

### Primera ronda visual automatizada (2026-10-23)

### Segunda ronda visual: geometria y navegacion (2026-10-23)

### Tercera ronda: conexiones de la geometria (2026-10-23)

## Reorganizacion estructural basada en auditoria (2026-10-31)

- La home ahora sigue las anclas verificadas `inicio`, `perfil`, `trayectoria`, `capacidades`, `inteligencia-artificial` y `contacto`.
- Se recupero el perfil `Ingeniería de software con una mirada integral.` y sus siete areas de trabajo documentadas.
- Las capacidades se organizan en nueve grupos: Frontend, Backend & APIs, Languages, Databases, Infrastructure, DevOps / CI/CD, Security, Automation y Artificial Intelligence.
- Se conservaron las cuatro experiencias existentes, el formulario funcional y el contenido de aprendizaje/contacto aprobado.
- El footer ahora incluye Inicio, Privacidad y LinkedIn aprobado, además del control de consentimiento.
- No se publicaron casos de estudio RBAC/Kubernetes ni se modificaron backend, Resend, GTM o consentimiento.
- Los archivos de auditoria indicados no estaban presentes físicamente al iniciar esta sesión; se usaron los datos verificables registrados en el contexto de auditoria previo. Esto queda pendiente de reconciliar si se restaura el inventario original.

- Se ajustaron únicamente las relaciones espaciales de `.hero-art`: nodos exteriores, nodos centrales y longitudes de las conexiones discontinuas.
- Se eliminaron las conexiones verticales que formaban una cruz y se añadieron segmentos horizontales entre cada nodo exterior y su nodo central correspondiente.
- Se mantuvieron los anillos, círculos translúcidos, escala y ocultación móvil.
- Nueva captura local generada y comparada con la original a 1440x900.
- Persisten diferencias finas de ángulo, opacidad y posición exacta; no se declara coincidencia pixel-perfect.

- La figura del hero ahora usa dos círculos concéntricos adicionales mediante pseudo-elementos, dos círculos translúcidos superpuestos y nodos redistribuidos; no tiene panel de fondo.
- Las conexiones permanecen finas y discontinuas.
- La navegación de escritorio ahora muestra `Cambiar tema` y usa un CTA azul independiente (`header-cta`), sin alterar los botones globales.
- Capturas nuevas Playwright generadas a 1440x900 y 390x844; ambas URLs respondieron HTTP 200.
- La comparación visual confirma mejora, pero la posición exacta de nodos y conexiones aún no coincide por completo con la referencia. El consentimiento sigue visible solo en local.

- Se regeneraron capturas Playwright a 1440x900 y 390x844 para original y local.
- Mejorado: la marca local ahora muestra `Jonny Beltran`; en móvil se muestran `Cambiar tema` y `Menú`; la figura ya no tiene panel cuadrado azul y se oculta en móvil.
- Persisten: la geometría local no reproduce todavía los círculos translúcidos superpuestos y los nodos centrales de la original.
- Persiste el aviso de consentimiento en local y no en la captura original; se conserva sin cambiar su lógica.
- Persisten diferencias de navegación/CTA de escritorio. No se ocultaron secciones por la ausencia de contenido posterior en la captura original.

- No fue posible abrir la aplicación en un navegador visual desde esta sesión; no se declara comparación de escritorio verificada.
- Inspección de código: las conexiones del hero estaban implementadas como líneas sólidas y la figura tenía `max-w-[26rem]`.
- Corrección aplicada únicamente en `src/styles.css`: conexiones discontinuas azules y `max-w-[24rem]` para aproximar la escala de la captura.
- No se cambiaron contenedor, contenido, menú, backend, Resend, GTM ni consentimiento.

- Hero: ajustados proporciones, separación y escala responsive sin sustituir la figura azul de círculos, nodos y conexiones discontinuas.
- Correo: el CTA de la home usa la clase exclusiva `email-button`, conserva `mailto:jhonybel17@gmail.com` y no altera los botones globales.
- Menú: se eliminó el posicionamiento absoluto del menú principal y del submenú `Más`; al abrirse ahora ocupan flujo normal y desplazan el contenido.
- No se modificaron funcionalidades, contenido profesional, backend, Resend, GTM ni consentimiento.

- Las capturas verificaron que el hero usa el statement `Construyendo software. Resolviendo problemas. Evolucionando con la tecnología.`, el rol `Ingeniero de Sistemas · Desarrollador de Software`, una descripción larga del perfil y los CTAs `Ver mi trayectoria` y `Contactarme`.
- La figura azul observada contiene círculos concéntricos, nodos circulares y conexiones discontinuas; se mantuvo como CSS y se ajustó su tratamiento sin introducir animación.
- La trayectoria observada usa una línea vertical, puntos azules y cuatro tarjetas: Accenture Colombia, Viajo Diferente y dos etapas de NEC de Colombia. La home y `/experience` ahora reproducen esa estructura y el texto aprobado.
- El bloque de aprendizaje observado usa `Una nueva etapa de evolución profesional.` y el párrafo sobre la Especialización en Inteligencia Artificial en UNIR; se restauró literalmente.
- La comparación se hizo con las capturas proporcionadas; no se validaron todos los tamaños responsive en un navegador automatizado. Backend, Resend, consentimiento y GTM no fueron modificados.

- Se restauraron desde la referencia publicada el nombre del hero, su descripción completa, los dos párrafos de `Sobre mí`, el título y descripción de `Tecnologías`, el CTA `Trabajemos juntos` y el texto de contacto visible.
- Se conservaron los periodos publicados `Desarollador Semi Senior 2024 — Presente` y `Junior Developer 2022 — 2024` sin inventar su relación con empresas.
- Las descripciones de Accenture Colombia, Viajo Diferente y NEC de Colombia siguen proviniendo únicamente de la información profesional aprobada.
- La experiencia dejó de usar tarjetas blancas con sombra y pasó a una lista editorial con bordes sutiles y una fila separada para periodos.
- No existe evidencia visual comprobada en este entorno para afirmar que el espaciado, tamaños y alineación coinciden exactamente con las capturas; queda pendiente la validación en navegador.

- Se sustituyo la experiencia genérica por tarjetas para Accenture Colombia, Viajo Diferente y NEC de Colombia, usando únicamente las descripciones aprobadas.
- Se conservó el orden documentado; no se añadieron fechas para empresas porque no están verificadas.
- El hero conserva una geometría CSS de círculos concéntricos, nodos y conexiones finas azules, sin animación ni recurso externo.
- El texto del hero se alineó con la presentación publicada recuperada; no se añadió contenido profesional nuevo.
- TypeScript, build y tests pasan. La comparación visual contra capturas sigue pendiente porque no hay navegador disponible.

- Se implemento la primera etapa sobre la base existente, sin cambiar la arquitectura.
- La home ahora contiene hero con CTA de CV/contacto, perfil, trayectoria en linea de tiempo, tecnologias en tarjetas, aprendizaje actual y CTA de contacto.
- Se conservaron formulario, LinkedIn, consentimiento, GTM y backend Resend.
- RBAC y Kubernetes no se muestran como proyectos; solo aparecen como tecnologias ya documentadas.
- Se añadieron estilos responsive para contenedor, ilustracion geometrica azul, tarjetas, timeline y CTA.
- No se pudo hacer comparacion visual directa porque este entorno no dispone de navegador; la fidelidad respecto a las capturas queda pendiente.

## Diagnostico de fidelidad con el sitio publicado (2026-10-22)

Fuente principal: `https://jbeltra99.com/`. La inspeccion disponible recupero el HTML de la home, pero no permitio inspeccion visual ni abrir de forma verificable las rutas secundarias, `robots.txt`, `sitemap.xml`, el CV o enlaces externos.

### Evidencia original verificable

- La home muestra `Jbeltra99`, `Software Engineer`, `Jonny Beltran`, un hero sobre arquitecturas modernas, plataformas cloud y sistemas distribuidos, y los CTAs `Descargar CV` y `Contactar`.
- El orden recuperado es: imagen/hero, `Sobre mí`, experiencia (`Desarollador Semi Senior 2024 — Presente` y `Junior Developer 2022 — 2024`), `Proyectos recientes`, `Tecnologías` y `Trabajemos juntos`.
- Tecnologías visibles: Node.js, Angular, TypeScript, React, Laravel, SQL Server, Docker y Kubernetes.
- Proyectos visibles: `RBAC Authorization System` y `Kubernetes Environment Provisioning`, con sus descripciones publicadas. Permanecen sin publicarse localmente hasta autorización.
- Contacto visible: `jhonybel17@gmail.com` y LinkedIn; el CV apunta a `/cv/jonny-beltran-cv.pdf`, pero no pudo recuperarse.

### Diseno: verificado y no verificable

- Verificable: home única con secciones de perfil, experiencia, proyectos, tecnologías y contacto; una imagen con alt `Jonny Beltran` y dos imágenes de proyectos.
- No verificable: colores, tipografía, tamaños, grid, anchos, espaciados, radios, sombras, dimensiones de imágenes, estados hover/focus, menú móvil, breakpoints, tema, animaciones y responsive. No se reconstruirán por conjetura.

### Diferencias frente a local y recursos

- `src/pages/Pages.tsx` usa textos del brief, una tarjeta técnica y copias distintas de hero, `Sobre mí`, experiencia, tecnologías y contacto.
- `src/components/Layout.tsx` implementa navegación multipágina, selector de tema, menú “Más” y CTA propio; no se pudo verificar que esas estructuras existan en la publicación.
- Las rutas locales adicionales no pudieron confirmarse en el sitio publicado. `public/` local no contiene imágenes ni CV equivalentes; sí contiene `robots.txt` y `sitemap.xml`, sin prueba de paridad.
- El sitio publicado solo permitió verificar un enlace de correo, no formulario ni comportamiento. Backend/Resend, consentimiento y GTM no se modifican.
- El contenido legal publicado no pudo recuperarse; no se inventará.

### Plan priorizado

1. Obtener referencia visual, HTML o activos autorizados.
2. Ajustar la home y componentes a la estructura y textos verificables, manteniendo React + Vite + TypeScript + Tailwind 4.
3. Incorporar recursos originales confirmados y reproducir responsive, navegación, tarjetas y estados visuales con evidencia.
4. Resolver rutas secundarias con el propietario; mantener RBAC/Kubernetes ocultos hasta autorización.
5. Revisar SEO, accesibilidad y enlaces después de la paridad visual.

No se modifico codigo, dependencias, backend, GTM ni despliegue.

- Verificada primero la guia oficial de upgrade, instalacion con Vite y compatibilidad.
- Actualizado `tailwindcss` de `3.4.17` a `4.3.3` y añadido `@tailwindcss/vite` `4.3.3`.
- `vite.config.ts` usa el plugin oficial `tailwindcss()` junto a React.
- `postcss.config.js`, `@tailwindcss/postcss`, `postcss` y `autoprefixer` ya no son necesarios para esta ruta y fueron retirados.
- `src/styles.css` usa `@import "tailwindcss"` y `@config "../tailwind.config.js"` para conservar colores y `darkMode: 'class'`.
- Se revisaron los usos existentes: un bloque `@layer base`, uno `@layer components`, uno `@layer utilities` y las reglas `@apply` permanecen compatibles porque el build los procesó correctamente.
- El diseño, React, Vite, TypeScript, backend, Resend, GTM y consentimiento no fueron modificados.
- `npm audit` posterior reporta 0 vulnerabilidades; las 7 alertas anteriores de Tailwind 3.4 quedaron corregidas al reemplazar su arbol de dependencias.
- Tailwind 4 requiere navegadores modernos: Safari 16.4+, Chrome 111+ y Firefox 128+. No se hizo revisión visual en este entorno.
- Referencias oficiales: [Upgrade guide](https://tailwindcss.com/docs/upgrade-guide), [Vite installation](https://tailwindcss.com/docs/installation/using-vite), [Compatibility](https://tailwindcss.com/docs/compatibility).

## Consentimiento y Google Tag Manager

- Integracion preparada para el contenedor `GTM-W7MZBWTP`; no se carga antes del consentimiento concedido.
- No existia integracion previa de GTM, `dataLayer` ni consentimiento; se comprobo antes de añadirla.
- La eleccion se guarda en `localStorage` bajo `jbeltra99.analytics-consent`, con estado inicial denegado.
- La interfaz permite aceptar, rechazar, abrir preferencias desde el footer y cambiar la decision posteriormente.
- La revocacion actualiza el estado a denegado y bloquea futuros eventos; el script ya cargado no se simula como eliminado.
- El puente SPA emite `page_view` una vez por cambio de ruta solo cuando el consentimiento es `granted`.
- `trackEvent` bloquea eventos cuando el consentimiento es `denied`; los parametros implementados no contienen PII.
- El `dataLayer` solo usa nombres de evento, estado de consentimiento y ruta de pagina.
- No se han verificado eventos en GTM Preview ni GA4 DebugView y no se han publicado cambios en el contenedor.
- Contacto no tiene backend ni formulario activo; no se envian mensajes, correos ni datos personales.

## Backend de contacto

## Preparacion de validacion local de Resend

- El backend lee `RESEND_API_KEY`, `CONTACT_EMAIL_TO` y `CONTACT_EMAIL_FROM` desde `process.env`.
- Desarrollo local: copiar `.env.example` a `.env`, reemplazar localmente los tres valores y ejecutar `npm.cmd run build` seguido de `npm.cmd run start:server:local`. Nunca pegar valores en el chat ni imprimirlos.
- `start:server:local` usa Node `--env-file=.env`; Vite no recibe ni expone estas variables.
- El arranque falla sin enviar correo si falta una variable esencial o el destinatario/origen es inválido; solo informa nombres de variables.
- `.env.example` contiene valores ficticios. `.env` y `.env.*` están excluidos por `.gitignore`, salvo `.env.example`.
- El workspace no contiene `.env` ni metadatos Git; la exclusión se verificó en las reglas de `.gitignore`, no mediante un índice Git local.
- Antes de enviar con Resend debe existir API key válida, dominio remitente verificado con sus registros DNS y un destinatario controlado por el propietario. `CONTACT_EMAIL_FROM` debe usar el dominio verificado.
- No se realizó envío ni se comprobaron credenciales reales.

## Procedimiento de prueba manual local

1. Crear `.env` local desde `.env.example` y completar las tres variables de Resend sin compartirlas.
2. Compilar: `npm.cmd run build`.
3. Terminal backend: `npm.cmd run start:server:local` → puerto `8787`.
4. Terminal frontend: `npm.cmd run dev -- --host 127.0.0.1` → URL `http://127.0.0.1:5173/`.
5. Abrir `http://127.0.0.1:5173/contact`; Vite proxifica `/api/contact` hacia `http://127.0.0.1:8787/api/contact`.

Comprobación segura sin correo: enviar una petición deliberadamente inválida o sin `Origin` y verificar `403`/`400`; no usar datos reales ni un payload válido para esta comprobación. No imprimir el body completo ni variables de entorno.

Prueba única de envío: usar una sola vez el formulario con un nombre de prueba, un correo controlado por el propietario, un asunto identificable y un mensaje no sensible. `200` con `{ ok: true }` significa que el backend recibió aceptación HTTP de Resend; no significa entrega en bandeja. La aceptación se contrasta en el panel/logs de Resend y la entrega en el buzón del destinatario. `400` indica validación, `403` origen, `415` Content-Type, `429` rate limit y `503` configuración/proveedor; ningún otro resultado debe mostrarse como éxito.
- La API key local debe tener solo permiso de envío y, si está disponible, limitarse al dominio remitente; Resend documenta estos permisos en su información oficial de API keys.
- Resend requiere crear una API key y verificar el dominio remitente antes de enviar; la verificación depende de los registros DNS mostrados en el panel. [Resend: API key permissions](https://resend.com/changelog/new-api-key-permissions) y [Resend: domain verification](https://resend.com/changelog/domain-verification-events).

## Preparacion de validacion local de Resend

- El backend lee `RESEND_API_KEY`, `CONTACT_EMAIL_TO` y `CONTACT_EMAIL_FROM` desde `process.env`.
- Desarrollo local: copiar `.env.example` a `.env`, reemplazar localmente los tres valores y ejecutar `npm.cmd run build` seguido de `npm.cmd run start:server:local`. Nunca pegar valores en el chat ni imprimirlos.
- `start:server:local` usa Node `--env-file=.env`; Vite no recibe ni expone estas variables.
- El arranque falla sin enviar correo si falta una variable esencial o el destinatario/origen es inválido; solo informa nombres de variables.
- `.env.example` contiene valores ficticios. `.env` y `.env.*` están excluidos por `.gitignore`, salvo `.env.example`.
- El workspace no contiene `.env` ni metadatos Git; la exclusión se verificó en las reglas de `.gitignore`, no mediante un índice Git local.
- Antes de enviar con Resend debe existir API key válida, dominio remitente verificado con sus registros DNS y un destinatario controlado por el propietario. `CONTACT_EMAIL_FROM` debe usar el dominio verificado.
- No se realizó envío ni se comprobaron credenciales reales.

## Auditoria de seguridad del backend

- Bajo: el origen se compara por igualdad exacta con `CONTACT_ALLOWED_ORIGIN`; no se aceptan comodines ni se confia en `Referer`. Las peticiones sin `Origin` quedan rechazadas.
- Mitigado: la IP usada para rate limiting es `socket.remoteAddress`; no se acepta `X-Forwarded-For`, evitando spoofing directo. Detras de un reverse proxy debe configurarse una capa confiable que preserve una IP verificable.
- Mitigado: el rate limiter limpia entradas expiradas y tiene limite de claves; sigue siendo en memoria, por proceso y no distribuido.
- Mitigado: el backend limita JSON a 12 KB, valida Content-Type, longitudes, formato de correo, honeypot y tiempo minimo; responde errores genericos sin logs de PII.
- Mitigado: las respuestas JSON incluyen `nosniff`, `DENY`, `no-referrer`, Permissions Policy restrictiva, CSP sin recursos y `no-store`.
- Mitigado: errores de red de Resend producen fallo controlado y nunca exito falso; no se expone el error del proveedor.
- Confirmado: las claves solo se leen de `process.env`; el cliente no conoce `RESEND_API_KEY` ni variables `VITE_*` de correo.
- Confirmado: el cliente muestra exito unicamente con `response.ok`; los eventos de contacto en `dataLayer` solo contienen el nombre del evento.
- Audit npm: 7 vulnerabilidades de desarrollo en Tailwind 3.4, 5 altas y 2 moderadas, con `fixAvailable: false`; no se actualizaron dependencias.

- Arquitectura elegida: servidor Node.js/TypeScript separado en `server/`, usando `node:http` y `fetch` nativo; Vite hace proxy local de `/api` a `127.0.0.1:8787`.
- El servidor valida origen, `Content-Type`, tamaño máximo, nombre, correo, asunto, mensaje, honeypot y tiempo mínimo.
- Se aplica rate limiting en memoria por IP. No es distribuido ni persistente; para producción con varias instancias deberá sustituirse por un almacén compartido.
- Resend se invoca únicamente desde el servidor con `RESEND_API_KEY`, `CONTACT_EMAIL_TO` y `CONTACT_EMAIL_FROM`.
- Si faltan variables o Resend responde con error, se devuelve error genérico y no éxito falso.
- No se registran nombres, correos, mensajes ni secretos.
- El frontend valida lo básico, muestra estados de carga, éxito confirmado por el servidor y error, y no manda datos del formulario a `dataLayer`.
- Variables documentadas en `.env.example`; `.env` y secretos están excluidos por `.gitignore`.
- No se ha probado un envío real: requiere credenciales y autorización del propietario.

## Fase 2: contacto y footer (2026-10-31)

- Se ajusto visualmente el formulario real existente con una tarjeta, bordes y campos coherentes con la referencia.
- Se conservaron el endpoint `/api/contact`, las validaciones, estados de envio, Resend, consentimiento y eventos sin datos personales.
- El footer conserva Inicio, Privacidad, LinkedIn y el control de consentimiento, con espaciado visual ajustado.
- Playwright genero capturas de `/contact` en `C:\Users\jbelt\AppData\Local\Temp\portfolio-visual-check\phase-2`; no se implementa la Fase 3.

## Fase 3: perfil, capacidades y tipografia (2026-10-31)

- Se ajusto unicamente `src/styles.css`: la composicion del perfil conserva dos columnas, con una separacion mas equilibrada y lista de areas mas legible.
- Las nueve categorias de capacidades conservan sus textos y ahora muestran tecnologias como etiquetas agrupadas dentro de tarjetas con jerarquia consistente.
- Se afino la jerarquia de titulos y el interlineado de secciones sin alterar contenido, rutas ni arquitectura.
- Playwright genero capturas locales completas y de `perfil`/`capacidades` en `C:\Users\jbelt\AppData\Local\Temp\portfolio-visual-check\phase-3` para 1440x900 y 390x844.
- TypeScript, build y tests pasaron; no se modificaron backend, formulario, Resend, GTM ni consentimiento.

## Fase 4: coherencia, privacidad y navegación (2026-10-31)

- `/privacy` ya contiene un borrador en español basado únicamente en tratamientos comprobados: formulario, backend, Resend condicionado a configuración, GTM/analítica con consentimiento y almacenamiento local. Responsable, contacto, conservación, encargados y canal de derechos quedan explícitamente pendientes de confirmación; la ruta conserva `noindex, nofollow`.
- El CTA final de la Home ahora dirige al formulario real `/contact` con el texto `Contactarme`.
- Se añadió JSON-LD `Person` con nombre, cargo, URL del sitio y LinkedIn aprobado. No se añadió `og:image` ni `twitter:image` porque no existe un recurso social confirmado.
- No se modificaron backend, Resend, GTM, consentimiento, rutas ni dependencias.

## Fase 5: unificación de páginas internas y navegación (2026-10-31)

- Las páginas internas ahora usan `Section` con clases compartidas `page-section`, `page-content`, `page-title` y `page-body`, manteniendo cada propósito y contenido propio.
- Se corrigio el error ortografico visible `Desarollador` a `Desarrollador` en la vista de trayectoria; no se añadieron datos profesionales.
- Se conservaron las nueve rutas, el formulario, la política `noindex`, los enlaces de navegación y el CTA de contacto hacia `/contact`.
- Playwright verifico las nueve rutas en 1440x900, 768x1024 y 390x844, sin overflow horizontal, errores de consola ni solicitudes fallidas.
- Capturas completas guardadas en `C:\Users\jbelt\AppData\Local\Temp\portfolio-visual-check\phase-5`.

## Corrección definitiva de referencia (2026-10-31)

### Ajuste visual acotado de páginas internas (2026-10-31)

- Se ajustaron exclusivamente `/about`, `/experience` y `/artificial-intelligence` con un contenedor interno de 1088px, cabecera específica de 65px y separación vertical/divisores según las capturas publicadas.
- La tarjeta de Inteligencia Artificial quedó en una sola columna, conservando la formación actual en UNIR y sin atribuir experiencia profesional en IA.
- No se modificaron Home, contacto, backend, Resend, GTM, consentimiento, rutas ni dependencias.

### Persistencia de contacto y auditoría GTM (2026-10-31)

- El backend ahora persiste mensajes válidos en un archivo JSON configurable mediante `CONTACT_STORAGE_FILE` (por defecto `data/contact-messages.json`), con escritura atómica, permisos restrictivos, huella para deduplicación y estado `emailSent`.
- El registro se conserva si Resend falla; el endpoint responde `202` con `notification: pending`. Con correo aceptado por Resend responde `200` y marca el registro como enviado.
- No se enviaron correos reales. La integración GTM usa `GTM-W7MZBWTP` y respeta consentimiento; la verificación local confirmó carga única y `page_view` SPA, pero no confirma recepción en Preview/Tag Assistant.
- Los eventos `navigation_click`, `scroll_depth`, `project_view`, `project_filter_used`, `cv_download` y `external_link_click` no están implementados o no tienen elementos aplicables actualmente; requieren decisión/implementación posterior sin inventar proyectos o CV.

### Preparación PostgreSQL (2026-10-31)

- Añadidos `pg`, `@types/pg`, `server/postgres.ts` y `migrations/001_contact_messages.sql`.
- El servidor usa PostgreSQL cuando existe `DATABASE_URL` y conserva JSON como fallback hasta validar la conexión real.
- La operación de inserción usa transacción, `ON CONFLICT` sobre `dedupe_hash`, consultas parametrizadas y actualización separada del estado de correo.
- No se pudo ejecutar inserción/recuperación real porque no hay `DATABASE_URL` ni acceso autorizado al VPS.
- GTM local fue comprobado con consentimiento y carga única; la recepción remota y Preview siguen sin evidencia.

- Añadidos eventos consentidos `navigation_click`, `scroll_depth`, `contact_form_start` y `external_link_click`; no se añadieron eventos de proyectos/CV porque esas funcionalidades no existen actualmente.

### Simplificación final del contacto (2026-10-31)

- PostgreSQL, JSON y sus variables fueron retirados del funcionamiento del formulario.
- `/api/contact` valida, limita y envía directamente mediante Resend a `CONTACT_EMAIL_TO`; ante fallo devuelve `503` y no muestra éxito.
- Variables de contacto vigentes: `RESEND_API_KEY`, `CONTACT_EMAIL_TO`, `CONTACT_EMAIL_FROM` y `CONTACT_ALLOWED_ORIGIN`.

- El menú principal conserva Inicio, Sobre mí, Experiencia, Inteligencia Artificial, Cambiar tema y Contactarme; se retiraron Trayectoria y Más del menú sin eliminar sus rutas.
- `/about` usa Perfil, Sobre Jonny Beltran y tres tarjetas de información confirmada.
- `/experience` presenta las cuatro experiencias confirmadas en una cuadrícula de dos columnas.
- `/artificial-intelligence` presenta la formación actual en UNIR sin atribuir experiencia profesional en IA.
- `/contact` conserva el formulario real, añade la estructura de dos columnas en escritorio, mínimo de 20 caracteres y consentimiento con enlace a privacidad; no se modificó el backend.

## Corrección final de navegación y páginas internas (2026-10-31)

- Corregidos los CTA del hero: `Ver mi trayectoria` navega a `/career-journey` y `Contactarme` a `/contact` mediante React Router.
- Se preservaron los cuatro enlaces del menú aprobado y se comprobó su funcionamiento con teclado y ratón.
- La vista de Inteligencia Artificial usa una tarjeta de una sola columna, más próxima a la referencia, sin cambiar su contenido de formación actual.
- No se modificaron backend, formulario, Resend, GTM, consentimiento, SEO ni privacidad.

## Ajuste final de Experiencia por referencia visual (2026-10-31)

- `/experience` ahora refleja la estructura observada: cuatro tarjetas en dos columnas, responsabilidades visibles, etiquetas tecnológicas y marca `Actual` para NEC Semi Senior.
- Se eliminaron los marcadores heredados de la línea de tiempo y se ajustaron ancho, tipografía y espaciado de las tarjetas.
- Se conservaron únicamente datos presentes en la referencia proporcionada y en la información profesional aprobada.

- Se redujo el ancho máximo de las páginas internas a 1440px centrados, evitando que la cuadrícula de Experiencia ocupe todo el viewport en monitores anchos.

## Fase 1: ajuste visual del hero (2026-10-31)

- Se modifico unicamente `src/styles.css`: ancho independiente del titulo, espaciado movil, escala de la figura y distribucion del hero.
- Se conservaron textos, CTA, geometria azul y ocultacion de la figura en movil.
- Playwright genero capturas en `C:\Users\jbelt\AppData\Local\Temp\portfolio-visual-check\phase-1` a 1440x900 y 390x844. Original y local respondieron HTTP 200; el consentimiento estuvo ausente en original y visible en local.
- TypeScript, build y tests pasaron. No se modificaron backend, formulario, Resend, GTM, consentimiento, rutas ni contenido. Las fases 2 y 3 siguen pendientes.

