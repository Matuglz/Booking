import React from 'react'
import './AlertAgreagdoAlCarrito.css'

export default function AlertAgregadoAlCarrito({ book }) {
  return (
    <div className='alert-container bounce-top'>
      <div className='alert'>
        <div className="alert-body">
          <img className='alert-img' src={book.cover} alt={book.title} />
          <div className="alert-text">
            <h3>{book.title}</h3>
            <p className='alert-precio'>1 x {book.price}</p>
            <p className='texto-agregado' >¡Agregado al carrito!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
