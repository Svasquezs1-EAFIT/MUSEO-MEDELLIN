import { Link } from 'react-router-dom'

export default function SiteCard({ sitio }) {
  return (
    <article className="card">
      <img src={sitio.imagen} alt={sitio.nombre} onError={(e)=>{e.currentTarget.src='/images/placeholder.jpg'}} />
      <div className="card-body">
        <h3>{sitio.nombre}</h3>
        <p className="muted">{sitio.direccion}</p>
        <p>{sitio.descripcion}</p>
        <Link className="btn" to={`/lugar/${sitio.id}`}>Ver más</Link>
      </div>
    </article>
  )
}