import React from 'react'
import './Footer.css'
import { useForm } from 'react-hook-form'

export default function Footer() {

    const {register, handleSubmit} = useForm()

    function enviar(data) {
        console.log(data);
    }

  return (
    <footer className='footer'>
        <div>
        <h2 className='titulo-footer'>¡Recibi avisos cuando entran nuevos libros!</h2>
        <form action="Suscribirse" className='formulario' onSubmit={handleSubmit(enviar)}>
            <input className='input-email' type="email" placeholder='Email' {...register('Email')}/>
            <button type='submit' className='input-button'>Suscribirse</button>
        </form>
        </div>
    </footer>
  )
}
