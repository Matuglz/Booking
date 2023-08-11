import React, { useEffect, useState } from 'react'
import './CheckCorazon.css'
import AlertAgregadoADeseo from '../AlertAgregadoADeseo/AlertAgregadoADeseo'


export default function CheckCorazon({ book }) {


    const librosDeseados = JSON.parse(localStorage.getItem("deseados")) || []

    const [listaDeseo, setListaDeseo] = useState(librosDeseados)

    const isBookInList = listaDeseo.some(item => item.isbn === book.isbn)

    const [isChecked, setIsChecked] = useState(isBookInList);

    //ALERTA DE DESEO
    let [showAlertDeseo, setShowAlertDeseo] = useState(false)

    function mostrarAlertaDeseo() {
        if (isChecked === false) {
            setShowAlertDeseo(true)
            setTimeout(() => {
                setShowAlertDeseo(false)
            }, 2000);
        }
    }


    function agregarLibroDeseo(book) {
        if (isChecked === false) {
            let libro = { ...book }
            let newLista = [...listaDeseo, libro]
            setListaDeseo(newLista)
            localStorage.setItem("deseados", JSON.stringify(newLista))
            setIsChecked(true)
        }
        else {
            let libro = book.isbn
            let newLista = [...listaDeseo]
            let libroBorrado = newLista.filter(book => book.isbn !== libro)
            setListaDeseo(libroBorrado)
            localStorage.setItem("deseados", JSON.stringify(libroBorrado))
            setIsChecked(false)
        }
    }
    //--------------------------------------------------------------------------------------


    useEffect(() => {
        setIsChecked(isBookInList)
    }, [isBookInList])

    return (
        <div className='arroz'>
            <input id='heart' type="checkbox" defaultChecked={isChecked} onClick={() => { agregarLibroDeseo(book); mostrarAlertaDeseo() }} />
            <label className="bi bi-suit-heart-fill heart" for="heart"></label>
            {showAlertDeseo && <AlertAgregadoADeseo />}
        </div>
    )
}
