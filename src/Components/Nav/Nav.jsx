import React,{useState} from 'react'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'
import './Nav.css'
import CarritoWidget from '../CarritoWidget/CarritoWidget';

export default function Nav() {
    const [menuVisible, setMenuVisible] = useState(false);

    function showMenu() {
        setMenuVisible(true);
    }

    function hideMenu() {
        setMenuVisible(false);
    }                    <h2 >Reading</h2>
    return (
        <div >
            <div className='oferta'><p className='texto-oferta'>ENVIO GRATIS A PARTIR DE $20.000</p></div>
            <div className='nav'>
                <Link className={`logo ${menuVisible === false ? '' : 'd-none'}`} to='/'>
                    <img src={logo} alt="logo" />
                    </Link>
                    <Link className={`titulo-ma ${menuVisible === false ? '' : 'd-none'}`} to='/'>
                    <h2 >Reading</h2>
                    </Link>
                <ul className='ul-menu'>
                    <li><Link className='menu-link' to='/Libros/Todos'>Libros |</Link></li>
                    <li><Link className='menu-link' to='/Sucursales'> Sucursales |</Link></li>
                    <li><Link className='menu-link' to='/Contacto'> Contacto</Link></li>
                </ul>
                <ul className='ul-item'>
                    <li><Link className='item-link' to='/Account'><i className="bi bi-person-circle"></i></Link></li>
                    <li><Link className='item-link' to='/Lista-de-deseos'><i className="bi bi-bookmark-heart"></i></Link></li>
                    <li><CarritoWidget/></li>
                </ul>


                {/* -------------------------------- */}
                <button className={`boton-abrir-menu ${menuVisible === false ? '' : 'd-none'}`} onClick={showMenu}><i className="bi bi-list"></i></button>
                <div className={`burger-menu ${menuVisible ? '' : 'd-none'}`}>
                    <div className='burger-header'>
                        <button onClick={hideMenu}><i className="bi bi-x"></i></button>
                    </div>
                    <hr />
                    <ul className='burger-list' onClick={hideMenu}>
                        <li><Link to="/"><img className='logo-burger' src={logo} alt="logo" /></Link></li>
                        <li><Link className='burger-link' to='/Libros/Todos'>Libros</Link></li>
                        <li><Link className='burger-link' to='/Sucursales'> Sucursales</Link></li>
                        <li><Link className='burger-link' to='/Contacto'> Contacto</Link></li>
                        <li><Link className='burger-link burger-i' to='/Account'><i className="bi bi-person-circle"></i><p>Iniciar sesion</p></Link></li>
                        <li><Link className='burger-link burger-i' to='/Lista-de-deseos'><i className="bi bi-bookmark-heart"></i><p>Lista de deseos</p></Link></li>
                        <li><CarritoWidget/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
