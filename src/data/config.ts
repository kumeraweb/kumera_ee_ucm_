export const CONTACT_INFO = {
  owner: 'Erika',
  name: 'Tu ejecutiva de ventas',
  title: 'Ejecutiva Autorizada',
  phone: '56942874934',
  whatsappMessage:
    'Hola Erika, me interesa cotizar un plan de rescate médico. ¿Me puedes orientar?',
  ctaText: 'Hablar con Erika'
}

export const getWhatsAppLink = (message?: string) => {
  const text = message || CONTACT_INFO.whatsappMessage
  return `https://wa.me/${CONTACT_INFO.phone}?text=${encodeURIComponent(text)}`
}
