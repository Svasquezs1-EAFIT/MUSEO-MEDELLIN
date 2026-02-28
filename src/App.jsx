// src/App.jsx
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import SiteDetail from './pages/SiteDetail'
import PdfPage from './pages/PdfPage' // Si aún no la tienes, puedes comentar esta línea y su <Route />

export default function App() {
  return (
    <div className="app">
      {/* Barra superior */}
      <header className="topbar">
        <Link to="/" className="logo">Museo Virtual Medellín</Link>

        <nav style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <NavLink to="/" end>
            {({ isActive }) => (
              <span style={{ color: isActive ? '#4cc9f0' : '#fff' }}>Inicio</span>
            )}
          </NavLink>

          <NavLink to="/documento">
            {({ isActive }) => (
              <span style={{ color: isActive ? '#4cc9f0' : '#fff' }}>Documento (PDF)</span>
            )}
          </NavLink>

          {/* Atribución requerida a OpenStreetMap */}
          <a
            href="https://www.openstreetmap.org/copyright"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#8b9099', textDecoration: 'none', marginLeft: 8 }}
            title="Atribución de datos del mapa"
          >
            Datos © OpenStreetMap
          </a>
        </nav>
      </header>

      {/* Contenido principal con enrutamiento */}
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lugar/:id" element={<SiteDetail />} />
          <Route path="/documento" element={<PdfPage />} />
          {/* Si no usarás la página del PDF aún, elimina o comenta la línea anterior */}
        </Routes>
      </main>

      {/* Pie de página */}
      <footer className="footer">
        <small>
          Proyecto educativo · React + Leaflet · {new Date().getFullYear()}
        </small>
      </footer>
    </div>
  )
}

