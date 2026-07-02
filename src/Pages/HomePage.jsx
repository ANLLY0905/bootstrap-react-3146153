import "../stylesheets/Home.css";
import { Footer } from "../assets/Footer";
import { Header } from "../Componentes/Header";
import img1 from "../assets/img1.png";
import ojo from "../assets/ojo.png";
import explorar from "../assets/explorar.png";
import ajustes from "../assets/ajustes.png";
import contextualizacion from "../assets/Contextualización.png";
import justificacion from "../assets/Justificación.png";


export const HomePage = () => {

return (

<>

<Header/>

<div className="container-fluid p-0">


<section className="container text-center my-5">

<p className="text px-lg-5">
Buscamos concienciar, entretener y enseñar sobre cómo la cultura, la identidad y la sociedad influyen en las decisiones humanas durante tiempos de crisis, mostrando sus efectos, desafíos y oportunidades para construir comunidades más informadas y resilientes.
</p>


<img className="img-fluid hero img1 mt-5"
src={img1}
/>

</section>



<section className="container text-center my-5">

<h3>
NUESTROS OBJETIVOS
</h3>


<div className="row g-4 mt-4">

<div className="col-md-4">
<div className="card-obj px-3 py-4">

<img className="tarjeta-img py-3"
src={ojo}
/>

<p>
Investigar y reflexionar sobre las acciones y dilemas éticos que enfrentan las personascuando la población mundial alcanza niveles insostenibles, destacando las implicaciones anivel social, económico y medioambiental.
</p>

</div>
</div>


<div className="col-md-4">
<div className="card-obj px-3 py-4">

<img className="tarjeta-img py-3"
src={explorar}
/>

<p>
Explorar la resiliencia humana y la capacidad de adaptación en tiempos de adversidad a través de testimonio de vida en casos reales.
</p>

</div>
</div>


<div className="col-md-4">

<div className="card-obj px-3 py-4">

<img  className="tarjeta-img3 py-3"
src={ajustes}
/>

<p>
Consolidar una recolección de referentes visuales que muestran la transformación de laidentidad en tiempos de crisis, con el fin de analizar la destrucción del entorno a causa de las crisis sociales.
</p>

</div>

</div>


</div>

</section>





<section className="container my-5">
  <div className="box p-5 rounded">
    <div className="row align-items-center">
      <div className="col-md-6">
        <h4 className="fw-bold text-white">
          Contextualización
        </h4>

        <p className="text-white">
          En tiempos de crisis, la cultura, la identidad y la sociedad cambian,
          reflejando la adaptación de las comunidades. La cultura actúa como
          resistencia y expresión, mientras que la identidad se redefine según
          las dinámicas sociales y mediáticas.
        </p>
      </div>

      <div className="col-md-6">
        <img
          src={contextualizacion}
          className="img-fluid contex"
        />
      </div>
    </div>
  </div>
</section>

<section className="container my-5">
  <div className="box p-5 rounded">
    <div className="row align-items-center">
      <div className="col-md-6">
        <h4 className="fw-bold text-white">
          Justificación
        </h4>

        <p className="text-white">
          Este proyecto surge ante la necesidad de analizar las decisiones
          humanas en situaciones extremas y cómo estas pueden verse
          influenciadas por la cultura, la identidad y la sociedad en tiempos
          de crisis.
        </p>
      </div>

      <div className="col-md-6">
        <img
          src={justificacion}
          className="img-fluid justi"
        />
      </div>
    </div>
  </div>
</section>





<section className="container text-center my-5">

<h4>
Desafíos que Analizamos
</h4>


<p className="mx-auto desafios-text">
       Muchas veces se pasa por alto cómo las decisiones y los intereses de los mandatarios pueden generar consecuencias negativas para la sociedad. Esta falta de conversación limita el pensamiento crítico y dificulta que las personas comprendan realmente lo que ocurre en momentos de crisis.
      </p>


</section>


</div>

<section className="barra-difuminada text-center">
    <p className="text-white mb-0">
        Si eres una persona con alto interés en temas sociales, culturales y en dinámicas de poder, esta página es para ti
    </p>
</section>

<Footer />
</>

)

}




































               