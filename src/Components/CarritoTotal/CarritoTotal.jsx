import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarContext } from '../../Context/CarContext'

export default function CarritoTotal({cantidadEnElCarrito, total, envio,envioGratis}) {

    const {login} =useContext(CarContext)

    return (
        <div className="total">
            <div className='total-header'>
                <p>Resumen de compra</p>
            </div>
            <hr />
            <div className='total-body'>
                <div className='productos-body'><p>Productos({cantidadEnElCarrito()})</p><p>${total}</p></div>
                <div className='envio-body'><p>Envio</p>
                    {envioGratis ? <p>Envio Gratis (+$20.000)</p> : <p>${envio}</p>}
                </div>
                <div className='precio-total-body'><p>Total:</p>{envioGratis ? <p>${total}</p> : <p>${total + envio}</p>}</div>
            </div>
            <hr />
            <Link to={login ? "/Checkout" :"/Sesion"}><p className='terminar-compra'>Terminar compra</p></Link>
        </div>
    )
}
