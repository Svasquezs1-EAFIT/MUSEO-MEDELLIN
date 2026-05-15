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
  duration: 900,
  once: true,
  offset: 80,
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)