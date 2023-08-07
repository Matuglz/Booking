import React, { useContext } from 'react'
import './Carrito.css'
import { CarContext } from '../../Context/CarContext'
import CarritoItem from '../CarritoItem/CarritoItem'

export default function Carrito() {
    const { carrito } = useContext(CarContext)


    return (
        <div className='contenedor-carrito'>
            <h2>CARRITO</h2>
            {
                carrito.length > 0 ? carrito.map((prod) =>(
                    <CarritoItem key={prod.isbn} prod={prod}/>
                )) 
                :
                <div>
                    tu carrito esta vacio :(
                </div>
            }
        </div>
    )
}
