import { Link } from 'react-router-dom'

export default function SiteCard({ sitio }) {
  const resumen = sitio.descripcionBreve || sitio.descripcion

  return (
    <article className="card">
      <img
        src={sitio.imagen}
        alt={sitio.nombre}
        onError={(e) => {
          e.currentTarget.src = '/images/placeholder.svg'
        }}
      />

      <div className="card-body">
        <h3>{sitio.nombre}</h3>
        <p className="muted">{sitio.direccion}</p>
        <p className="card-description">{resumen}</p>
        <Link className="btn" to={`/lugar/${sitio.id}`}>
          Ver más
        </Link>
      </div>
    </article>
  )
}
