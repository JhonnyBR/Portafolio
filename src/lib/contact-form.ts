export const CONTACT_LOADING_MESSAGE = 'Enviando tu mensaje...';
export const CONTACT_SUCCESS_MESSAGE = '¡Mensaje enviado correctamente! Hemos recibido tu solicitud y nos pondremos en contacto contigo lo antes posible';

export type ContactFormValues = { name: string; email: string; subject: string; message: string; website: string };

export function contactFormError(values: ContactFormValues, privacyAccepted: boolean): string | null {
  if (values.name.trim().length < 2 || !/^\S+@\S+\.\S+$/.test(values.email) || values.message.trim().length < 20 || !privacyAccepted) {
    return 'Revisa los campos requeridos y acepta el aviso de privacidad.';
  }
  return null;
}

export function contactResponseError(status: number, payload: unknown): string {
  const message = typeof payload === 'object' && payload !== null && 'error' in payload && typeof payload.error === 'string' ? payload.error : '';
  if (status === 400) return message || 'Revisa los datos enviados y la verificación anti-spam.';
  if (status === 403) return 'La solicitud no proviene de un origen permitido.';
  if (status === 429) return 'Has realizado demasiados intentos. Inténtalo más tarde.';
  if (status === 502) return 'No se pudo conectar con el servidor. Inténtalo nuevamente.';
  if (status === 503) return 'El proveedor de correo no pudo aceptar el mensaje. Inténtalo nuevamente más tarde.';
  return 'No se pudo completar el envío. Inténtalo nuevamente.';
}
