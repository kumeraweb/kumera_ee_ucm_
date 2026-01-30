export const CONTACT_INFO = {
  brandTitle: 'Gestión de Planes de Salud',
  roleLabel: 'Ejecutiva Comercial',
  phone: '56942874934',
  phoneDisplay: '+56 9 4287 4934',
  whatsappMessage: 'Hola, quiero cotizar un plan y conocer las condiciones de contratación.',
  email: '',
  areaServed: 'Chile',
  priceRange: '$$',
  legalDisclaimerShort:
    'Sitio de asesoría comercial y gestión de contratación. No presta servicios operativos ni reemplaza canales oficiales.',
  legalDisclaimerLong:
    'Servicio de intermediación y gestión comercial. No somos una central médica operativa ni reemplazamos a los canales oficiales de urgencia (131). La prestación del servicio es responsabilidad exclusiva de la empresa proveedora.'
}

export const getWhatsAppLink = (message?: string) => {
  const text = message || CONTACT_INFO.whatsappMessage
  return `https://wa.me/${CONTACT_INFO.phone}?text=${encodeURIComponent(text)}`
}
