import { useNavigate } from "react-router-dom";
import { Comic } from "../Componentes/Comic";
import { Footer } from "../assets/Footer";
import { Header } from "../Componentes/Header";


export const ComicPage =()=>{
    const navigate = useNavigate();

return (

<>

<Header/>


<section className="container text-center my-5">


<p className="text-muted px-3 px-md-5">
                    Este cómic relata hechos políticos oscuros donde una élite política crea una nueva especie para acabar con una población en específico. Todo se sale de control y ahora la humanidad debe sobrevivir a lo desconocido.
                </p>

 </section><section className="container text-center my-5">
                <h2 className="fw-bold mb-1">PERSONAJES</h2>
                <p className="text-muted mt-3">Explora a los protagonistas y su papel en el desarrollo de esta historia.</p>


                <div className="row justify-content-center mt-4 g-4">
                    <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                        <Comic
                            nme="DREKXON"
                            image="./src/assets/Drekxon.1.svg"
                            description="Criatura creada artificialmente. No siente, no ve... solo caza por sonido. Es la mayor amenaza de la humanidad, un arma disfrazada de invasión." />
                    </div>


                    <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                        <Comic
                            nme="EMILIA"
                            image="./src/assets/Emilia.svg"
                            description="Estudiante de medicina brillante y decidida. Busca salvar vidas, pero descubre que parte de su investigación fue usada para crear a los Drekxon." />
                    </div>


                    <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                        <Comic
                            nme="KIAN"
                            image="./src/assets/Kian Frente.svg"
                            description="Joven ingeniero marcado por la pérdida. Reservado y racional, pero valiente. Cuando el mundo colapsa, su mayor fuerza será proteger lo que ama." />
                    </div>
                </div>
            </section><section className="container mt-5">
                <h2 className="text-center fw-bold mt-4 mb-4">
                    Conoce nuestro cómic
                </h2>

                <Comic 
                
                video="./src/assets/Teaser.mp4" />

                <p className="text-center mt-4">
                    En plena crisis, la población aprende a ocultarse, adaptarse y luchar
                    contra la nueva especie que pone en riesgo su existencia.
                </p>

                <div className="d-flex justify-content-center mt-4">
                    <button className="btn btn-dark px-4" onClick={() => navigate("/comic/portada")}>
                        Ir al cómic
                    </button>
                </div>
            </section><section className="barra-difuminada text-center mt-5">
                <p className="text-white mb-0">
                    Si eres una persona con alto interés en temas sociales, culturales y en dinámicas de poder, esta página es para ti
                </p>
            </section>
            
            <Footer />

</>

)

}


































    
    
    
