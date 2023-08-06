import React from 'react'
import './MovieDiv.css'
import { Link } from 'react-router-dom'

export default function MovieDiv({ books }) {
    return (
        books.map((book) => {
                return (
                    <article className='container' key={book.isbn}>
                        <img className='image' src={book.cover} alt={book.title} />
                        <h2 className='title'>{book.title}</h2>
                        <div>
                        <p className='author'> Por: {book.author.name}</p>
                        <button>Agregar al carrito</button> <button><Link to={`/Libro/${book.isbn}`}>Mas</Link></button>
                        </div>
                    </article>
                )
            })

)}
