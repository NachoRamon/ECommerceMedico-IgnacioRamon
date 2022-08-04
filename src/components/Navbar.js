import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'
const Navbar = () => {
  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand">Equipamientos Deluca</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/categorias" className="nav-link active">Categorias</Link>
          </li>
          <li className="nav-item">
            <Link to="/Contacto" className="nav-link active">Contacto</Link>
          </li>
        </ul>
        <CartWidget/>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
