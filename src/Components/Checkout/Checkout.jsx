import React from 'react'
import './Checkout.css'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom/dist/react-router-dom.production.min'



export default function Checkout() {

    let datosComprador = JSON.parse(sessionStorage.getItem("datosComprador")) || []

    const { register, handleSubmit } = useForm()

    const navigate = useNavigate()

    function enviar(data) {
        datosComprador = []
        datosComprador.push(data)
        sessionStorage.setItem("datosComprador", JSON.stringify(datosComprador))
        navigate('/Compra-finalizada')
    }


    return (
        <div className='contenedor-formulario'>
            <form className="datos-destinatario">
                <div className='form-datos'>
                    <p className='form-title'>Datos del destinatario</p>
                    <input type="text" placeholder='Nombre' {...register('nombre',{required:true})}  />
                    <input type="text" placeholder='Apellido' {...register('apellido',{required:true})} />
                    <input type="number" placeholder='Telefono' {...register('telefono',{required:true})} />
                    <input type="number" placeholder='DNI' {...register('dni',{required:true})} />
                    <input type="email" placeholder='Correo' {...register('email',{required:true})} />
                </div>
                <div className='form-domicilio'>
                    <p className='form-title'>Domicilio del destinatario</p>
                    <input type="text" placeholder='Calle' {...register('calle',{required:true})} />
                    <input type="number" placeholder='Altura' {...register('altura',{required:true})} />
                    <input type="text" placeholder='Ciudad' {...register('ciudad',{required:true})} />
                    <input type="number" placeholder='Codigo Postal' {...register('cp',{required:true})} />
                    <input type="text" placeholder='Referencias' {...register('referencias')} />
                </div>
            </form>
            <button className='submit-comprar' onClick={handleSubmit(enviar)} type='submit'>Compra</button>
        </div>
    )
}
