import React from 'react';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import MovieContainer from './Components/MovieContainer/MovieContainer';
import Nav from './Components/Nav/Nav';
import Info from './Components/Info/Info';
import Footer from './Components/Footer/Footer';
import BookDetailContainer from './Components/BookDetailContainer/BookDetailContainer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<Info />} />
      <Route path='/Libros/:categoria' element={<MovieContainer />} />
      <Route path='/Libro/:id' element={<BookDetailContainer/>}/>
    </Routes>
    <Footer />
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
