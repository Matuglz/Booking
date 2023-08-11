import React, { useContext, useEffect, useState } from 'react'
import './Carrito.css'
import { CarContext } from '../../Context/CarContext'
import CarritoItem from '../CarritoItem/CarritoItem'
import CarritoTotal from '../CarritoTotal/CarritoTotal'

export default function Carrito() {
    const { carrito,cantidadEnElCarrito } = useContext(CarContext)

    const [total, setTotal] = useState(0)

    const [envioGratis, setEnvioGratis] = useState(false)

    const envio = 2500

    const precios = []

    useEffect(() => {
        carrito.forEach(element => {
            let suma = element.cantidad * element.price
            precios.push(suma)
        });

        let suma = 0

        precios.forEach(num => {
            suma += num
            setTotal(suma)
        })

    },[carrito])

    useEffect(() => {
        if(total > 20000){
            setEnvioGratis(true)
        }else{setEnvioGratis(false)}
    }, [total])
    



    return (
        <section className='contenedor-carrito'>
            <h2>CARRITO</h2>
            {
                carrito.length > 0 ?
                    <div className='contenedor-carrito-con-total'>
                        <div className='item-carrito'>
                            {carrito.map(prod => {
                                return (
                                    <CarritoItem key={prod.isbn} prod={prod} />
                                )
                            })}
                        </div>
                            <CarritoTotal 
                            cantidadEnElCarrito={cantidadEnElCarrito} 
                            total={total}
                            envioGratis={envioGratis}
                            envio={envio}
                            />
                    </div>
                    : <div>tu carrito esta vacio :(</div>
            }
        </section>
    )
}