# PROGRESS

## Estado actual

- Fase: 2 — Base React.
- Estado: base implementada y verificada.
- No hay backend, analytics, SEO avanzado ni despliegue.

## Completado

- Base React + Vite + TypeScript estricto + React Router + Tailwind CSS 3.4.
- Layout reutilizable, navegacion responsive, menu Más, footer, skip link, foco visible y tema claro/oscuro.
- Rutas: `/`, `/about`, `/career-journey`, `/experience`, `/artificial-intelligence`, `/education`, `/skills`, `/contact` y `/privacy`.
- Contenido centralizado y perfil aprobado priorizado.
- Casos RBAC/Kubernetes no publicados.
- Contacto sin simulacion de envio; queda preparado para backend seguro posterior.
- Test Vitest de identidad, navegacion y exclusion de casos restringidos.

## Comprobaciones reales

- `npm.cmd install`: completado; npm audit reporto 7 vulnerabilidades (2 moderate, 5 high). No se ejecuto `audit fix --force`.
- `npm.cmd run build`: exitoso.
- `npm.cmd test`: exitoso, 1 archivo y 2 tests.
- `npx.cmd tsc -b --pretty false`: exitoso.
- `npm.cmd run build`: exitoso despues de SEO, con 29 modulos transformados.
- `npm.cmd test`: exitoso, 1 archivo y 3 tests.
- `npm.cmd audit --json`: 7 vulnerabilidades transitivas de desarrollo dentro de Tailwind 3.4; 5 altas y 2 moderadas, todas sin correccion automatica disponible.
- `npm.cmd run dev -- --host 127.0.0.1`: servidor iniciado correctamente.
- Verificacion HTTP local: las nueve rutas respondieron 200.
- Revision visual: no ejecutada; no hay navegador visual disponible en el entorno.

## Pendientes

- Revisar UI en navegador contra una referencia visual disponible.
- Evaluar migracion controlada a una version de Tailwind sin estas alertas cuando exista tiempo para revisar compatibilidad; no aplicar `--force`.
- Metadata SEO por ruta, sitemap/robots y noindex de privacidad.
- Consentimiento y analytics sin PII.
- Backend seguro del formulario y sus pruebas.
- Pruebas de componentes, accesibilidad y E2E.
- Confirmar CV, fotografia, institucion del titulo tecnico y autorizacion de casos.

## Etapa SEO y accesibilidad completada

- Añadidos metadatos por ruta, canonical, Open Graph y Twitter.
- Añadidos `public/robots.txt` y `public/sitemap.xml` sin `/privacy`.
- Añadido foco visible global y prueba automatizada de SEO.
- Auditoria visual y pruebas E2E siguen pendientes por falta de navegador disponible.

## Preparacion visual y Tailwind completada

- Comando local: `npm.cmd run dev -- --host 127.0.0.1`.
- URL: `http://127.0.0.1:5173/`.
- Corregida aplicacion inicial del tema persistido.
- Corregido cierre del menu movil con `Escape` y añadido `aria-controls`.
- Audit revisado sin cambiar versiones: las 7 vulnerabilidades siguen sin `fixAvailable`.
- Investigada migracion Tailwind 3 a 4; requiere cambios de plugin, CSS y compatibilidad, pero no se implemento.
- No hubo revision visual por falta de navegador.

## Migracion Tailwind 4 completada

## Reconstruccion visual inicial de la home (2026-10-22)

## Ajuste de experiencia y geometria del hero (2026-10-22)

## Restauracion literal de contenido y ajuste prudente de experiencia (2026-10-22)

## Comparacion con capturas verificadas (2026-10-22)

## Tres ajustes puntuales (2026-10-22)

## Diagnostico PC posterior (2026-10-22)

## Primera ronda visual automatizada (2026-10-23)

## Segunda ronda visual: geometria y navegacion (2026-10-23)

## Tercera ronda: conexiones de la geometria (2026-10-23)

## Reorganizacion estructural basada en auditoria (2026-10-31)

- Reorganizada la home con las anclas `inicio`, `perfil`, `trayectoria`, `capacidades`, `inteligencia-artificial` y `contacto`.
- Añadido el perfil integral y sus areas de trabajo verificadas.
- Añadidos nueve grupos de capacidades con tecnologías documentadas; no se añadieron proyectos restringidos.
- Footer alineado con Inicio, Privacidad y LinkedIn, conservando el consentimiento.
- Playwright: original y local cargaron HTTP 200 en 1440x900 y 390x844; las seis anclas aparecieron en ambas.
- Consentimiento: ausente en original y visible en local; no se interactuó con él.
- Menú móvil: `aria-expanded` pasó a `true` al abrir y a `false` tras Escape.
- `npx.cmd tsc -b --pretty false`: exitoso.
- `npm.cmd run build`: exitoso.
- `npm.cmd test`: exitoso; 1 archivo y 7 tests.
- Capturas completas y por sección quedaron en `C:\Users\jbelt\AppData\Local\Temp\portfolio-visual-check\reference-audit`.

- Ajustados en `src/styles.css` los puntos relativos y longitudes de las conexiones del hero.
- Eliminada la cruz vertical/horizontal anterior; las conexiones ahora enlazan nodos exteriores con los centrales.
- Captura local regenerada a 1440x900 y comparada directamente con la original.
- Persisten diferencias de ángulo, opacidad y ubicación exacta; no hay coincidencia exacta.
- TypeScript, build y tests: exitosos; 7 tests.

- Ajustada la figura del hero con círculos translúcidos, anillos adicionales y nodos redistribuidos en `src/styles.css`.
- Ajustada la navegación de escritorio: etiqueta `Cambiar tema` y CTA azul aislado.
- Capturas regeneradas con Playwright en 1440x900 y 390x844; original y local cargaron con HTTP 200.
- Mejora visual confirmada, pero la geometría aún no coincide exactamente en posiciones/conexiones.
- El banner de consentimiento permanece visible en local y no se modificó.
- TypeScript, build y tests: exitosos; 7 tests.

- Capturas Playwright regeneradas y abiertas: original/local en escritorio 1440x900 y móvil 390x844.
- Mejoras confirmadas: marca `Jonny Beltran`, controles móviles `Cambiar tema`/`Menú`, eliminación del panel cuadrado del hero y ocultación móvil de la figura.
- Diferencia pendiente: la geometría local aún no reproduce los nodos centrales y círculos translúcidos superpuestos de la original.
- Diferencia de estado: consentimiento visible solo en local; no se aceptó ni rechazó.
- No se modificó la lógica de consentimiento ni se ocultaron secciones de contenido.

- No hay navegador visual disponible; la corrección no se declara visualmente verificada.
- Causa comprobable corregida en `src/styles.css`: conexiones del hero eran sólidas y la figura estaba limitada a `26rem`.
- Aplicadas conexiones `border-dashed` y escala máxima `24rem`.
- TypeScript, build y tests ejecutados correctamente.

- Hero: ajustados composición, espaciado y proporciones responsive; geometría azul conservada.
- Botón de correo: añadido estilo local de píldora azul y enlace `mailto:` funcional.
- Menú: eliminado `absolute` del menú móvil y del submenú `Más` para que el contenido posterior se desplace al abrirlos.
- TypeScript: exitoso.
- Build: exitoso.
- Tests: 7 exitosos.
- No hubo comprobación visual interactiva en navegador; se utilizaron las capturas adjuntas como referencia.

- Restaurado el hero del brief: eyebrow `Software Engineer / Software Developer`, statement completo, rol, descripción larga y botones `Ver mi trayectoria`/`Contactarme`.
- Ajustada la trayectoria a línea vertical con cuatro entradas, puntos azules y tarjetas de empresa/cargo/descripción según las capturas y contenido aprobado.
- Restaurado el texto visible del bloque `Aprendizaje actual`.
- Ajustada la geometría CSS para conservar círculos concéntricos, nodos y conexiones discontinuas azules.
- `npx.cmd tsc -b --pretty false`: exitoso.
- `npm.cmd run build`: exitoso.
- `npm.cmd test`: exitoso; 1 archivo y 7 tests.
- La referencia visual fue proporcionada mediante capturas; no se ejecutó una comparación automatizada de screenshots ni se verificaron todos los breakpoints en navegador.

- Restaurados los textos recuperables de la publicación: hero, `Sobre mí`, `Tecnologías`, `Trabajemos juntos`, descripción profesional y CTA con correo.
- Añadidos los dos periodos publicados sin asociarlos a una empresa sin evidencia.
- La experiencia pasó de tarjetas blancas con sombra a filas editoriales con bordes sutiles; se mantienen las tres descripciones aprobadas.
- `npx.cmd tsc -b --pretty false`: exitoso.
- `npm.cmd run build`: exitoso.
- `npm.cmd test`: exitoso; 1 archivo y 7 tests.
- No hubo comparación visual en navegador; la coincidencia exacta con capturas sigue pendiente.

- La sección de experiencia de la home y la ruta `/experience` ahora muestran Accenture Colombia, Viajo Diferente y NEC de Colombia con las descripciones aprobadas.
- No se inventaron fechas, responsabilidades adicionales ni logros.
- El hero usa círculos concéntricos, nodos circulares y conexiones finas azules en CSS; no se añadió animación ni imagen genérica.
- `npx.cmd tsc -b --pretty false`: exitoso.
- `npm.cmd run build`: exitoso.
- `npm.cmd test`: exitoso; 1 archivo y 7 tests.
- No hubo revisión visual con navegador.

Pendiente: comprobar escala, posición y correspondencia exacta de la geometría y tarjetas frente a las capturas en escritorio y móvil.

- Reemplazado el contenido genérico de `src/pages/Pages.tsx` por una home basada en la referencia documentada: hero, perfil, trayectoria, tecnologias, aprendizaje actual y contacto.
- Añadida ilustracion geometrica azul en CSS, tarjetas de tecnologia, linea de tiempo y layout responsive en `src/styles.css`.
- El CTA de CV conserva la ruta documentada; no se invento el contenido del PDF.
- El contacto sigue usando el formulario y backend existentes; no se añadieron simulaciones.
- No se publicaron RBAC/Kubernetes como proyectos.
- `npx.cmd tsc -b --pretty false`: exitoso.
- `npm.cmd run build`: exitoso; frontend y backend compilados.
- `npm.cmd test`: exitoso; 1 archivo y 7 tests.
- Revision visual: no realizada; no hay navegador disponible.

Pendiente: comparar manualmente escritorio y movil con las capturas verificadas y ajustar diferencias visuales concretas.

## Auditoria de fidelidad con jbeltra99.com (2026-10-22)

- Se comparo la implementacion local con la home publicada usando la URL oficial.
- Se verificaron hero, `Sobre mí`, dos periodos de experiencia, proyectos RBAC/Kubernetes, ocho tecnologías, contacto, LinkedIn y CV.
- La local no coincide en textos, estructura de home, CTA, contacto ni recursos; revisar `src/pages/Pages.tsx` y `src/components/Layout.tsx`.
- RBAC y Kubernetes siguen sin publicarse localmente por la restriccion de autorizacion.
- No fue posible verificar visualmente colores, tipografias, tamaños, espaciado, responsive, menú móvil, tema, imágenes, CV ni rutas secundarias.
- No se modifico codigo; backend/Resend, consentimiento y GTM permanecen intactos.

Siguiente paso: conseguir referencia visual/HTML/activos autorizados o navegador y ajustar primero la home; resolver rutas secundarias y autorización de proyectos.

- Verificada la documentación oficial antes de cambiar dependencias.
- Actualizados `tailwindcss` y `@tailwindcss/vite` a `4.3.3`.
- Cambiado el pipeline a plugin oficial de Vite.
- Cambiado CSS de `@tailwind` a `@import "tailwindcss"` y conservada configuración JS mediante `@config`.
- Retirados PostCSS/autoprefixer y el plugin PostCSS de Tailwind no usados en la ruta Vite.
- `npm.cmd install`: exitoso; eliminó el árbol vulnerable de Tailwind 3.
- `npm.cmd audit --json`: 0 vulnerabilidades.
- No se modificaron backend, Resend, GTM ni consentimiento.
- No hubo revisión visual; queda pendiente validar navegadores y responsive visualmente.

## Comprobaciones de migración

- `npx.cmd tsc -b --pretty false`: exitoso.
- `npm.cmd run build`: exitoso, frontend y backend.
- `npm.cmd test`: exitoso, 1 archivo y 7 tests.
- `npm.cmd audit --json`: exitoso, 0 vulnerabilidades.

## Comprobaciones de esta etapa

- `npx.cmd tsc -b --pretty false`: exitoso.
- `npm.cmd run build`: exitoso.
- `npm.cmd test`: exitoso, 1 archivo y 3 tests.

## Correccion puntual del menu movil

- Corregido cierre al cambiar de ruta mediante `useLocation`.
- Corregido cierre con `Escape` y conservado `aria-expanded`/`aria-controls`.
- Conservado el comportamiento de escritorio y sin dependencias nuevas.
- Añadida prueba de la regla de cierre con `Escape` en `tests/site.test.ts`.
- `npx.cmd tsc -b --pretty false`: exitoso.
- `npm.cmd run build`: exitoso.
- `npm.cmd test`: exitoso, 1 archivo y 4 tests.

## Consentimiento y GTM completados

- Revisada la base: no habia GTM, `dataLayer` ni consentimiento previo.
- Añadido consentimiento por defecto denegado para `GTM-W7MZBWTP`.
- Añadidos aceptar, rechazar y cambiar consentimiento desde el footer.
- Añadida persistencia en `localStorage` y sincronizacion entre pestañas.
- GTM se carga una sola vez y solo tras consentimiento concedido.
- Añadido `page_view` SPA condicionado al consentimiento, sin carga directa de GA4.
- Añadida barrera para impedir `trackEvent` sin permiso y sin PII.
- No se verifico recepcion en GTM Preview/DebugView y no se modifico el contenedor remoto.

## Comprobaciones de esta etapa

- `npx.cmd tsc -b --pretty false`: exitoso.
- `npm.cmd run build`: exitoso, 33 modulos transformados.
- `npm.cmd test`: exitoso, 1 archivo y 5 tests.

## Correccion del rechazo de analitica

- Causa reproducida: `ConsentControls` mostraba el banner siempre que `consent === 'denied'`, incluso despues de guardar un rechazo explicito.
- Correccion minima: se separo `bannerVisible` de `consent`; la decision persistida `denied` ya no reabre el banner automaticamente.
- El footer sigue abriendo las preferencias para cambiar la decision.
- La sincronizacion entre pestañas oculta el banner cuando recibe una decision persistida y no concede analitica tras un rechazo.
- Añadida `hasConsentDecision` y pruebas de ausencia de decision, persistencia de `denied` y bloqueo de eventos.

## Comprobaciones de esta correccion

- `npx.cmd tsc -b --pretty false`: exitoso.
- `npm.cmd run build`: exitoso.
- `npm.cmd test`: exitoso, 1 archivo y 6 tests.

## Backend y formulario de contacto completados

- Revisado el placeholder existente y la arquitectura frontend-only.
- Añadido backend Node/TypeScript separado sin Next.js ni dependencias de servidor adicionales.
- Añadido proxy Vite local `/api` → `http://127.0.0.1:8787`.
- Añadido formulario accesible con validación cliente, estados de carga/éxito/error y prevención de doble envío mediante estado disabled.
- Añadida validación server-side, honeypot, tiempo mínimo, límites de longitud/tamaño, origen permitido y rate limit por IP.
- Añadido envío Resend server-side con variables documentadas en `.env.example`.
- Añadidas pruebas con mock de Resend para validación, honeypot, tiempo mínimo, rate limiting y envío.
- `npx.cmd tsc -b --pretty false`: exitoso.
- `npm.cmd run build`: exitoso; incluye build de frontend y backend.
- `npm.cmd test`: exitoso, 1 archivo y 7 tests.

## Pendientes reales

## Auditoria de seguridad completada

## Preparacion local de Resend

- Verificado que el backend usa `process.env` y no variables `VITE_*`.
- Añadido `start:server:local`: `node --env-file=.env dist-server/server.js`.
- Añadida validación de configuración para las tres variables Resend, destinatario, origen y formatos básicos.
- Con `.env` ausente, el backend termina sin iniciar ni enviar y solo informa nombres de variables.
- `.env.example` contiene valores ficticios; `.env` está excluido por `.gitignore` y no existe en el workspace.
- No se solicitaron, imprimieron ni usaron secretos.
- Documentado requisito previo de Resend: API key válida, dominio/remitente verificado y DNS configurado.
- `npx.cmd tsc -b --pretty false`: exitoso.
- `npm.cmd run build`: exitoso, frontend y backend.
- `npm.cmd test`: exitoso, 1 archivo y 7 tests.
- `npm.cmd audit --json`: ejecutado; código 1 por 7 vulnerabilidades existentes de Tailwind 3.4.

## Requisitos externos documentados

- Resend: API key con permiso mínimo de envío, idealmente restringida al dominio remitente.
- Dominio remitente verificado en Resend con los registros DNS solicitados antes de probar el envío.
- No se enviaron correos ni se solicitaron credenciales.

## Preparacion de prueba manual E2E

- Frontend: `npm.cmd run dev -- --host 127.0.0.1`, URL `http://127.0.0.1:5173/`.
- Backend: `npm.cmd run start:server:local`, puerto `8787`.
- Proxy: Vite reenvia `/api` a `http://127.0.0.1:8787`.
- El formulario solo muestra exito cuando `response.ok` es verdadero; el backend solo responde `ok: true` despues de que Resend responda exitosamente.
- Documentada comprobacion segura con payload invalido/origen ausente y una unica prueba real manual posterior.
- Diferenciadas respuestas de validacion, origen, tipo de contenido, rate limit, proveedor y aceptacion de Resend.
- No se inicio ningun servidor con secretos, no se enviaron correos y no se solicitaron credenciales.

- Revisada validacion de origen: igualdad exacta, sin comodines ni confianza en `X-Forwarded-For`.
- Revisado rate limiting: se mantuvo en memoria, pero ahora limpia expirados y limita el numero de claves.
- Corregidos errores de red de Resend: devuelven fallo controlado y no exito falso.
- Añadidas cabeceras JSON: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, CSP restrictiva y `Cache-Control: no-store`.
- Confirmado que no hay logs de PII, secretos en frontend ni PII en GTM/GA4.
- Añadidas pruebas de fallo de Resend y limite de claves del rate limiter.

## Hallazgos pendientes

- El rate limiter no sirve para multiples instancias o proxies sin una capa compartida.
- No se probaron credenciales reales ni envio real.
- `npm.cmd audit --json` termino con codigo 1 por las mismas 7 vulnerabilidades de Tailwind 3.4; no hay correccion automatica y no se uso `--force`.

## Comprobaciones de auditoria

- `npx.cmd tsc -b --pretty false`: exitoso.
- `npm.cmd run build`: exitoso, frontend y backend.
- `npm.cmd test`: exitoso, 1 archivo y 7 tests.
- `npm.cmd audit --json`: ejecutado; resultado no cero por 7 vulnerabilidades conocidas.

- Configurar variables reales en el entorno del backend.
- Probar un envío real con autorización y credenciales válidas.
- Sustituir rate limit en memoria si se despliega en múltiples instancias.
- Añadir reCAPTCHA server-side cuando se defina la credencial y requisito final.

## Fase 1: ajuste visual del hero (2026-10-31)

- Modificado solo `src/styles.css`: ancho independiente del titulo, espaciado movil, escala de la figura y distribucion del hero.
- Se conservaron textos, CTA, geometria azul y ocultacion de la figura en movil.
- Capturas nuevas en `C:\Users\jbelt\AppData\Local\Temp\portfolio-visual-check\phase-1`, con variantes completas y del hero para original y local.
- Playwright: original/local HTTP 200 en ambos viewports; consentimiento ausente en original y visible en local.
- `npx.cmd tsc -b --pretty false`, `npm.cmd run build` y `npm.cmd test`: exitosos; 1 archivo y 7 tests.
- Persisten diferencias finas de posicion/opacidad de la geometria y la diferencia de estado del consentimiento; no se implementaron las fases 2 y 3.

## Correccion visual final del hero (2026-10-31)

- Modificado unicamente `src/styles.css`.
- En movil, la etiqueta superior usa menor tamano y tracking para conservar una linea; el cargo usa tamano base, interlineado y separacion ligeramente ajustados.
- En escritorio, se redujo la opacidad de los anillos para aproximar la referencia sin cambiar la escala general ni la estructura CSS de la figura.
- Playwright genero capturas completas y del hero en `C:\Users\jbelt\AppData\Local\Temp\portfolio-visual-check\phase-1-final` a 1440x900 y 390x844. Original/local respondieron HTTP 200; consentimiento ausente en original y visible en local.
- `npx.cmd tsc -b --pretty false`, `npm.cmd run build` y `npm.cmd test`: exitosos; 1 archivo y 7 tests.
- No se tocaron otras secciones ni las fases 2 y 3. Persisten diferencias menores de geometria y la diferencia de estado del consentimiento.

## Siguiente paso exacto

Revisar la UI en navegador y continuar con SEO/metadata y pruebas de accesibilidad. Mantener backend, analytics y despliegue fuera de esta etapa.

## Fase 2: contacto y footer (2026-10-31)

- Se aplico una capa visual acotada al formulario real existente: tarjeta con borde/fondo, campos con tratamiento consistente y estados de foco conservados.
- El CTA de contacto de la home y sus datos no se modificaron; el formulario sigue enviando a `/api/contact` y solo muestra exito tras respuesta OK.
- Se ajusto el espaciado vertical del footer y se conservaron Inicio, Privacidad, LinkedIn y el control de consentimiento.
- Capturas locales de `/contact` en escritorio y movil: `C:\Users\jbelt\AppData\Local\Temp\portfolio-visual-check\phase-2`.
- Playwright confirmo HTTP 200, un formulario y un footer en ambos viewports. TypeScript, build y 7 tests pasaron.

## Fase 3: perfil, capacidades y tipografia (2026-10-31)

- Modificado solo `src/styles.css` para equilibrar las dos columnas del perfil, mejorar la densidad de la lista de areas y reforzar la jerarquia tipografica.
- Las nueve categorias de capacidades siguen intactas y sus tecnologias ahora se presentan como etiquetas agrupadas dentro de cada tarjeta.
- Capturas locales completas y por seccion (`perfil`, `capacidades`) en `C:\Users\jbelt\AppData\Local\Temp\portfolio-visual-check\phase-3`, a 1440x900 y 390x844.
- Playwright confirmo HTTP 200 y la presencia de ambas secciones en ambos viewports. TypeScript, build y 7 tests pasaron.
- No se tocaron backend, formulario, Resend, GTM, consentimiento, rutas ni contenido profesional.

## Fase 4: coherencia, privacidad y navegación (2026-10-31)

- Creada una política de privacidad en español con tratamientos comprobados y pendientes legales claramente marcados; `/privacy` mantiene `noindex, nofollow`.
- Sustituido el CTA `Enviar Email (jhonybel17@gmail.com)` de la Home por `Contactarme` hacia `/contact`.
- Añadido JSON-LD `Person` con información profesional confirmada; no se inventó una imagen social.
- Playwright comprobó Home, CTA a `/contact`, privacidad, JSON-LD y los tres viewports; sin errores de consola ni solicitudes fallidas.
- `npx.cmd tsc -b --pretty false`, `npm.cmd run build` y `npm.cmd test`: exitosos; 1 archivo y 7 tests.
- Pendientes del propietario: datos del responsable legal, canal de derechos, conservación, revisión/aprobación de privacidad, credenciales/entrega real de Resend y decisión sobre imagen social.

## Fase 5: unificación de páginas internas y navegación (2026-10-31)

- `src/components/Section.tsx` ahora aplica una estructura visual interna compartida sin convertir las páginas en copias de Home.
- `src/styles.css` añade jerarquía, anchos, interlineado y espaciado coherentes para páginas internas.
- Corregido el texto `Desarollador` en `/career-journey`.
- Playwright verificó las nueve rutas en tres viewports: HTTP 200, sin overflow horizontal, sin errores de consola ni solicitudes fallidas. Menú móvil: abre y cierra con Escape.
- Capturas completas de cada ruta en escritorio, tablet y móvil: `C:\Users\jbelt\AppData\Local\Temp\portfolio-visual-check\phase-5`.
- TypeScript, build y 7 tests pasaron.

## Corrección definitiva de referencia (2026-10-31)

- Navegación principal simplificada: se retiraron Trayectoria y Más; las rutas internas se mantienen.
- Reconstruidos `/about`, `/experience` y `/artificial-intelligence` según la composición y textos confirmados del brief.
- `/contact` ahora muestra título, descripción, campos Nombre/Email en dos columnas de escritorio, mínimo 20 caracteres, checkbox de privacidad y botón real de envío.
- Playwright verificó nueve rutas en 1440x900, 768x1024 y 390x844: HTTP 200, sin overflow, errores de consola ni solicitudes fallidas. Capturas en `C:\Users\jbelt\AppData\Local\Temp\portfolio-visual-check\final-correction`.
- TypeScript, build y 7 tests pasaron. No se enviaron correos ni se modificaron backend, Resend, GTM o consentimiento.

## Corrección final de navegación y páginas internas (2026-10-31)

- Corregidos `Ver mi trayectoria` → `/career-journey` y `Contactarme` → `/contact` con enlaces `Link` reales.
- Verificados enlaces del menú, navegación por teclado y cierre Escape del menú móvil.
- Ajustada la tarjeta de Inteligencia Artificial para evitar la distribución de dos columnas que se apartaba de la referencia.
- Playwright: CTA correctos en 1440x900, 768x1024 y 390x844; sin overflow, errores de consola ni solicitudes fallidas. Formulario inválido rechazado sin enviar correo.
- TypeScript, build y 7 tests pasan. Capturas en `C:\Users\jbelt\AppData\Local\Temp\portfolio-visual-check\definitive-final`.

## Ajuste final de Experiencia por referencia visual (2026-10-31)

- Añadidas a `/experience` las responsabilidades, tecnologías y marca `Actual` visibles en las imágenes de referencia.
- Corregida la herencia visual de la línea de tiempo y ampliado el contenedor interno para igualar la distribución de dos columnas.
- Playwright: HTTP 200, sin overflow horizontal en 1440x900, 768x1024 y 390x844. TypeScript, build y 7 tests pasan.
- Capturas actualizadas: `C:\Users\jbelt\AppData\Local\Temp\portfolio-visual-check\experience-final-desktop.png` y `experience-final-mobile.png`.

### Ajuste visual de tres rutas (2026-10-31)

- Modificados únicamente `src/components/Layout.tsx` y `src/styles.css` para aplicar estilos condicionados a `/about`, `/experience` y `/artificial-intelligence`.
- Corregidos ancho interno, altura de cabecera, divisores, separación de tarjetas y composición de la tarjeta de IA.
- Capturas de referencia y local guardadas en `C:\Users\jbelt\AppData\Local\Temp\portfolio-visual-check\three-route-final`.
- La diferencia del banner de consentimiento permanece porque es un estado local real y no se alteró.

- La cabecera de esas tres rutas ahora incluye `Trayectoria`, `Más ▾` con enlaces a Formación/Habilidades, `Contactarme` y `Cambiar tema` en el orden de la referencia.
- Capturas regeneradas tras el último ajuste en `three-route-final`.

- Eliminados completamente `Trayectoria` y `Más` del menú en todas las rutas. Las rutas `/career-journey`, `/education` y `/skills` permanecen disponibles directamente por URL.
- TypeScript, build y tests: correctos; 7 tests pasaron.

### Completar `/career-journey` (2026-10-31)

- Sustituida la vista incompleta de dos hitos por la estructura publicada: título `Trayectoria profesional`, descripción y las cuatro experiencias aprobadas en línea de tiempo.
- Capturas actualizadas en `C:\Users\jbelt\AppData\Local\Temp\portfolio-visual-check\career-current`.
- TypeScript, build y tests: correctos; 7 tests pasaron.

- Ajustada la estructura visual de `/career-journey`: encabezado separado de la sección de trayectoria, fondo tenue, línea vertical y tarjetas alineadas con la referencia publicada.

### Contacto persistente y GTM (2026-10-31)

- Añadidos `server/storage.ts`, `CONTACT_STORAGE_FILE` en `.env.example` y exclusión de `/data/` en `.gitignore`.
- El endpoint almacena antes de llamar a Resend, deduplica reintentos y conserva el registro cuando la notificación falla.
- Pruebas endpoint negativas: origen `403`, Content-Type `415`, validación `400`, sin enviar un payload válido.
- Prueba de persistencia: creación, deduplicación y marcado de correo enviado correctos.
- GTM local: consentimiento denegado produjo 0 scripts/0 eventos; concedido produjo 1 script, `consent_update`, `page_view` de `/` y `/about`, sin duplicados. No se pudo verificar recepción en el contenedor remoto sin Preview/Tag Assistant.
- TypeScript, build y 8 tests pasaron.

### PostgreSQL y cierre de auditoría GTM (2026-10-31)

- Dependencias añadidas: `pg` y `@types/pg`.
- Migración: `migrations/001_contact_messages.sql` con `id`, `dedupe_hash`, datos del formulario, `received_at`, `email_sent` y `email_sent_at`.
- `server/postgres.ts` implementa transacciones, consultas parametrizadas, deduplicación y actualización segura del estado.
- `server/server.ts` selecciona PostgreSQL mediante `DATABASE_URL` y mantiene JSON como fallback no eliminado.
- TypeScript, build y 8 tests pasaron. No hubo conexión real a PostgreSQL por falta de `DATABASE_URL`; no se enviaron correos.
- GTM local confirmado con consentimiento denegado/concedido, carga única y `page_view` sin duplicados. Falta validación autenticada en Preview/Tag Assistant.

- Añadidos eventos no personales para navegación, profundidad de scroll, inicio del formulario y enlace externo; `project_view`, `project_filter_used` y `cv_download` quedan descartados por ausencia de esas funcionalidades.

### Simplificación final del formulario (2026-10-31)

- Eliminados cliente `pg`, `@types/pg`, migración SQL, `server/postgres.ts` y `server/storage.ts`.
- Eliminadas `DATABASE_URL` y `CONTACT_STORAGE_FILE` de la configuración.
- El endpoint conserva validaciones, honeypot, rate limiting, origen, consentimiento y Resend; un error de Resend responde `503` sin éxito falso.
- TypeScript, build y tests deben ejecutarse tras esta simplificación.

- Se verificó `.env` sin imprimir valores, su exclusión por `.gitignore` y el arranque mediante `node --env-file=.env dist-server/server.js`.
- El endpoint respondió `403` a un origen no permitido y `400` a datos inválidos; no se enviaron correos reales.

### Primera prueba real Resend (2026-10-31)

- Se verificó `.env` sin imprimir secretos: destinatario `jhonybel17@gmail.com`, API Key presente y remitente bajo `jbeltra99.com`.
- Se inició backend con `node --env-file=.env dist-server/server.js` y se ejecutó un único envío real con datos de integración y privacidad aceptada.
- La petición no devolvió respuesta dentro de 50 segundos; se detuvo la prueba para evitar reintentos. No se declara entrega ni aceptación de Resend.
- La conectividad HTTP básica a `https://api.resend.com` respondió `200`, pero esto no confirma el POST ni la recepción del correo.

### Diagnóstico de timeout Resend (2026-10-31)

- DNS resolvió `api.resend.com` por IPv4 e IPv6; TCP 443 y TLS 1.3 fueron correctos; GET HTTPS respondió `200` detrás de Cloudflare.
- No hay proxy configurado en el entorno y no existen reintentos automáticos.
- La causa técnica confirmada es que `sendContactEmail` usa `fetch` sin `AbortSignal`/timeout; un mock que nunca responde permanece pendiente después de 2 segundos. El `catch` no registra la causa.
- No se realizó POST de diagnóstico a Resend ni se modificó código. Corrección mínima propuesta: timeout explícito de 10–15 s con `AbortController`/`AbortSignal.timeout`, captura segura de `AbortError` y log técnico sin secretos ni PII.

### Timeout Resend aplicado (2026-10-31)

- `sendContactEmail` ahora aborta la petición a los 15 segundos, diferencia timeout de error de conexión y registra únicamente tipo, duración y estado HTTP.
- Los errores HTTP y de conexión mantienen respuesta `503` desde el endpoint; no hay reintentos.
- Tests de éxito, HTTP 500, conexión, cancelación/timeout y ausencia de segundo envío mediante mocks: correctos. TypeScript, build y 7 tests pasan.

### Diagnóstico del mensaje de validación del contacto (2026-10-31)

- Reproducción Playwright: con nombre, correo, asunto y mensaje válidos pero checkbox sin marcar, el mensaje aparece y no se realiza `POST /api/contact`.
- Con checkbox marcado y mensaje de más de 20 caracteres, se observó el `POST` con los campos correctos y `startedAt`.
- La validación HTML nativa está desactivada mediante `noValidate`; el mensaje proviene exclusivamente de la validación personalizada del componente.
- No se modificó código porque no existe un defecto de vinculación: `privacyAccepted`, campos controlados y nombres enviados coinciden con el backend.

- Corregido el ancho excesivo observado en monitores anchos: páginas internas limitadas a 1440px y centradas; en móvil mantienen 16px laterales.
