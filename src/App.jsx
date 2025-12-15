import './App.css';
import { TarjetaPer } from "./assets/TarjetaPer";
import { VideoSec } from "./assets/VideoSec";
import { Integrantes } from './assets/Integrantes';
import { Footer } from './assets/Footer';



export const App = () => {
    return (
        <div className="container-fluid p-0">

            <div className="header">

                <div className="text-center pt-2 px-3">
                    <img
                        src="./src/assets/Logo.svg"
                        alt="Visumbrío Logo"
                        className="logo-img"
                    />
                </div>

                <nav className="nav flex-column flex-md-row justify-content-center align-items-center mt-3 menu-principal">
                    <a className="nav-link" href="#">Inicio</a>
                    <a className="nav-link" href="#">Cómic</a>
                    <a className="nav-link" href="#">Integrantes</a>
                    <a className="nav-link" href="#">Tienda</a>
                </nav>

            </div>


            <section className="container text-center mt-5">
                <p className="text-muted px-3 px-md-5">
                    Este cómic relata hechos políticos oscuros donde una élite política crea una nueva especie para acabar con una población en específico. Todo se sale de control y ahora la humanidad debe sobrevivir a lo desconocido.
                </p>
            </section>

            <section className="container text-center my-5">
                <h2 className="fw-bold mb-1">PERSONAJES</h2>
                <p className="text-muted mt-3">Explora a los protagonistas y su papel en el desarrollo de esta historia.</p>


                <div className="row justify-content-center mt-4 g-4">
                    <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                        <TarjetaPer
                            nme="DREXON"
                            image="./src/assets/Drekxon.1.svg"
                            description="Criatura creada artificialmente. No siente, no ve... solo caza por sonido. Es la mayor amenaza de la humanidad, un arma disfrazada de invasión."
                        />
                    </div>


                    <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                        <TarjetaPer
                            nme="EMILIA"
                            image="./src/assets/Emilia.svg"
                            description="Estudiante de medicina brillante y decidida. Busca salvar vidas, pero descubre que parte de su investigación fue usada para crear a los Drekxon."
                        />
                    </div>


                    <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                        <TarjetaPer
                            nme="KIAN"
                            image="./src/assets/Kian Frente.svg"
                            description="Joven ingeniero marcado por la pérdida. Reservado y racional, pero valiente. Cuando el mundo colapsa, su mayor fuerza será proteger lo que ama."
                        />
                    </div>
                </div>
            </section>

            <section className="container mt-5">
                <h2 className="text-center fw-bold mt-4 mb-4">
                    Conoce nuestro cómic
                </h2>

                <VideoSec image="./src/assets/VerComic.svg" />

                <p className="text-center mt-4">
                    En plena crisis, la población aprende a ocultarse, adaptarse y luchar
                    contra la nueva especie que pone en riesgo su existencia.
                </p>

                <div className="d-flex justify-content-center mt-4">
                    <button className="btn btn-dark px-4">
                        Ir al cómic
                    </button>
                </div>
            </section>




                <section className="barra-difuminada text-center mt-5">
                <p className="text-white mb-0">
                    Si eres una persona con alto interés en temas sociales, culturales y en dinámicas de poder, esta página es para ti
                </p>
            </section>




                   <Footer />



               <div className="header">

                <div className="text-center pt-2 px-3">
                    <img
                        src="./src/assets/Logo.svg"
                        alt="Visumbrío Logo"
                        className="logo-img"
                    />
                </div>

                <nav className="nav flex-column flex-md-row justify-content-center align-items-center mt-3 menu-principal">
                    <a className="nav-link" href="#">Inicio</a>
                    <a className="nav-link" href="#">Cómic</a>
                    <a className="nav-link" href="#">Integrantes</a>
                    <a className="nav-link" href="#">Tienda</a>
                </nav>

            </div>





            <section className="container text-center mt-5">
                <p className="text-muted px-5">
                    Somos un grupo apasionado por entender cómo la cultura, la identidad y la sociedad cambian y se adaptan en tiempos de crisis.
                </p>
            </section>





            <section className="container text-center my-5">

                <h2 className="fw-bold mb-2">INTEGRANTES</h2>

                <p className="text-muted px-5 mt-5">
                    Te presentamos a quienes dan vida a este proyecto, compartiendo su visión
                    y pasión por comprender las transformaciones sociales en momentos difíciles.
                </p>

                <div className="row justify-content-center g-5">

                    <div className="col-md-4">
                        <Integrantes
                            nombre="Anlly Rojo"
                            imagen="./src/assets/Foto.Anlly.png"
                            descripcion="Le apasiona crear historias que exploran la sociedad, la identidad y las decisiones humanas en realidades complejas, buscando generar reflexión y conexión emocional a través de la narrativa visual y digital."
                        />
                    </div>

                    <div className="col-md-4">
                        <Integrantes
                            nombre="Nicoll Zapata"
                            imagen="./src/assets/Foto.Nicoll.png"
                            descripcion="Le motiva construir historias que conecten lo narrativo con lo social, explorando los cambios culturales y las tensiones humanas en tiempos difíciles. Su trabajo busca ofrecer una experiencia inmersiva que trascienda el cómic tradicional."
                        />
                    </div>

                </div>

            </section>





            <section className="barra-difuminada text-center">
                <p className="text-white mb-0">
                    Si eres una persona con alto interés en temas sociales, culturales y en dinámicas de poder, esta página es para ti
                </p>
            </section>


            <Footer />



        </div>
    )
}

