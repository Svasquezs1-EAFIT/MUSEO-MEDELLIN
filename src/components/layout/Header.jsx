import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/explorar', label: 'Explorar mapa' },
  { to: '/lugares', label: 'Lugares' },
  { to: '/historias', label: 'Historias' },
  { to: '/proyecto', label: 'Proyecto' },
]

export default function Header() {
  return (
    <header className="topbar">
      <Link to="/" className="logo">Museo Virtual Medellín</Link>

      <nav className="main-nav" aria-label="Navegación principal">
        {navItems.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end}>
            {({ isActive }) => (
              <span style={{ color: isActive ? '#4cc9f0' : '#fff' }}>{label}</span>
            )}
          </NavLink>
        ))}

        <a
          href="https://www.openstreetmap.org/copyright"
          target="_blank"
          rel="noopener noreferrer"
          className="osm-attribution"
          title="Atribución de datos del mapa"
        >
          Datos © OpenStreetMap
        </a>
      </nav>
    </header>
  )
}
