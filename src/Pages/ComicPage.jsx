import { Comic } from "../componentes/Comic";
import { Footer } from "../assets/Footer";


export const ComicPage =()=>{


return (

<>


<section className="container text-center my-5">


<h2>
PERSONAJES
</h2>


<Comic

nme="DREKXON"
image="./src/assets/Drekxon.1.svg"
description="Criatura creada artificialmente. No siente, no ve... solo caza por sonido."

/>


<Comic

nme="EMILIA"
image="./src/assets/Emilia.svg"
description="Estudiante de medicina brillante y decidida."

/>



<Comic

nme="KIAN"
image="./src/assets/Kian Frente.svg"
description="Joven ingeniero marcado por la pérdida."

/>



</section>




<section className="container text-center">


<h2>
Conoce nuestro cómic
</h2>


<Comic imagen="./src/assets/VerComic.svg"/>


<p>
En plena crisis, la población aprende a ocultarse y luchar.
</p>


</section>



<Footer/>


</>

)

}

































/*export const Comic = ({ nme, description, image, imagen}) => {
    
    return (
        <>

        
        {imagen ? (

            <div className="video-wrapper mx-auto position-relative">

                <img
                    src={imagen}
                    className="img-fluid video-img"
                />

                <div className="play-overlay d-flex justify-content-center align-items-center">
                    <i className="bi bi-play-fill video-play-icon"></i>
                </div>

            </div>

        ) : (

            <div className="text-center">

                <div className="card character-card d-flex justify-content-center align-items-center">

                    <img 
                        src={image}
                        alt={nme}
                        className="img-fluid character-img"
                    />

                </div>


                <h5 className="fw-bold mt-3">
                    {nme}
                </h5>


                <p className="text-muted small px-2">
                    {description}
                </p>

            </div>

        )}
        </>
    )
}*/
    
    
    
    
