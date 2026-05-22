import places from '../data/places'
import SiteCard from '../components/SiteCard'

export default function PlacesPage() {
  return (
    <section data-aos="fade-up">
      <div className="hero">
        <h1>Lugares</h1>
        <p>Explora el catálogo actual de lugares culturales e históricos.</p>
      </div>

      <div className="grid">
        {places.map((sitio) => (
          <div key={sitio.id} data-aos="fade-up">
            <SiteCard sitio={sitio} />
          </div>
        ))}
      </div>
    </section>
  )
}
