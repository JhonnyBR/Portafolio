# Auditoría visual del portafolio

Fecha: 2026-10-31

Fuente: capturas Playwright almacenadas en `C:\Users\jbelt\AppData\Local\Temp\portfolio-visual-check\reference-audit`.

No se modificó código, configuración, contenido, backend, consentimiento ni analítica durante esta auditoría.

## Diferencias observadas

| Diferencia observada | Sección | Viewport | Evidencia original/local | Prioridad | Corrección recomendada |
|---|---|---|---|---|---|
| La original usa una escala tipográfica del hero más compacta y una distribución más horizontal; la local ocupa más altura y el texto se corta visualmente por el banner de consentimiento. | Hero | Escritorio | `original-desktop-reorganized-full.png` frente a `local-desktop-reorganized-full.png` | Alta | Ajustar únicamente tamaños, anchos de columna y espaciado del hero tras validar la referencia sin el estado de consentimiento como factor visual. |
| La figura azul local tiene anillos y nodos, pero su composición no coincide en posición, opacidad ni relaciones entre conexiones con la original. | Hero | Escritorio | Capturas completas y `*-inicio.png` | Alta | Recalibrar coordenadas relativas, opacidad y segmentos de la geometría; no sustituirla por una imagen genérica. |
| La original no muestra la figura azul en la captura móvil; la local tampoco la muestra, por lo que esa diferencia quedó corregida. | Hero | Móvil | `original-mobile-reorganized-full.png` y `local-mobile-reorganized-full.png` | Baja | No cambiar el comportamiento móvil actual sin nueva evidencia. |
| El banner de consentimiento aparece en la local y no aparece en la original. | Estado global | Escritorio y móvil | Visible en capturas locales; ausente en originales | No visual / estado | No eliminar ni alterar; repetir comparación con una condición de consentimiento equivalente si se necesita medir layout puro. |
| La local muestra contenido completo inmediatamente después del hero; la original muestra grandes áreas vacías o de contraste muy bajo en la captura completa. | Flujo de página | Escritorio y móvil | Capturas completas | Alta | No ocultar secciones. Verificar si la diferencia proviene de estilos/estado de carga original antes de cualquier cambio. |
| La sección de perfil local tiene el título y lista de áreas, pero la composición y escala de las dos columnas no coinciden con la captura original. | Perfil | Escritorio | `original-desktop-perfil.png` y `local-desktop-perfil.png` | Media | Ajustar grid, anchura de texto, separación vertical y contraste sin cambiar el contenido aprobado. |
| En móvil la local muestra el perfil como contenido normal y la original no muestra contenido equivalente en la captura completa. | Perfil | Móvil | `original-mobile-reorganized-full.png` frente a `local-mobile-reorganized-full.png` | Alta / incierta | No ocultar; confirmar si la captura original representa una carga incompleta o una variante visual. |
| La trayectoria local se muestra con tarjetas claramente legibles y ocupa una sección completa; la original aparece muy atenuada en la captura por sección y no resulta comparable pixel a pixel. | Trayectoria | Escritorio y móvil | `*-trayectoria.png` | Media | Comparar con la referencia en un estado visual estable; conservar las cuatro experiencias. |
| La local presenta nueve tarjetas de capacidades en una cuadrícula de tres columnas; la captura original muestra una tarjeta visible y el resto muy atenuado o fuera del área capturada. | Capacidades | Escritorio | `original-desktop-capacidades.png` frente a `local-desktop-capacidades.png` | Alta / incierta | Mantener los nueve grupos; revisar altura, espaciado y comportamiento de carga antes de ocultar o reordenar grupos. |
| En móvil la local apila los nueve grupos y genera una sección mucho más larga; la original no muestra esos grupos en la captura completa. | Capacidades | Móvil | `original-mobile-reorganized-full.png` frente a `local-mobile-reorganized-full.png` | Alta / incierta | No eliminar contenido; confirmar la referencia móvil real y ajustar solo si se verifica el comportamiento esperado. |
| El bloque de aprendizaje local es visible, con tarjeta azul clara y dos columnas; la original no lo muestra con la misma intensidad en la captura completa. | Inteligencia Artificial | Escritorio y móvil | `*-inteligencia-artificial.png` y completas | Media / incierta | Mantener contenido; revisar color, altura y estado de renderizado si se confirma que la original debe mostrarlo plenamente. |
| El contacto local muestra una composición de tres columnas y botón `Enviar Email`; la original muestra un CTA de contacto distinto y texto de disponibilidad futura en su captura. | Contacto | Escritorio | `original-desktop-contacto.png` frente a `local-desktop-contacto.png` | Alta | Resolver la diferencia de presentación sin desactivar el formulario real; requiere decisión sobre cómo representar el backend funcional frente al texto publicado. |
| En móvil el CTA local se apila y el botón ocupa casi todo el ancho; no hay una representación equivalente visible en la captura original. | Contacto | Móvil | `original-mobile-reorganized-full.png` frente a `local-mobile-reorganized-full.png` | Media / incierta | No cambiar hasta confirmar la referencia móvil de contacto. |
| El footer local añade `Cambiar consentimiento` y presenta enlaces con distribución distinta; la original muestra Inicio, Privacidad y LinkedIn con mayor separación horizontal. | Footer | Escritorio y móvil | Capturas completas | Media | Ajustar distribución y espaciado conservando el control de consentimiento. |
| La navegación local conserva rutas adicionales mediante `Más`; la original también tiene `Más`, pero su estado visual y comportamiento no son equivalentes en todas las capturas. | Encabezado/navegación | Escritorio y móvil | Capturas completas y auditoría DOM | Media | Comparar el menú abierto en un estado estable y conservar accesibilidad. |
| La tipografía local y la original son de la misma familia sans-serif aparente, pero difieren en escala, peso percibido y densidad en secciones posteriores. | Global | Escritorio y móvil | Todas las capturas por sección | Media | Ajustar tokens tipográficos por sección, no aplicar cambios globales indiscriminados. |

## Diferencias provocadas por estado dinámico

- El consentimiento local está visible y la referencia no lo muestra. Esto afecta especialmente el final del hero y no debe interpretarse automáticamente como un defecto del layout.
- Las capturas originales de varias secciones tienen contraste extremadamente bajo o grandes áreas vacías, aunque el DOM auditado confirmó que el contenido existe. No se considera evidencia suficiente para eliminar u ocultar secciones.
- Las capturas por sección pueden incluir solo la parte visible del elemento y no representan necesariamente su altura completa.

## Problemas funcionales observables en las capturas

- No se observan desbordamientos horizontales evidentes en las capturas móviles.
- Las secciones locales y sus anclas se muestran en el orden esperado.
- El formulario no fue enviado durante la auditoría.
- No se verificó entrega de correo ni recepción de eventos analíticos; quedan fuera del alcance visual.

## Prioridades recomendadas

1. Resolver la diferencia de densidad/visibilidad posterior al hero sin ocultar contenido por conjetura.
2. Ajustar la geometría del hero con una referencia estable y el mismo estado de consentimiento.
3. Resolver la presentación del CTA/contacto frente al formulario real.
4. Afinar perfil, capacidades, tipografía y footer.
5. Repetir capturas de escritorio y móvil antes de implementar otra ronda.
