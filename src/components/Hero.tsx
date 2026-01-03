import React from 'react'

export default function Hero(){
  return (
    <section className="bg-white py-16">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Impresión 3D profesional para tus proyectos</h2>
          <p className="mt-4 text-gray-700 max-w-xl">Producción de piezas y prototipos con acabados finos y materiales duraderos. Servicio serio, rápido y con soporte técnico especializado.</p>
          <div className="mt-6 flex gap-4">
            <a href="#productos" className="inline-block bg-brand text-white px-6 py-3 rounded-md font-medium hover:opacity-95">Ver productos</a>
            <a href="#nosotros" className="inline-block border border-gray-300 px-6 py-3 rounded-md text-gray-700 hover:bg-gray-50">Conócenos</a>
            <a href="#contacto" className="inline-block border border-gray-300 px-6 py-3 rounded-md text-gray-700 hover:bg-gray-50">Contacto</a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-md bg-gray-50 rounded-lg p-6 shadow-sm">
            <img src="/src/assets/product-2.svg" alt="Ejemplo" className="w-full h-auto" />
            <p className="mt-4 text-base sm:text-sm text-gray-600">Ejemplo de prototipo impreso con acabado profesional.</p>
          </div>
        </div>
      </div>
    </section>
  )
}