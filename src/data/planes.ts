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
    features: [
      'Cobertura de rescate de urgencia (según proveedor)',
      'Orientación médica telefónica (según proveedor)',
      'Sin límite de edad (según plan)'
    ],
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
      'Copago $0 en centros médicos (según plan)',
      'Traslados programados (según plan)'
    ],
    destacado: false,
    etiqueta: 'Ideal Adulto Mayor'
  }
]
