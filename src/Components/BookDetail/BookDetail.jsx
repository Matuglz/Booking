import React, { useContext, useEffect, useState } from 'react'
import './BookDetail.css'
import { CarContext } from '../../Context/CarContext'
import AlertAgregadoAlCarrito from '../AlertAgregadoAlCarrito/AlertAgregadoAlCarrito'
import CheckCorazon from '../CheckCorazon/CheckCorazon'


export default function BookDetail({ book }) {

  let [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false)
      }, 3000);
    }
  }, [showAlert])

  function mostrarAlerta() {
    setShowAlert(true)
  }

  const { agregarAlCarrito } = useContext(CarContext)

  let cantidad = 1


  return (
    <div className='book-container'>
      <img className='book-img' src={book.cover} alt={book.title} />
      <div className='book-details'>
        <h2>{book.title}</h2>
        <p className='book-sinopsis'>{book.synopsis}</p>
        <p className='book-tips'>Autor/a: {book.author.name} <br />
          Genero: {book.genre}
        </p>
        <div className='book-footer'>
          <p className='book-price'>Precio: ${book.price}</p>
          <button className='boton-carrito' onClick={() => { agregarAlCarrito(book, cantidad); mostrarAlerta() }}>añadir al carrito</button>
          <CheckCorazon book={book}/>

        </div>
      </div>
      {showAlert && <AlertAgregadoAlCarrito book={book} />}
    </div>
  )
}
