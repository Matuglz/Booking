import React, {  useContext } from 'react'
import './MovieDiv.css'
import { Link } from 'react-router-dom'
import { CarContext } from '../../Context/CarContext'


export default function MovieDiv({ book }) {

    const { agregarAlCarrito } = useContext(CarContext)

    const cantidad = 1


    return (
        <article className='container' key={book.isbn}>
            <img className='image' src={book.cover} alt={book.title} />
            <h2 className='title'>{book.title}</h2>
            <div>
                <p className='author'> Por: {book.author.name}</p>
                <button onClick={()=>{agregarAlCarrito(book,cantidad)}}>Agregar al carrito</button>
                <button><Link to={`/Libro/${book.isbn}`}>Mas</Link></button>
            </div>
        </article>
    )
}
