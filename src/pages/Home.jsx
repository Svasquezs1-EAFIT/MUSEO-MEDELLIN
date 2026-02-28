import { useMemo, useState } from 'react'
import sitiosData from '../data/sitios'
import MapView from '../components/MapView'
import SiteCard from '../components/SiteCard'

export default function Home() {
  const [q, setQ] = useState('')
  const [barrio, setBarrio] = useState('todos')

  const barrios = useMemo(() => ['todos', ...new Set(sitiosData.map(s => s.barrio))], [])
  const sitios = useMemo(() => {
    return sitiosData.filter(s => {
      const okText = (s.nombre + ' ' + s.descripcion + ' ' + s.direccion + ' ' + s.oferta)
        .toLowerCase().includes(q.toLowerCase())
      const okBarrio = barrio === 'todos' || s.barrio === barrio
      return okText && okBarrio
    })
  }, [q, barrio])

  return (
    <section>
      <div className="hero">
        <h1>Museo Virtual Medellín</h1>
        <p>Explora espacios culturales de la ciudad: memoria, arte e identidad.</p>
      </div>

      <div className="filters">
        <input
          type="search"
          placeholder="Buscar por nombre, oferta, dirección…"
          value={q}
          onChange={e => setQ(e.target.value)}
        />
        <select value={barrio} onChange={e => setBarrio(e.target.value)}>
          {barrios.map(b => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>

      <MapView sitios={sitios} />

      <div className="grid">
        {sitios.map(s => <SiteCard key={s.id} sitio={s} />)}
      </div>
    </section>
  )
}