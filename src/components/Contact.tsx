import React, { useState } from 'react'

export default function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<{name?:string,email?:string,message?:string}>({})
  const [status, setStatus] = useState<'idle'|'ready'|'sent'>('idle')

  const validate = () => {
    const next: typeof errors = {}
    if(!name.trim()) next.name = 'Por favor ingresa tu nombre.'
    else if(name.trim().length < 2) next.name = 'Nombre muy corto.'

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!email.trim()) next.email = 'Por favor ingresa tu email.'
    else if(!emailRe.test(email)) next.email = 'Email inválido.'

    if(!message.trim()) next.message = 'Escribe un mensaje.'
    else if(message.trim().length < 10) next.message = 'El mensaje debe tener al menos 10 caracteres.'

    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(!validate()) return
    setStatus('ready')
    const subject = encodeURIComponent(`Consulta de ${name}`)
    const body = encodeURIComponent(`${message}\n\nContacto: ${name} - ${email}`)
    window.location.href = `mailto:ventas@impresion3dpro.test?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <section id="contacto" className="py-16 bg-gray-50">
      <div className="container max-w-4xl">
        <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 shadow-lg my-6 relative overflow-hidden">
          <div className="hidden sm:block absolute left-4 top-6 bottom-6 w-0.5 bg-brand/20 rounded" aria-hidden />
          <h3 className="text-2xl font-semibold">Contacto</h3>
          <p className="mt-2 text-base sm:text-sm text-gray-600 max-w-xl">¿Tienes un proyecto o una consulta? Escríbenos y te respondemos a la brevedad. También podés llamarnos o pasar por el taller para una evaluación rápida.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium">Hablemos</h4>
                <p className="text-sm text-gray-600 mt-2">Elegí la forma que prefieras y te daremos una respuesta rápida y clara sobre tiempos y costos.</p>

                <ul className="mt-4 space-y-3 text-base sm:text-sm text-gray-700">
                  <li className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 text-gray-500" aria-hidden>
                      <path d="M3 8.5v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7 8l5 3 5-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <a href="mailto:ventas@impresion3dpro.test" className="hover:underline">ventas@impresion3dpro.test</a>
                  </li>

                  <li className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 text-gray-500" aria-hidden>
                      <path d="M22 16.92V20a2 2 0 0 1-2 2 19 19 0 0 1-8.63-2.53 19 19 0 0 1-6-6A19 19 0 0 1 2 4a2 2 0 0 1 2-2h3.09a1 1 0 0 1 1 .75l.7 3a1 1 0 0 1-.27.95L7.16 8.84a12 12 0 0 0 6 6l1.18-1.18a1 1 0 0 1 .95-.27l3 .7A1 1 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="0" />
                    </svg>
                    <a href="tel:+5491123456789" className="hover:underline">+54 9 11 2345-6789</a>
                  </li>

                  <li className="flex items-center gap-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 text-gray-500" aria-hidden>
                      <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" stroke="currentColor" strokeWidth="0" />
                      <circle cx="12" cy="10" r="2" fill="currentColor" />
                    </svg>
                    <span>Av. Ejemplo 123, Ciudad</span>
                  </li>

                  <li className="flex items-center gap-3 text-base sm:text-sm text-gray-500">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 text-gray-400" aria-hidden>
                      <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                    <span>Horario: Lun-Vie 9:00–18:00</span>
                  </li>
                </ul>

                <div className="mt-4">
                  <a href="#contacto" className="inline-block text-base sm:text-sm text-brand font-medium">Ver más</a>
                </div>
              </div>
            </div>

            <div>
              <form className="grid grid-cols-1 gap-4" onSubmit={onSubmit} aria-label="Formulario de contacto" noValidate>
                <label className="block">
                  <span className="text-base sm:text-sm font-medium text-gray-700">Nombre</span>
                  <input id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)} onBlur={()=>{ if(errors.name) validate() }} aria-invalid={!!errors.name} aria-describedby={errors.name? 'error-name' : undefined} required aria-required="true" className={`mt-1 block w-full rounded-md px-3 py-2 ${errors.name? 'border-red-300 ring-1 ring-red-300 focus:outline-none' : 'border border-gray-200'}`} />
                  {errors.name && <p id="error-name" role="alert" className="mt-1 text-base sm:text-sm text-red-600">{errors.name}</p>}
                </label>

                <label className="block">
                  <span className="text-base sm:text-sm font-medium text-gray-700">Email</span>
                  <input id="email" name="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} onBlur={()=>{ if(errors.email) validate() }} aria-invalid={!!errors.email} aria-describedby={errors.email? 'error-email' : undefined} required aria-required="true" className={`mt-1 block w-full rounded-md px-3 py-2 ${errors.email? 'border-red-300 ring-1 ring-red-300 focus:outline-none' : 'border border-gray-200'}`} />
                  {errors.email && <p id="error-email" role="alert" className="mt-1 text-base sm:text-sm text-red-600">{errors.email}</p>}
                </label>

                <label className="block">
                  <span className="text-base sm:text-sm font-medium text-gray-700">Mensaje</span>
                  <textarea id="message" name="message" rows={4} value={message} onChange={(e)=>setMessage(e.target.value)} onBlur={()=>{ if(errors.message) validate() }} aria-invalid={!!errors.message} aria-describedby={errors.message? 'error-message' : undefined} required aria-required="true" className={`mt-1 block w-full rounded-md px-3 py-2 ${errors.message? 'border-red-300 ring-1 ring-red-300 focus:outline-none' : 'border border-gray-200'}`} />
                  {errors.message && <p id="error-message" role="alert" className="mt-1 text-base sm:text-sm text-red-600">{errors.message}</p>}
                </label>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3">
                  <button type="submit" aria-label="Enviar formulario de contacto" className="bg-brand text-white px-5 py-2 rounded-md disabled:opacity-60" disabled={status==='ready'}>Enviar</button>
                  {status === 'ready' && <div role="status" aria-live="polite" className="text-base sm:text-sm text-gray-600">Preparando correo...</div>}
                  {status === 'sent' && <div role="status" aria-live="polite" className="text-base sm:text-sm text-green-600">Mensaje enviado; se abrirá tu cliente de correo.</div>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}