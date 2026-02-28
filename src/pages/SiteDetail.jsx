// src/pages/SiteDetail.jsx
import { useParams, Link } from 'react-router-dom'
import sitios from '../data/sitios'
import MapView from '../components/MapView'

export default function SiteDetail() {
  const { id } = useParams()
  const sitio = sitios.find(s => String(s.id) === String(id))

  if (!sitio) {
    return (
      <main className="container">
        <p style={{ marginTop: 18 }}>
          No se encontró el lugar solicitado. <Link to="/">Volver al inicio</Link>
        </p>
      </main>
    )
  }

  const hasCoords = Boolean(sitio.coords && typeof sitio.coords.lat === 'number' && typeof sitio.coords.lng === 'number')

  return (
    <article className="detail">
      <Link to=".." relative="path" className="back">← Volver</Link>

      {/* Encabezado con portada y datos básicos */}
      <header className="detail-header">
        <img
          src={sitio.imagen}
          alt={sitio.nombre}
          className="detail-cover"
          onError={(e) => { e.currentTarget.src = '/images/placeholder.jpg' }}
        />
        <div>
          <h2 style={{ marginTop: 0 }}>{sitio.nombre}</h2>
          <p className="muted" style={{ margin: '6px 0 10px' }}>
            {sitio.direccion}{sitio.barrio ? ` · ` : ''}<em>{sitio.barrio}</em>
          </p>
          {sitio.horarios && (
            <p style={{ margin: 0 }}>
              <strong>Horarios:</strong> {sitio.horarios}
            </p>
          )}
        </div>
      </header>

      {/* Secciones de contenido */}
      {sitio.descripcion && (
        <section className="detail-section">
          <h3>Historia y relevancia</h3>
          <p>{sitio.descripcion}</p>
        </section>
      )}

      {sitio.oferta && (
        <section className="detail-section">
          <h3>Oferta cultural</h3>
          <p>{sitio.oferta}</p>
        </section>
      )}

      {sitio.valorIdentitario && (
        <section className="detail-section">
          <h3>Valor identitario</h3>
          <p>{sitio.valorIdentitario}</p>
        </section>
      )}

      {/* Mapa + botón "Cómo llegar" */}
      <section className="detail-section">
        <h3>Ubicación en el mapa</h3>

        <MapView
          sitios={hasCoords ? [sitio] : []}
          center={hasCoords ? [sitio.coords.lat, sitio.coords.lng] : [6.2442, -75.5812]} // Centro Medellín como fallback
          zoom={hasCoords ? 16 : 12}
        />

        {!hasCoords ? (
          <p className="map-hint" style={{ marginTop: 8 }}>
            Falta coordenada para este lugar. Agrega <code>coords: &#123; lat, lng &#125;</code> en <code>src/data/sitios.js</code>.
          </p>
        ) : (
          <a
            className="btn"
            href={`https://www.google.com/maps?q=${sitio.coords.lat},${sitio.coords.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: 10, display: 'inline-block' }}
          >
            Cómo llegar
          </a>
        )}
      </section>
    </article>
  )
}