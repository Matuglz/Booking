import React from 'react'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import MovieContainer from './Components/MovieContainer/MovieContainer';
import Nav from './Components/Nav/Nav';
import Info from './Components/Info/Info';
import Footer from './Components/Footer/Footer';
import BookDetailContainer from './Components/BookDetailContainer/BookDetailContainer';
import CarProvider from './Context/CarContext';
import Carrito from './Components/Carrito/Carrito';

export default function App() {

    return (
        <div>

            <CarProvider>
                <BrowserRouter>
                    <Nav />
                    <Routes>
                        <Route path='/' element={<Info />} />
                        <Route path='/Libros/:categoria' element={<MovieContainer />} />
                        <Route path='/Libro/:id' element={<BookDetailContainer />} />
                        <Route path='/Carrito' element={<Carrito/>}/>
                    </Routes>
                    <Footer />
                </BrowserRouter>
                </CarProvider>
        </div>
    )
}
