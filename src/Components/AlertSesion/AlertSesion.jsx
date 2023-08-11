import React, { useContext } from 'react'
import './AlertSesion.css'
import { CarContext } from '../../Context/CarContext'

export default function AlertSesion() {

    const {login} = useContext(CarContext)

    return (
        <div className="alert-sesion1 bounce-top">
            <p className='a-sesion1'>
                {login ? "Iniciaste sesion" : "Cerraste sesion"}
            </p>
        </div>
    )
}
