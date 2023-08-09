import React from 'react'
import { Link } from 'react-router-dom'
import './AlertAgreagdoAlCarrito.css'

export default function AlertAgregadoAlCarrito({ book }) {
  return (
    <div className='alert-container'>
      <div className='alert'>
        <div className="alert-header">
          BODEGA DE LIBROS
        </div>
        <hr />
        <div className="alert-body">
          <img className='alert-img' src={book.cover} alt={book.title} />
          <div className="alert-text">
            <h3>{book.title}</h3>
            <p className='alert-precio'>1 x {book.price}</p>
            <p className='texto-agregado' >¡Agregado al carrito!</p>
          </div>
        </div>
        <hr />
        <div className="alert-footer">
          <Link to='/Carrito'><button>VER CARRITO</button></Link>
        </div>
      </div>
    </div>
  )
}
