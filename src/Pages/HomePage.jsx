import "../stylesheets/Home.css";
import { Footer } from "../assets/Footer";

export const Home = () => {

return (

<>

<div className="container-fluid p-0">


<section className="container text-center my-5">

<p className="text px-lg-5">
Buscamos concienciar, entretener y enseñar sobre cómo la cultura, la identidad y la sociedad influyen en las decisiones humanas durante tiempos de crisis, mostrando sus efectos, desafíos y oportunidades para construir comunidades más informadas y resilientes.
</p>


<img 
src="./src/assets/primera.png"
className="img-fluid hero"
/>

</section>



<section className="container text-center my-5">

<h3>
NUESTROS OBJETIVOS
</h3>


<div className="row g-4">

<div className="col-md-4">
<div className="card-obj px-3 py-4">

<img 
src="./src/assets/ojo.png"
className="tarjeta-img"
/>

<p>
Investigar y reflexionar sobre las acciones y dilemas éticos que enfrentan las personas cuando la población mundial alcanza niveles insostenibles.
</p>

</div>
</div>


<div className="col-md-4">
<div className="card-obj px-3 py-4">

<img 
src="./src/assets/explorar.png"
className="tarjeta-img"
/>

<p>
Explorar la resiliencia humana y la capacidad de adaptación en tiempos de adversidad.
</p>

</div>
</div>


<div className="col-md-4">

<div className="card-obj px-3 py-4">

<img 
src="./src/assets/ajustes.png"
className="tarjeta-img"
/>

<p>
Analizar la transformación de la identidad en tiempos de crisis sociales.
</p>

</div>

</div>


</div>

</section>





<section className="container my-5">

<div className="box p-5 rounded">


<h4 className="fw-bold text-white">
Contextualización
</h4>


<p className="text-white">

En tiempos de crisis, la cultura, la identidad y la sociedad cambian, reflejando la adaptación de las comunidades.

</p>


<img src="./src/assets/image1.png" className="img-fluid"/>


</div>

</section>





<section className="container my-5">

<div className="box p-5 rounded">


<h4 className="fw-bold text-white">
Justificación
</h4>


<p className="text-white">

Este proyecto surge ante la necesidad de analizar las decisiones humanas en situaciones extremas y cómo estas pueden verse influenciadas por la cultura, identidad y sociedad.

</p>


<img src="./src/assets/image2.png" className="img-fluid"/>


</div>

</section>





<section className="container text-center my-5">

<h4>
Desafíos que Analizamos
</h4>


<p>

Muchas veces se pasa por alto cómo las decisiones y los intereses de los mandatarios pueden generar consecuencias negativas para la sociedad.

</p>

</section>


</div>


<Footer/>

</>

)

}












































/*import "../stylesheets/Home.css"

export const Home = ({titulo, imagen1, imagen2, imagen3, texto1, texto2, texto3}) => {
  return (
   <><div className="container-fluid p-0">
          <div className="header">

              <div className="text-center pt-2 px-3">
                  <img
                      src="./src/assets/Logo.png"
                      alt="Visumbrío Logo"
                      className="logo-img" />
              </div>

              <nav className="nav flex-column flex-md-row justify-content-center align-items-center mt-3 menu-principal">
                  <a className="nav-link" href="#">Inicio</a>
                  <a className="nav-link" href="#">Cómic</a>
                  <a className="nav-link" href="#">Integrantes</a>
                  <a className="nav-link" href="#">Tienda</a>
              </nav>

          </div>

          <section className="container text-center my-5">
              <p className=" text px-lg-5">
                  Buscamos concienciar, entretener y enseñar sobre cómo la cultura, la identidad y la sociedad influyen en las decisiones humanas durante tiempos de crisis, mostrando sus efectos, desafíos y oportunidades para construir comunidades más informadas y resilientes.
              </p>

              <div className="main-image mt-5 text-center">
                  <img src="./src/assets/primera.png" className="img-fluid hero" />
              </div>
          </section><section className="container text-center my-5">
              <h3 className="mb-4">{titulo}</h3>
              <div className="row g-4">
                  <div className="col-md-4">
                      <div className="card-obj px-3 py-4 ">
                          <img className="tarjeta-img py-3" src={imagen1} alt="" />
                          <p>{texto1}</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="card-obj px-3 py-4">
                          <img className="tarjeta-img py-5" src={imagen2} alt="" />
                          <p>{texto2}</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                      <div className="card-obj px-3 py-4">
                          <img className="tarjeta-img3 py-5" src={imagen3} alt="" />
                          <p>{texto3}</p>
                      </div>
                  </div>
              </div>
          </section><section className="container my-5">
              <div className="box p-5 rounded">
                  <div className="row align-items-center">

                      <div className="col-md-6 text-white text-center">
                          <h4 className="fw-bold">Contextualización</h4>
                          <p>
                              En tiempos de crisis, la cultura, la identidad y la sociedad cambian, reflejando la adaptación de las comunidades. La cultura actúa como resistencia y expresión, mientras que la identidad se redefine según las dinámicas sociales y mediáticas.
                          </p>
                          <button className="leer btn-sm">Leer más</button>
                      </div>

                      <div className="col-md-6 mt-4 mt-md-0">
                          <img src="./src/assets/image1.png" className="img-fluid rounded" alt="" />
                      </div>

                  </div>
              </div>
          </section><section className="container my-5">
              <div className="box p-5 rounded">
                  <div className="row align-items-center">

                      <div className="col-md-6 order-2 order-md-1 mt-4 mt-md-0">
                          <img src="./src/assets/image2.png" className="img-fluid rounded" alt="" />
                      </div>

                      <div className="col-md-6 text-white text-center order-1 order-md-2">
                          <h4 className="fw-bold">Justificación</h4>
                          <p>
                              Este proyecto surge ante la necesidad de analizar las decisiones humanas en situaciones extremas y cómo estas pueden verse influenciadas por la cultura, la identidad y la sociedad en tiempos de crisis.
                          </p>
                          <button className="leer btn-sm">Leer más</button>
                      </div>

                  </div>
              </div>
          </section><section className="container text-center my-5 desafios-section">
              <h4 className="fw-bold">Desafíos que Analizamos</h4>

              <p className="mx-auto desafios-text">
                  Muchas veces se pasa por alto cómo las decisiones y los intereses de los mandatarios pueden generar consecuencias negativas para la sociedad. Esta falta de conversación limita el pensamiento crítico y dificulta que las personas comprendan realmente lo que ocurre en momentos de crisis.
              </p>

          </section>

      </div><footer className="footer-visumbrio">

              <div className="footer-icons">
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-twitter-x"></i>
                  <i className="bi bi-facebook"></i>
              </div>

              <div className="footer-links">
                  <span>Ayuda</span>
                  <span className="divider">|</span>
                  <span>Términos</span>
                  <span className="divider">|</span>
                  <span>Privacidad</span>
              </div>

              <p className="footer-copy">
                  © 2024 VISUMBRIO. All rights reserved.
              </p>

          </footer></>
    );
}*/