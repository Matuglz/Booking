import React from 'react'

export default function AlertAgregadoAlCarrito({ book }) {
  return (
    <div className="alert-sesion bounce-top">
            <p className='a-sesion'>{book.title} agregado al carrito</p>
        </div>
  )
}
