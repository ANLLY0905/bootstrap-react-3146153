
export const Comic = ({ nme, description, image, imagen}) => {
    
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
}
    