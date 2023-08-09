import React, { useContext } from 'react'
import './ItemListaDeseos.css'
import { CarContext } from '../../Context/CarContext'

export default function ItemListaDeseos({ book,listaDeseos,setListaDeseos }) {

  function eliminarDeListaDeseos(book){
    let newLista = [...listaDeseos]
    let productoEliminado = newLista.filter(p => p.isbn !== book.isbn)
    localStorage.setItem("deseados", JSON.stringify(productoEliminado))
    setListaDeseos(productoEliminado)
  }

  const {agregarAlCarrito} = useContext(CarContext)
  const cantidad = 1


  return (
    <div className='item-deseo-container'>
        <img className='foto' src={book.cover} alt={book.title} />
        <i onClick={()=>{agregarAlCarrito(book,cantidad);eliminarDeListaDeseos(book)}} className="bi bi-cart2 carrito-deseo"></i>
    </div>
  )
}
