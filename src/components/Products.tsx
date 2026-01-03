import React from 'react'
import { products } from '../data/products'
import ProductCard from './ProductCard'

export default function Products(){
  return (
    <section id="productos" className="py-16 bg-white">
      <div className="container">
        <h3 className="text-2xl font-semibold">Productos destacados</h3>
        <p className="mt-2 text-gray-600 max-w-xl">Ofrecemos piezas en distintos materiales, acabados y niveles de detalle. Precios referenciales para piezas estándar.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}