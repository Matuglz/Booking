import React, { useEffect, useState } from 'react'
import { pedirLibros } from '../../Functions/Functions'
import MovieDiv from '../MovieDiv/MovieDiv'
import FiltrosNav from '../FiltrosNav/FiltrosNav'
import { useParams } from 'react-router-dom'



export default function MovieContainer() {
    const categoria = useParams().categoria

    let [books, setBooks] = useState([])


    useEffect(() => {
        pedirLibros()
            .then(res => {
                let librosFiltrados;

                if (categoria !== "Todos") {
                    librosFiltrados = res.library.filter(item => item.book.genre === categoria)
                } else {
                    librosFiltrados = res.library;
                }

                setBooks(librosFiltrados.map(item => item.book));
            });
    }, [categoria]);


    return (

        <div>
            <div>
                <FiltrosNav />
            </div>
            <div className='movie-container'>
                {books.length > 0 && books.map(book => {
                    return (
                        <MovieDiv key={book.isbn} book={book} />
                    )
                })

                }
            </div>
        </div>
    )
}
