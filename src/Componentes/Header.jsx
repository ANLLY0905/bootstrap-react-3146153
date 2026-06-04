  
import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
      <div className="header">

                <div className="text-center pt-2 px-3">
                    <img
                        src="./src/assets/Logo.png"
                        alt="Visumbrío Logo"
                        className="logo-img" />
                </div>

                <nav className="nav flex-column flex-md-row justify-content-center align-items-center mt-3 menu-principal">
                    <Link className="nav-link" to="/">Inicio</Link>
                    <Link className="nav-link" to="/comic">Cómic</Link>
                    <Link className="nav-link" to="/integrantes">Integrantes</Link>
                    <Link className="nav-link" to="/tienda">Tienda</Link>
                </nav>
      </div>
  )
}
