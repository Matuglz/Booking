import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarContext } from '../../Context/CarContext'

export default function CarritoWidget() {

    const { cantidadEnElCarrito } = useContext(CarContext)

    return (
        <div>
            <Link className='item-link' to='/Carrito'>
                <i className="bi bi-bag">
                    <span>
                        {cantidadEnElCarrito()}
                    </span>
                </i>
            </Link>
        </div>
    )
}
