
export const Integrantes = ({ nombre, imagen, descripcion }) => {
  return (
    <div className="text-center">
      <div className="integrante-circle mx-auto">
        <img
          src={imagen}
          alt={nombre}
          className="integrante-img"
        />
      </div>

      <h6 className="fw-bold mt-3">{nombre}</h6>
      <p className="text-muted small px-3">
        {descripcion}
      </p>
    </div>
  )
}
