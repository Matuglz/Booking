import React, { useEffect, useState } from 'react'
import { pedirItemPorIsbn } from '../../Functions/Functions'
import { useParams } from 'react-router-dom'
import BookDetail from '../BookDetail/BookDetail'


export default function BookDetailContainer() {

    const [item, setItem] = useState(null)
    const id = useParams().id

    useEffect(() => {
        pedirItemPorIsbn(id)
            .then((res) => setItem(res))
            
    }, [id])

  return (
    <div>
        {item && <BookDetail item={item}/>}
    </div>
  )
}
