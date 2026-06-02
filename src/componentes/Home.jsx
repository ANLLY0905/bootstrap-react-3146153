
import "../stylesheets/Home.css"

export const Home = ({titulo, imagen1, imagen2, imagen3, texto1, texto2, texto3}) => {
  return (
    <><section className="container text-center my-5">
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

          </section></>
    );
}