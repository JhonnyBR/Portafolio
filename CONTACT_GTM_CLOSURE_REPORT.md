# Cierre de contacto y GTM

## Estado

PostgreSQL y el almacenamiento JSON fueron retirados por decisión del propietario. El formulario no depende de una base de datos.

## PostgreSQL

El endpoint envía directamente a Resend.

Variables: `RESEND_API_KEY`, `CONTACT_EMAIL_TO`, `CONTACT_EMAIL_FROM`, `CONTACT_ALLOWED_ORIGIN`.

No se enviaron correos reales. El envío se probó mediante mocks y los errores de Resend devuelven `503`.

## GTM

Contenedor: `GTM-W7MZBWTP`.

Comprobación local: sin consentimiento no se cargó el script ni se registraron eventos; con consentimiento se cargó una vez y se observaron `consent_update`, `page_view` y navegación SPA sin duplicados. Se añadieron `navigation_click`, `scroll_depth`, `contact_form_start` y `external_link_click`, siempre condicionados al consentimiento.

`project_view`, `project_filter_used` y `cv_download` no se implementaron porque no existen proyectos, filtros ni CV descargable en la aplicación actual.

La recepción real en GTM/GA4 no está confirmada: requiere acceso autenticado a GTM Preview o Tag Assistant.

## Comprobaciones ejecutadas

- TypeScript: correcto.
- Build: correcto.
- Tests: 8/8 correctos.
- Endpoint negativo: origen `403`, Content-Type `415`, validación `400`.
- Persistencia JSON de prueba: creación, deduplicación y estado enviado correctos.
- Envío real con Resend: pendiente de credenciales y autorización.
