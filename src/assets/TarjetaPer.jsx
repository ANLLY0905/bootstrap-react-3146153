
export const TarjetaPer = ({ nme, description, image }) => {
    return (
        <div className="text-center">
            {/* Cuadro con imagen */}
            <div className="card character-card d-flex justify-content-center align-items-center">
                <img src={image} alt={nme} className="img-fluid character-img" />
            </div>


            {/* Texto debajo del cuadro */}
            <h5 className="fw-bold mt-3">{nme}</h5>
            <p className="text-muted small px-2">{description}</p>
        </div>
    )
}
