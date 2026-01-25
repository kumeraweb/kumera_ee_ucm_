export interface PlanRescate {
  id: string
  nombre: string
  precio: string
  unidad: string
  features: string[]
  destacado: boolean
  etiqueta?: string
}

export const PLANES: PlanRescate[] = [
  {
    id: 'full-rescue',
    nombre: 'Full Rescue Individual',
    precio: '0,59',
    unidad: 'UF / mes',
    features: ['Rescate Emergencia 24/7', 'Atención Médica Telefónica', 'Sin límite de edad'],
    destacado: true,
    etiqueta: 'Más Vendido'
  },
  {
    id: 'senior',
    nombre: 'Protección Senior',
    precio: '1,0',
    unidad: 'UF / mes',
    features: [
      'Especial para mayores de 75 años',
      'Copago $0 en centros médicos',
      'Traslados programados'
    ],
    destacado: false,
    etiqueta: 'Recomendado'
  },
  {
    id: 'traslados',
    nombre: 'Convenio Traslados',
    precio: '85.000',
    unidad: 'Pesos / evento',
    features: [
      'Traslados de alta complejidad',
      'Equipamiento UTI móvil',
      'Cobertura Inter-regiones'
    ],
    destacado: false
  }
]
