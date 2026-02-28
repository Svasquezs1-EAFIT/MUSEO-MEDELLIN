// src/components/MapView.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { Link } from 'react-router-dom'

// Fix de iconos por defecto (necesario en Vite/Webpack)
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

L.Icon.Default.mergeOptions({
  iconUrl,
  iconRetinaUrl,
  shadowUrl,
})

/**
 * Componente de mapa reutilizable.
 * @param {Object} props
 * @param {Array} props.sitios - Array de lugares con al menos { id, nombre, direccion, coords: { lat, lng } }
 * @param {[number, number]} props.center - Centro del mapa [lat, lng]. Por defecto, centro aproximado de Medellín.
 * @param {number} props.zoom - Nivel de zoom inicial. Por defecto 12.
 */
export default function MapView({ sitios, center = [6.2442, -75.5812], zoom = 12 }) {
  const sitiosConCoords = Array.isArray(sitios)
    ? sitios.filter(
        (s) =>
          s?.coords &&
          typeof s.coords.lat === 'number' &&
          typeof s.coords.lng === 'number'
      )
    : []

  return (
    <div className="map-wrapper">
      <MapContainer center={center} zoom={zoom} style={{ height: '420px', width: '100%' }}>
        {/* Capa base: OpenStreetMap (con atribución requerida) */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution={
            'Map data © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
          }
        />

        {/* Marcadores */}
        {sitiosConCoords.map((s) => (
          <Marker key={s.id} position={[s.coords.lat, s.coords.lng]}>
            <Popup>
              <strong>{s.nombre}</strong>
              <br />
              {s.direccion}
              <br />
              <Link to={`/lugar/${s.id}`} style={{ textDecoration: 'underline' }}>
                Ver ficha
              </Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Mensaje si no hay coordenadas válidas */}
      {sitiosConCoords.length === 0 && (
        <p className="map-hint" style={{ marginTop: 8 }}>
          Agrega coordenadas a tus fichas para ver marcadores en el mapa.
        </p>
      )}
    </div>
  )
}