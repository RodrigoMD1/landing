export interface Product {
  id: string
  title: string
  price: string
  description: string
  image?: string
}

export const products: Product[] = [
  {
    id: 'p1',
    title: 'Pieza de Repuesto - ABS',
    price: '$9.990',
    description: 'Pieza impresa en ABS de alta resistencia. Ideal para reparaciones rápidas.',
    image: '/src/assets/product-1.svg'
  },
  {
    id: 'p2',
    title: 'Figura Prototipo - PLA',
    price: '$14.990',
    description: 'Modelo de prototipo en PLA con acabado fino.',
    image: '/src/assets/product-2.svg'
  },
  {
    id: 'p3',
    title: 'Soporte Personalizado',
    price: '$7.990',
    description: 'Soporte a medida para dispositivos y herramientas.',
    image: '/src/assets/product-3.svg'
  },
  {
    id: 'p4',
    title: 'Ensamblaje Funcional',
    price: '$24.990',
    description: 'Ensamblaje funcional con tolerancias apretadas y piezas encajables.',
    image: '/src/assets/product-4.svg'
  },
  {
    id: 'p5',
    title: 'Prototipo SLA (detalle)',
    price: '$39.990',
    description: 'Alto detalle y superficie lisa, ideal para presentaciones y test.',
    image: '/src/assets/product-5.svg'
  }
]
