import { Integrantes } from "../componentes/Integrantes";
import { Footer } from "../assets/Footer";


export const IntegrantesPage=()=>{


return (

<>


<section className="container text-center my-5">


<h2>
INTEGRANTES
</h2>


<Integrantes

nombre="Anlly Rojo"

imagenn="./src/assets/Foto.Anlly.png"

descripcion="Le apasiona crear historias que exploran la sociedad, identidad y decisiones humanas."

/>



<Integrantes

nombre="Nicoll Zapata"

imagenn="./src/assets/Foto.Nicoll.png"

descripcion="Le motiva construir historias que conecten lo narrativo con lo social."

/>


</section>


<Footer/>


</>

)

}















/*export const Integrantes = ({ nombre, imagenn, descripcion }) => {
  return (
    <div className="text-center">
      <div className="integrante-circle mx-auto">
        <img
          src={imagenn}
          alt={nombre}
          className="integrante-img"
        />
      </div>

      <h6 className="fw-bold mt-3">{nombre}</h6>
      <p className="text-muted small px-3">
        {descripcion}
      </p>
    </div>
  )
}*/