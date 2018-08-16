import React from 'react'
import whatsapplogo from './images/whatsapp.png'
import facebooklogo from './images/facebook.png'
import './Navbar.css'
const Navbar = () => {

return ( 
<nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top justify-content-center" style={{'z-index': '1000'}}>
    <a href="/" className="navbar-brand d-flex w-50 mr-auto">GRETSER</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
        <ul className="navbar-nav w-100 justify-content-center">
        {/*
            <li className="nav-item active">
                <a className="nav-link" href="/">Inicio</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="/">Acerca</a>
            </li> */
        }
            <li className="nav-item">
                <a className="nav-link" href="/">Productos en Venta</a>
            </li>
        </ul>
        <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
              <span className="navbar-text">{`Consultas/Compras ----->>>`}</span>
              <li className="nav-item">
                <a href="https://wa.me/14792220203" target="_blank" rel="noopener  noreferrer">
                <img src={whatsapplogo} width="40" height="40" alt="whatsapp"/>
                </a>
              </li>
              {/*
              <li className="nav-item">
                <a href="https://www.facebook.com/gretser.social/" target="_blank" rel="noopener noreferrer">
                <img src={facebooklogo} width="60" height="40" alt="fb"/>
                </a>
              </li>
                */
              }
        </ul>
    </div>
</nav>

);
}

export default Navbar;