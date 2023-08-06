import React from 'react'
import './BookDetail.css'

export default function BookDetail({item}) {



  return (
    <div className='book-container'>
      <img className='book-img' src={item.cover} alt={item.title} />
      <div className='book-details'>
        <h2>{item.title}</h2>
        <p className='book-sinopsis'>{item.synopsis}</p>
        <p className='book-tips'>Autor/a: {item.author.name} <br />
          Genero: {item.genre}
        </p>
        <div className='book-footer'>
          <p>Precio: ${item.price}</p>
          <button className='boton-carrito'>añadir al carrito</button>
          <i className="bi bi-bookmark-heart boton-deseo"></i>
 
        </div>
      </div>
    </div>
  )
}
