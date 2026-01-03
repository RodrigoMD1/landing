import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t border-gray-100 py-8 mt-12">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-base sm:text-sm text-gray-700">© {new Date().getFullYear()} Impresión 3D Pro</div>
        <div className="text-base sm:text-sm text-gray-600">Diseño y fabricación con estándares profesionales</div>
      </div>
    </footer>
  )
}