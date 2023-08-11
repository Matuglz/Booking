import React, { useContext, useState } from 'react'
import './CarritoItem.css'
import { CarContext } from '../../Context/CarContext'


export default function CarritoItem({ prod }) {

    const { carrito, setCarrito, borrarItem } = useContext(CarContext)

    let [cantidad, setCantidad] = useState(prod.cantidad)


    function handleSumar(prod, cantidad) {
        let prodAgregado = { ...prod, cantidad }
        let newCarrito = [...carrito]
        let existe = newCarrito.find(p => p.isbn === prodAgregado.isbn)
        if (existe) {
            existe.cantidad++
            setCarrito(newCarrito)
            setCantidad(cantidad + 1)
        }
    }

    function handleRestar(prod, cantidad) {
        let prodAgregado = { ...prod, cantidad }
        let newCarrito = [...carrito]
        let existe = newCarrito.find(p => p.isbn === prodAgregado.isbn)
        if (existe) {
            existe.cantidad > 1 && existe.cantidad--
            setCarrito(newCarrito)
            cantidad > 1 && setCantidad(cantidad - 1)
        }
    }


    return (
            <article className='card'>
                <div className="card-body">
                <img className='img-card' src={prod.cover} alt={prod.title} />
                <div className='precioytitulo'>
                    <h3>{prod.title}</h3>
                    <p>${prod.price * cantidad}</p>

                    <div className='cantidad-contenedor'>
                        <div onClick={() => { handleSumar(prod, cantidad) }}>+</div>
                        <p>{cantidad}</p>
                        <div onClick={() => { handleRestar(prod, cantidad) }}>-</div>
                    </div>
                </div>
                </div>
                <div className='opciones'>
                    <i  onClick={() => { borrarItem(prod.isbn) }} className="bi bi-trash3 car-trash-icon"></i>
                </div>
            </article>
    )
}
