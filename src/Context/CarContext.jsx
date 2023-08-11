import React,{useEffect, useState} from 'react'
import { createContext } from "react";


export const CarContext = createContext()

const carritoInicial  = JSON.parse(localStorage.getItem("carrito")) || []

export default function CarProvider({ children }) {

    const [login,setLogin] = useState(false)

    const [carrito, setCarrito] = useState(carritoInicial)

    function agregarAlCarrito(item, cantidad) {
        const itemAgregado = { ...item, cantidad }
        const nuevoCarrito = [...carrito]
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.isbn === itemAgregado.isbn)
        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad
        } else {
            nuevoCarrito.push(itemAgregado)
        }
        setCarrito(nuevoCarrito)
    }

    //Muestra la cantidad de items en el carrito
    const cantidadEnElCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    }


    //Borrar item del carrito
    function borrarItem(isbn) {
        let index = carrito.filter(p => p.isbn !== isbn)
        setCarrito(index)
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])
    


    let [showAlert, setShowAlert] = useState(true)

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
        <CarContext.Provider value={{login,setLogin, carrito, setCarrito, agregarAlCarrito, cantidadEnElCarrito, borrarItem,mostrarAlerta,showAlert }}>
            {children}
        </CarContext.Provider>
    )
}
