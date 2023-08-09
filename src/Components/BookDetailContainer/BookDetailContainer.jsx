import React, { useEffect, useState } from 'react'
import { pedirItemPorIsbn } from '../../Functions/Functions'
import { useParams } from 'react-router-dom'
import BookDetail from '../BookDetail/BookDetail'


export default function BookDetailContainer() {

    const [book, setBook] = useState(null)
    const id = useParams().id

    useEffect(() => {
        pedirItemPorIsbn(id)
            .then((res) => setBook(res))
            
    }, [id])

  return (
    <div>
        {book && <BookDetail book={book}/>}
    </div>
  )
}
