import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/lugares', label: 'Lugares' },
  { to: '/historias', label: 'Historias' },
  { to: '/proyecto', label: 'Proyecto' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  // Cerrar el menú al cambiar de ruta
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="topbar">
      <Link to="/" className="logo" onClick={closeMenu}>
        Museo Virtual Medellín
      </Link>

      {/* Botón hamburguesa: solo visible en móviles */}
      <button
        type="button"
        className={`nav-toggle ${isOpen ? 'is-open' : ''}`}
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isOpen}
        aria-controls="main-navigation"
        onClick={toggleMenu}
      >
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
      </button>

      <nav
        id="main-navigation"
        className={`main-nav ${isOpen ? 'is-open' : ''}`}
        aria-label="Navegación principal"
      >
        {navItems.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end} onClick={closeMenu}>
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
          onClick={closeMenu}
        >
          Datos © OpenStreetMap
        </a>
      </nav>

      {/* Backdrop oscuro detrás del menú móvil */}
      {isOpen && <div className="nav-backdrop" onClick={closeMenu} />}
    </header>
  )
}
