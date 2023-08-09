import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Autenticacion() {

    const {register, handleSubmit} = useForm()

    const [contraseña, setContraseña] =useState("")
    const [contraseña2, setContraseña2] = useState("")

    function enviar(data){
        if(data.value === ""){
            console.log("error");
        }
    }

  return (
    <div>
        <div>
        <h2>Inicia Sesion</h2>
        <form action='register' onSubmit={handleSubmit(enviar)}>
            <input type="email" placeholder='Introduce tu correo' {...register('correo', {setValueAs:(value) => value.toLowerCase()})}/>
            <input type="password" placeholder='Constraseña' {...register('contraseña')} onChange={(e)=> setContraseña(e.currentTarget.value)}/>
            <input type="password" placeholder='Confirmar contraseña' {...register('contraseña2')} onChange={(e)=> setContraseña2(e.currentTarget.value)}/>
            <hr />
            {contraseña === contraseña2 ? <button type='submit'>iniciar sesion</button> : <div>las contraseñas no coinciden</div>}
        </form>
        <button>¿olvidaste tu contraseña?</button>
        <button>Crear cuenta</button>
        </div>
    </div>
  )
}
