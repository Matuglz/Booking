import React from 'react'
import './FiltrosNav.css'
import { Link } from 'react-router-dom'

export default function FiltrosNav() {
  return (
    <div className='filtros-container'>
        <ul className='lista-filtros'>
        <li><Link to='/Libros'>Todos</Link></li>
            <li><Link to='/Libros/Terror'>Terror</Link></li>
            <li><Link to='/Libros/Ciencia-Ficcion'>Ciencia ficcion</Link></li>
            <li><Link to='/Libros/Zombies'>Zombies</Link></li>
            <li><Link to='/Libros/Fantasia'>Fantasia</Link></li>
        </ul>
    </div>
  )
}
