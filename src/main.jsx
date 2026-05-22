import React from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./styles.css"

// ⚠️ Necesario para que los íconos y el mapa se vean bien
import "leaflet/dist/leaflet.css"

AOS.init({
  duration: 700,

  // Offset más generoso para que la animación se dispare antes
  // (mejora la percepción al subir y bajar)
  offset: 120,

  // Animar tanto al bajar como al subir (NO una sola vez)
  once: false,

  // Reanimar al salir del viewport por arriba
  mirror: true,

  // Curva de aceleración suave
  easing: 'ease-out-cubic',

  // Trigger cuando el TOP del elemento toca el CENTRO del viewport.
  // Esto hace que la animación se note tanto al bajar como al subir.
  anchorPlacement: 'top-center',

  // Rendimiento
  throttleDelay: 99,
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)