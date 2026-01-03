import React from 'react'
import type { Product } from '../data/products'

function inferMaterial(title: string){
  const t = title.toLowerCase()
  if(t.includes('abs')) return 'ABS'
  if(t.includes('pla')) return 'PLA'
  if(t.includes('sla')) return 'SLA'
  return 'Personalizado'
}

export default function ProductCard({product}:{product:Product}){
  const material = inferMaterial(product.title)

  const handleKey = (e: React.KeyboardEvent) => {
    if(e.key === 'Enter') window.location.href = `mailto:ventas@impresion3dpro.test?subject=Consulta:${encodeURIComponent(product.title)}`
  }

  return (
    <article role="article" tabIndex={0} onKeyDown={handleKey} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition transform hover:-translate-y-1 border border-gray-100 overflow-hidden focus-visible:ring-2 focus-visible:ring-brand">
      <div className="relative w-full h-44 bg-gradient-to-tr from-gray-50 to-white flex items-center justify-center">
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 bg-white/90 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{material}</span>
        </div>

        <div className="absolute right-4 top-4 bg-brand text-white px-3 py-1 rounded-full text-sm font-semibold shadow">{product.price}</div>

        <img src={product.image} alt={product.title} className="h-32 w-auto relative z-10" />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="mt-2 text-base sm:text-sm text-gray-600 leading-relaxed">{product.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          <li className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">Entrega 3-7 días</li>
          <li className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">Acabado estándar</li>
          <li className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">Soporte técnico</li>
        </ul>

        <div className="mt-4 flex items-center justify-between">
          <a href="#contacto" className="text-base sm:text-sm text-gray-600 hover:text-black">Ver detalles</a>
          <a aria-label={`Solicitar ${product.title}`} href={`mailto:ventas@impresion3dpro.test?subject=Consulta:${encodeURIComponent(product.title)}`} className="inline-flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-md text-sm font-medium shadow hover:opacity-95">Solicitar</a>
        </div>
      </div>
    </article>
  )
}