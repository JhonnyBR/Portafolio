import { Section } from '../components/Section';

export function Privacy() {
  return <Section eyebrow="Privacidad" title="Tratamiento de datos personales.">
    <div className="privacy-copy">
      <p>Esta declaración explica cómo funciona este sitio y qué datos se tratan.</p>
      <h2>Responsable del sitio</h2>
      <p>El titular del sitio es Jonny Beltran. Sitio web: https://jbeltra99.com. Para consultas sobre privacidad puede utilizarse <a href="mailto:privacidad@jbeltra99.com">privacidad@jbeltra99.com</a>.</p>
      <h2>Información que puede tratarse</h2>
      <p>Durante la navegación pueden existir datos técnicos de las solicitudes HTTP necesarios para servir y proteger el sitio. El backend puede observar la dirección de red de la conexión para aplicar el control de solicitudes; no registra nombres, correos, mensajes ni claves en sus logs.</p>
      <h2>Analítica: GTM y GA4</h2>
      <p>El sitio utiliza Google Tag Manager como gestor de etiquetas y está preparado para utilizar Google Analytics 4 según la configuración del contenedor. Con consentimiento, se registran eventos técnicos de navegación: visualización de páginas, clics de navegación y enlaces externos, profundidad de desplazamiento, inicio y resultado del formulario. Estos datos sirven para conocer las páginas visitadas, comprender la navegación y mejorar el contenido y la experiencia.</p>
      <p>Los eventos implementados no incluyen nombre, correo electrónico, asunto ni contenido del mensaje. No se envían datos personales del formulario a GTM ni a GA4.</p>
      <h2>Consentimiento analítico</h2>
      <p>Si la persona no ha decidido, GTM no se carga y no se envían eventos analíticos. Si rechaza la analítica, el sitio sigue siendo navegable y el formulario continúa disponible; GTM no se carga y los eventos analíticos quedan bloqueados. Si acepta, se carga una sola vez el contenedor configurado y se habilitan los eventos descritos. La elección puede cambiarse desde el control de preferencias del footer.</p>
      <p>Las cookies, identificadores y plazos de conservación de etiquetas externas dependen de la configuración vigente en GTM/GA4.</p>
      <h2>Almacenamiento local y preferencias</h2>
      <p>El navegador guarda la preferencia de consentimiento analítico durante la sesión y la preferencia del tema visual para recordarla en visitas posteriores. Estos datos no contienen mensajes de contacto.</p>
      <h2>Formulario de contacto</h2>
      <p>Los datos solo se procesan cuando la persona decide enviar el formulario: nombre, correo electrónico, asunto opcional y mensaje. También se envían campos técnicos anti-spam, como un honeypot y el momento de inicio del formulario.</p>
      <p>Los campos obligatorios permiten identificar a quien consulta, responder a su correo y atender el motivo de contacto. El consentimiento del formulario es independiente del consentimiento analítico y debe aceptarse antes del envío.</p>
      <p>El endpoint aplica validación de campos, honeypot, tiempo mínimo de envío, limitación de solicitudes, restricción de origen y límite de tamaño.</p>
      <h2>Proveedor de correo: Resend</h2>
      <p>Los envíos válidos se procesan mediante Resend. El proveedor recibe los datos necesarios para entregar el mensaje. El backend no almacena los mensajes en PostgreSQL, una base de datos propia, archivos JSON ni otros archivos de historial. El correo recibido puede permanecer almacenado en el servicio de correo del destinatario según su configuración y políticas aplicables.</p>
      <h2>Información que no almacenamos</h2>
      <ul><li>No guardamos los mensajes en una base de datos propia ni mantenemos un historial de consultas en el servidor.</li><li>No guardamos automáticamente los datos escritos antes de enviar el formulario.</li><li>No utilizamos los datos del formulario para publicidad.</li><li>No enviamos el contenido del mensaje a Google Analytics.</li></ul>
      <h2>Finalidades</h2>
      <ul><li>Analítica y mejora del sitio, solo con consentimiento analítico.</li><li>Atención de consultas enviadas voluntariamente.</li><li>Funcionamiento técnico y seguridad.</li><li>Conservación de preferencias del visitante.</li></ul>
      <p>Navegar por el sitio no exige enviar el formulario ni aceptar la analítica.</p>
      <h2>Conservación</h2>
      <p>No se ha definido un plazo propio de conservación de los mensajes. El correo recibido puede permanecer en el servicio de correo del destinatario. Los plazos de cookies o identificadores externos dependen de sus respectivas configuraciones.</p>
      <h2>Seguridad</h2>
      <p>El endpoint usa validaciones, protección anti-spam, límite de solicitudes, restricción de origen, límite de tamaño y un timeout para la comunicación con Resend. Los secretos permanecen en variables de entorno del backend y no se envían al navegador.</p>
      <h2>Derechos y contacto</h2>
      <p>Las personas titulares pueden contactar a Jonny Beltran en <a href="mailto:privacidad@jbeltra99.com">privacidad@jbeltra99.com</a> para solicitar información sobre los datos tratados, actualización, rectificación, supresión u otros derechos que resulten aplicables. No se afirma que esta dirección haya sido verificada u opere actualmente.</p>
      <h2>Actualizaciones</h2>
      <p>Esta declaración puede actualizarse cuando cambien el formulario, el consentimiento, el contenedor de etiquetas o los datos confirmados del sitio.</p>
    </div>
  </Section>;
}
