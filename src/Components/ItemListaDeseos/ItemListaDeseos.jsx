import React, { useContext, useEffect, useState } from 'react'
import './ItemListaDeseos.css'
import { CarContext } from '../../Context/CarContext'
import AlertAgregadoAlCarrito from '../AlertAgregadoAlCarrito/AlertAgregadoAlCarrito'

export default function ItemListaDeseos({ book,listaDeseos,setListaDeseos }) {

  function eliminarDeListaDeseos(book){
    let newLista = [...listaDeseos]
    let productoEliminado = newLista.filter(p => p.isbn !== book.isbn)
    localStorage.setItem("deseados", JSON.stringify(productoEliminado))
    setListaDeseos(productoEliminado)
  }

  const {agregarAlCarrito} = useContext(CarContext)
  const cantidad = 1

    // ALERTA DE CARRITO
    let [showAlert, setShowAlert] = useState(false)

    useEffect(() => {
      if (showAlert) {
        setTimeout(() => {
          setShowAlert(false)
        }, 3000);
      }
    }, [showAlert])
  
    function mostrarAlerta() {
      setShowAlert(true)
    }

  return (
    <div className='item-deseo-container'>
        <img className='foto' src={book.cover} alt={book.title} />
        <i onClick={()=>{agregarAlCarrito(book,cantidad);eliminarDeListaDeseos(book);mostrarAlerta()}} className="bi bi-cart2 carrito-deseo"></i>
        {showAlert && <AlertAgregadoAlCarrito book={book}/>}
    </div>
  )
}
