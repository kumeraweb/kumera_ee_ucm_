export const CONTACT_INFO = {
  brandTitle: 'Contratación de Planes de Rescate en Ambulancias Privadas',
  roleLabel: 'Ejecutiva Certificada 🇨🇱 ',
  phone: '56942874934',
  phoneDisplay: '+56 9 4287 4934',
  whatsappMessage: 'Hola, quiero cotizar un plan y conocer condiciones de contratación programada.',
  email: '',
  areaServed: 'Chile',
  priceRange: '$$',
  legalDisclaimerShort:
    'Sitio de contratación de planes de rescate y ambulancias privadas. No brinda atención de urgencia, no es seguro, no es sistema de salud.',
  legalDisclaimerLong:
    'Sitio de contratación e intermediación comercial de planes de rescate en ambulancias privadas y servicios extrahospitalarios programados. No brinda atención de urgencia, no es seguro ni sistema de salud, y no presta atención médica integral. La prestación del servicio es responsabilidad exclusiva de la empresa proveedora.'
}

export const getWhatsAppLink = (message?: string) => {
  const text = message || CONTACT_INFO.whatsappMessage
  return `https://wa.me/${CONTACT_INFO.phone}?text=${encodeURIComponent(text)}`
}
