import React from 'react'

export default function About(){
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="container max-w-6xl">
        <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-300 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl sm:shadow-lg my-8 relative overflow-hidden">
          <div className="hidden sm:block absolute left-4 top-4 bottom-4 w-0.5 bg-brand/20 rounded" aria-hidden />
          <div className="block sm:hidden absolute left-6 right-6 top-4 h-0.5 bg-brand/20 rounded" aria-hidden />
          <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 pl-0 sm:pl-8 lg:pl-10">
            <div className="inline-flex items-center gap-3 text-sm text-brand font-semibold mb-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <circle cx="12" cy="12" r="10" fill="var(--brand)" />
                <path d="M8 12l2.5 2L16 9" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Nuestra historia
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold">De taller local a impresión 3D profesional</h3>
              <p className="mt-4 text-gray-700 leading-relaxed">Desde 2018 combinamos diseño e ingeniería para transformar ideas en piezas reales mediante impresión 3D. Empezamos como un pequeño taller y hoy colaboramos con diseñadores, emprendedores e industrias para crear prototipos, piezas de reemplazo y series cortas con acabados profesionales.</p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand text-white flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M12 2v20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5 7h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Prototipado rápido</div>
                    <div className="text-base sm:text-sm text-gray-600">Iteraciones rápidas para validar ideas.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand text-white flex items-center justify-center flex-shrink-0">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 3v18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Calidad en acabados</div>
                    <div className="text-base sm:text-sm text-gray-600">Post-procesos y controles para piezas listas para uso.</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <a href="#contacto" className="inline-block bg-brand text-white px-5 py-2 rounded-md">Solicitar presupuesto</a>
                <div className="text-sm text-gray-500">Entrega en 3-7 días para prototipos estándar</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-tr from-white to-gray-100 p-6 shadow-lg">
              <h4 className="text-lg font-semibold mb-4">Trabajos recientes</h4>
              <div className="grid grid-cols-3 gap-3">
                <img src="/src/assets/product-1.svg" alt="Trabajo 1" className="rounded-md bg-white p-3" />
                <img src="/src/assets/product-2.svg" alt="Trabajo 2" className="rounded-md bg-white p-3" />
                <img src="/src/assets/product-3.svg" alt="Trabajo 3" className="rounded-md bg-white p-3" />
              </div>

              <blockquote className="mt-6 border-l-4 border-brand pl-4 text-gray-700">“Nos ayudaron a reducir el tiempo de desarrollo y dejaron las piezas listas para producción.” <span className="block text-sm text-gray-500 mt-2">— Estudio de diseño local</span></blockquote>
            </div>
          </div>
        </div>
        </div>

        <div className="mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="text-2xl font-bold">10k+</div>
              <div className="text-base sm:text-sm text-gray-600 mt-1">Piezas producidas</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="text-2xl font-bold">+4 años</div>
              <div className="text-base sm:text-sm text-gray-600 mt-1">Experiencia en impresión 3D</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <div className="text-2xl font-bold">Clientes</div>
              <div className="text-base sm:text-sm text-gray-600 mt-1">Diseñadores y PYMEs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
