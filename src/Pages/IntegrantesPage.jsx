import { Integrantes } from "../Componentes/Integrantes";
import { Footer } from "../assets/Footer";
import { Header } from "../Componentes/Header";


export const IntegrantesPage=()=>{


return (

<>
<Header/>

<section className="container text-center mt-5">

    <h2 className="fw-bold mb-5">INTEGRANTES</h2>
  <p className="text-muted px-5">
    Somos un grupo apasionado por entender cómo la cultura, la identidad y la sociedad cambian y se adaptan en tiempos de crisis.
  </p>

    <p className="text-muted px-5">
      Te presentamos a quienes dan vida a este proyecto, compartiendo su visión
      y pasión por comprender las transformaciones sociales en momentos difíciles.
    </p>

    <div className="row justify-content-center g-5">

      <div className="col-md-4 p-4">
        <Integrantes
          nombre="Anlly Rojo"
          imagenn="./src/assets/Foto.Anlly.png"
          descripcion="Le apasiona crear historias que exploran la sociedad, la identidad y las decisiones humanas en realidades complejas, buscando generar reflexión y conexión emocional a través de la narrativa visual y digital." />
      </div>

      <div className="col-md-4 p-4">
        <Integrantes
          nombre="Nicoll Zapata"
          imagenn="./src/assets/Foto.Nicoll.png"
          descripcion="Le motiva construir historias que conecten lo narrativo con lo social, explorando los cambios culturales y las tensiones humanas en tiempos difíciles. Su trabajo busca ofrecer una experiencia inmersiva que trascienda el cómic tradicional." />
      </div>

    </div>

  </section><section className="barra-difuminada text-center">
    <p className="text-white mb-0">
      Si eres una persona con alto interés en temas sociales, culturales y en dinámicas de poder, esta página es para ti
    </p>
  </section>
  
  <Footer />
</>

)

}







