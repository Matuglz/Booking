import React, { useContext, useEffect, useState } from 'react'
import './MovieDiv.css'
import { Link } from 'react-router-dom'
import { CarContext } from '../../Context/CarContext'
import AlertAgregadoAlCarrito from '../AlertAgregadoAlCarrito/AlertAgregadoAlCarrito'


export default function MovieDiv({ book }) {


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


    //-------------------------------------------------------------------
    const { agregarAlCarrito } = useContext(CarContext)

    const cantidad = 1


    return (
        <article className='container' key={book.isbn}>
            <img className='image' src={book.cover} alt={book.title} />
            <h2 className='title'>{book.title}</h2>
            <div>
                <p className='author'> Por: {book.author.name}</p>
                <button onClick={() => {agregarAlCarrito(book, cantidad);mostrarAlerta()}}>Agregar al carrito</button>
                <button><Link to={`/Libro/${book.isbn}`}>Mas</Link></button>
            </div>
            {showAlert && <AlertAgregadoAlCarrito book={book} />} 
        </article>
    )
}
