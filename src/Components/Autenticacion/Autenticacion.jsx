import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import './Autenticacion.css'
import { useNavigate } from 'react-router-dom/dist/react-router-dom.production.min'
import AlertDatosIncorrectos from '../AlertDatosIncorrectos/AlertDatosIncorrectos'
import { CarContext } from '../../Context/CarContext'

export default function Autenticacion() {

    const {setLogin} = useContext(CarContext)

    const [alert, setAlert] = useState(false)

    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const [contraseña, setContraseña] = useState("")
    const [correo, setCorreo] = useState("")



    let contraseñaConfirmada = "1234"
    let correoConfirmado = "ecommerce@matias.com"

    console.log(` 
    contraseña: ${contraseñaConfirmada} 
    cooreo: ${correoConfirmado}
    `);

    function iniciarSesion() {
        if (correo === correoConfirmado && contraseña === contraseñaConfirmada) {
            setLogin(true)
            navigate("/Libros/Todos")
        } else {
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 1500);
        }
    }


    return (
        <div className='contenedor-autenticacion'>
            <div className='contenedor-sesion'>
                <h2 className='texto-iniciar'>Inicia Sesion</h2>
                <i className="bi bi-person-circle logo-sesion"></i>
                <form className="formulario-sesion" action='register' onSubmit={handleSubmit(iniciarSesion)}>
                    <input type="email" placeholder='Mira la consola ;)' {...register('correo', { setValueAs: (value) => value.toLowerCase() })} onChange={(e) => setCorreo(e.currentTarget.value)} />
                    <input type="password" placeholder='Constraseña' {...register('contraseña')} onChange={(e) => setContraseña(e.currentTarget.value)} />
                    <hr />
                    <button type='submit'>Iniciar sesion</button>
                </form>
            </div>
            {alert && <AlertDatosIncorrectos />}
        </div>
    )
}
