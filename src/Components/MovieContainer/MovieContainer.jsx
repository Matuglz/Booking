import React, { useEffect, useState } from 'react'
import { pedirLibros } from '../../Functions/Functions'
import MovieDiv from '../MovieDiv/MovieDiv'



export default function MovieContainer() {
    let [library, setLibrary] = useState([])

    useEffect(() => {
        pedirLibros()
            .then(res => { setLibrary(res.library) })
    }, [])


    let books = []
    library.forEach(e => books.push(e.book))


    return (
    
        <div>
            <div className='movie-container'>
                {books.length > 0 &&
                    <MovieDiv books={books} />
                }
            </div>
        </div>
    )
}
