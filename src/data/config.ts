export const CONTACT_INFO = {
  brandTitle: 'Gestion Autorizada de Planes',
  roleLabel: 'Ejecutiva Autorizada',
  phone: '56942874934',
  phoneDisplay: '+56 9 4287 4934',
  whatsappMessage: 'Hola, quiero cotizar un plan y entender las condiciones.',
  email: '',
  areaServed: 'Chile',
  priceRange: '$$',
  legalDisclaimerShort:
    'Sitio de asesoría comercial y gestión de contratación. La prestación es realizada por proveedores externos. No presta servicios operativos ni reemplaza canales oficiales.',
  legalDisclaimerLong:
    'Este sitio es gestionado por una Ejecutiva Comercial Autorizada. Su función es la intermediación y venta de planes. La prestación es realizada por proveedores externos. No representa corporativamente a proveedores ni reemplaza canales oficiales.'
}

export const getWhatsAppLink = (message?: string) => {
  const text = message || CONTACT_INFO.whatsappMessage
  return `https://wa.me/${CONTACT_INFO.phone}?text=${encodeURIComponent(text)}`
}
