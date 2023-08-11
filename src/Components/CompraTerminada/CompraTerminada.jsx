import React, { useContext, useEffect } from 'react'
import './CompraTerminada.css'
import { CarContext } from '../../Context/CarContext'

export default function CompraTerminada() {
  
    const {setCarrito} = useContext(CarContext)
    const datosComprador = JSON.parse(sessionStorage.getItem("datosComprador"))

    useEffect(() => {
      setTimeout(() => {
        setCarrito([])
      }, 3000);
    }, [])
    
  return (
    <div>
        <h3 className='titulo-compra-finalizada'>Compra finalizada</h3>
        <div className='datos-compra'>
          <div>¡HOLA {datosComprador[0].nombre.toUpperCase()} FELICIDADES POR TU COMPRA!
          </div>
          <p>Tu codigo de seguimiento es: {Math.round(Math.random()*999999999 + 184920859)}</p>
          <p>Tu direccion de envio es {datosComprador[0].calle} {datosComprador[0].altura}</p>
          <p>Te vamos a enviar tu resumen a {datosComprador[0].email.toUpperCase()}</p>
        </div>
    </div>
  )
}
