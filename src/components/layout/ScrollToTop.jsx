import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AOS from 'aos'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    // Subir al inicio cuando cambia la ruta
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    // Recalcular posiciones de AOS después de pintar la nueva página.
    // El timeout pequeño asegura que el DOM ya tenga los nuevos elementos.
    const id = setTimeout(() => {
      AOS.refresh()
    }, 50)

    return () => clearTimeout(id)
  }, [pathname])

  return null
}
