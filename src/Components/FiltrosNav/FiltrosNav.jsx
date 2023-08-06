import React from 'react'
import './FiltrosNav.css'
import { Link } from 'react-router-dom'

export default function FiltrosNav(){
  return (
    <div className='filtros-container'>
        <ul className='lista-filtros'>
        <li><Link className='item-nav-filter' to='/Libros/Todos'>Todos</Link></li>
            <li><Link className='item-nav-filter' to='/Libros/Terror'>Terror</Link></li>
            <li><Link className='item-nav-filter' to='/Libros/Ciencia ficción'>Ficción</Link></li>
            <li><Link className='item-nav-filter' to='/Libros/Zombies'>Zombies</Link></li>
            <li><Link className='item-nav-filter' to='/Libros/Fantasía'>Fantasía</Link></li>
        </ul>
    </div>
  )
}
