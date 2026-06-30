export const Integrantes = ({ nombre, imagenn, descripcion }) => {
  
  return (
    <div className="text-center integrante-card">
      <div className="integrante-circle mx-auto">
        <img
          src={imagenn}
          alt={nombre}
          className="integrante-img integrante-foto"
        />
      </div>

      <h6 className="fw-bold mt-3 integrante-nombre">{nombre}</h6>
      <p className="text-muted small px-3 integrante-descripcion">
        {descripcion}
      </p>
    </div>
  )
}