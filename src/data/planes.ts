export interface PlanRescate {
  id: string
  nombre: string
  precio: string
  unidad: string
  textoPrincipal: string
  features: string[]
  destacado: boolean
  etiqueta?: string
}

export const PLANES: PlanRescate[] = [
  {
    id: 'full-rescue',
    nombre: 'FULL RESCUE',
    precio: '0,59',
    unidad: 'UF',
    textoPrincipal: 'Emergencias y Urgencias Médicas.',
    features: [
      'Rescate de Emergencias Médicas.',
      'Atención Programada de Urgencias Médicas.',
      'Orientación de Salud Telefónica.'
    ],
    destacado: false,
    etiqueta: 'FULL RESCUE'
  },
  {
    id: 'senior',
    nombre: 'SENIOR',
    precio: '1,0',
    unidad: 'UF',
    textoPrincipal: 'Protección para adultos desde 75 años.',
    features: [
      'Rescate ante Emergencias con Riesgo Vital y/o Urgencias Médicas.',
      'Asistencia de salud COPAGO $0 en Centros Médicos.',
      'Hasta 25% de descuento en Servicios de Salud a Domicilio.'
    ],
    destacado: true,
    etiqueta: 'SENIOR'
  }
]
