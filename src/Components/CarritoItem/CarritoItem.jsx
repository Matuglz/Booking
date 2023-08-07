import React, { useContext, useState } from 'react'
import './CarritoItem.css'
import { CarContext } from '../../Context/CarContext'

export default function CarritoItem({ prod }) {

    const {carrito, setCarrito,borrarItem} = useContext(CarContext)

    let [cantidad,setCantidad] = useState(prod.cantidad)
    

    function handleSumar(prod,cantidad) {
        let prodAgregado ={...prod,cantidad}
        let newCarrito = [...carrito]
        let existe = newCarrito.find(p => p.isbn === prodAgregado.isbn)
        if(existe){
            existe.cantidad++
            setCarrito(newCarrito)
            setCantidad(cantidad +1)
        }}

    function handleRestar(prod,cantidad) {
        let prodAgregado ={...prod,cantidad}
        let newCarrito =[...carrito]
        let existe = newCarrito.find(p => p.isbn === prodAgregado.isbn)
        if(existe){
            existe.cantidad > 1 && existe.cantidad--
            setCarrito(newCarrito)
            cantidad > 1 && setCantidad(cantidad - 1 )
        }}


    return (

        <div className='car-container'>
            <div className='car'>

                <img src={prod.cover} alt={prod.title} />
                <div>
                    <p className='texto-precio'>Precio</p>
                    <p className='contenedor-precio'>${prod.price * cantidad}</p>
                </div>
                <div>
                <p className='texto-cantidad'>Cantidad</p>
                <p className='cantidad-contenedor'>
                    <button onClick={()=>{handleSumar(prod,cantidad)}}>+</button>
                    <p className='numero-cantidad'>{cantidad}</p>
                    <button onClick={()=>{handleRestar(prod,cantidad)}}>-</button>
                </p></div>
                <div onClick={()=>{borrarItem(prod.isbn)}}><i className="bi bi-trash3 car-trash-icon"></i></div>
            </div>
        </div>
    )
}
