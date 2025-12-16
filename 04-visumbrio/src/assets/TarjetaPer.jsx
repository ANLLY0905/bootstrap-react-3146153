
export const TarjetaPer = ({ nme, description, image, boton }) => {
    return (
        <div className="text-center">
            <div className="card character-card d-flex justify-content-center align-items-center">
                <img src={image} alt={nme} className="img-fluid character-img " />
            </div>


            <h5 className="fw-bold mt-3">{nme}</h5>
            <p className="text-muted small px-2">{description}</p>
        </div>
    )
}
