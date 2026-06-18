
export const Comic = ({ nme, description, image, video}) => {
    
    return (
        <>

        
        {video ? (

            <div className="video-wrapper mx-auto position-relative">

                <video
                    src={video}
                    className="img-fluid video-img"
                    controls
                    autoPlay
                    muted
                    loop
                />

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
    