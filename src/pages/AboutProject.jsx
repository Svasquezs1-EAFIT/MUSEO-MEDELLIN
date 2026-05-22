import { Link } from 'react-router-dom'

export default function AboutProject() {
  return (
    <section data-aos="fade-up">
      <div className="hero">
        <h1>Proyecto</h1>
        <p>
          Museo Virtual Medellín es una iniciativa para explorar lugares culturales e históricos
          desde una experiencia digital con mapa, fichas y recursos narrativos.
        </p>
      </div>

      <div className="grid">
        <article className="card" data-aos="fade-up">
          <div className="card-body">
            <h3>Guía de desarrollo</h3>
            <p>Consulta el documento base del proyecto y su orientación de trabajo.</p>
            <Link className="btn" to="/documento">Ver documento</Link>
          </div>
        </article>

        <article className="card" data-aos="fade-up" data-aos-delay="100">
          <div className="card-body">
            <h3>Antioquia 2040</h3>
            <p>Accede al documento de referencia complementario para el proyecto.</p>
            <Link className="btn" to="/documento2">Ver documento</Link>
          </div>
        </article>
      </div>
    </section>
  )
}
