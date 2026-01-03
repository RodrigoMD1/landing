import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer' 

export default function App(){
  return (
    <>
      <a href="#main" className="skip-link">Saltar al contenido</a>
      <div className="min-h-screen text-black bg-white">
        <Header />
        <main id="main">
          <Hero />
          <div className="my-12 h-px bg-gray-100" aria-hidden />
          <About />
          <div className="my-12 h-px bg-gray-100" aria-hidden />
          <Products />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
