import React, { useState } from 'react'

export default function Header(){
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-gray-200">
      <div className="container flex items-center justify-between py-6">
        <a href="#" className="text-xl font-semibold flex items-center gap-2 no-underline text-black" aria-label="Impresión 3D Pro">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <rect width="24" height="24" rx="4" fill="#06b6d4"/>
            <text x="12" y="16" textAnchor="middle" fontSize="10" fontFamily="Inter, Arial" fill="#fff">3D</text>
          </svg>
          <span>Impresión 3D Pro</span>
        </a>

        <nav className="hidden sm:flex sm:items-center sm:space-x-4" aria-label="Principal">
          <a className="text-base sm:text-sm text-gray-700 hover:text-black" href="#nosotros">Nosotros</a>
          <a className="text-base sm:text-sm text-gray-700 hover:text-black" href="#productos">Productos</a>
          <a className="text-base sm:text-sm text-gray-700 hover:text-black" href="#contacto">Contacto</a>
        </nav>

        <button
          className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Abrir menú</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="sm:hidden border-t border-gray-100">
          <div className="container py-3 flex flex-col space-y-2">
            <a className="text-gray-700 block px-2 py-2 rounded-md hover:bg-gray-50" href="#nosotros" onClick={()=>setOpen(false)}>Nosotros</a>
            <a className="text-gray-700 block px-2 py-2 rounded-md hover:bg-gray-50" href="#productos" onClick={()=>setOpen(false)}>Productos</a>
            <a className="text-gray-700 block px-2 py-2 rounded-md hover:bg-gray-50" href="#contacto" onClick={()=>setOpen(false)}>Contacto</a>
          </div>
        </div>
      )}
    </header>
  )
}