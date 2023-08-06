import React from 'react'
import banner from '../img/banner.png'
import './Info.css'

export default function Info() {
  return (
    <div>
        <img src={banner} alt="banner" className='banner'/>
        <div className='container-tarjetas'>
            <article className='tarjeta-oferta tarjeta-envio'>
                <h2>ENVÍO GRATIS</h2>
                <p>para compras mayores a $20.000</p>
            </article>
            <article className='tarjeta-oferta  tarjeta-cuotas'>
                <h2>3 CUOTAS SIN INTERÉS</h2>
                <p>Visa y Master</p>
            </article>
            <article className='tarjeta-oferta tarjeta-promos'>
                <h2>Promos bancarias</h2>
                <p>y medios de pago</p>
            </article>
        </div>
    </div>
  )
}
