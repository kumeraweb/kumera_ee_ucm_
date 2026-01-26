export const CONTACT_INFO = {
  owner: 'Ejecutiva Autorizada',
  name: 'Ejecutiva Autorizada',
  title: 'Ejecutiva Comercial Autorizada',
  phone: '56942874934',
  phoneDisplay: '+56 9 4287 4934',
  whatsappMessage:
    'Hola, me interesa cotizar un plan de rescate médico. ¿Me puedes orientar?',
  ctaText: 'Hablar con Ejecutiva Autorizada'
}

export const getWhatsAppLink = (message?: string) => {
  const text = message || CONTACT_INFO.whatsappMessage
  return `https://wa.me/${CONTACT_INFO.phone}?text=${encodeURIComponent(text)}`
}
