import React from 'react'
import { SecVideo } from './components/SecVideo'
import { Hero } from './components/Hero'

export const App = () => {
  return (
    <>
     <div className="header">

      <div className="text-center pt-2">
        <img 
          src="./src/assets/LogotipoV.png"   
          alt="Visumbrío Logo"
          className="logo-img"
        />
      </div>

      <nav className="nav justify-content-center mt-3 menu-principal">
        <a className="nav-link" href="#">Inicio</a>
        <a className="nav-link" href="#">Cómic</a>
        <a className="nav-link" href="#">Integrantes</a>
        <a className="nav-link" href="#">Tienda</a>
      </nav>

    </div>
    <Hero/>
    <SecVideo/>
    </>

  )
}
