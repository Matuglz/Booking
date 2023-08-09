import React, { useState } from 'react'
import './ListaDeseosContainer.css'
import ItemListaDeseos from '../ItemListaDeseos/ItemListaDeseos'



export default function ListaDeseosContainer() {

    let listaDeseosLS = JSON.parse(localStorage.getItem("deseados")) || []

    const [listaDeseos, setListaDeseos] = useState(listaDeseosLS)

    // const listaDeseos = JSON.parse(localStorage.getItem("deseados")) || []


    return (
        <div>
            <h2 className='titulo-deseos'>
                LISTA DE DESEOS
            </h2>
            <div className='contenedor-de-deseos'>
                {listaDeseos.length > 0 ?
                    listaDeseos.map(book => {
                        return (

                            <ItemListaDeseos key={book.isbn} book={book} listaDeseos={listaDeseos} setListaDeseos={setListaDeseos} />
                        )
                    })
                    :
                    <div>
                        <p>tu lista de deseos esta vacia</p>
                    </div>}
            </div>
        </div>
    )
}
