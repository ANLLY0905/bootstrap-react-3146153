import "../stylesheets/Home.css"
import { Header } from "../Componentes/Header";
import { Footer } from "../assets/Footer";
import { Tienda } from "../Componentes/Tienda";

export const TiendaPage = () => {
  return (

    <>
      <Header />

      <Tienda />

      <Footer />
      </>
  )
}