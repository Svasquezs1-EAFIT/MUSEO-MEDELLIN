import { useMemo, useState } from 'react'
import sitiosData from '../data/places'
import MapView from '../components/MapView'
import SiteCard from '../components/SiteCard'
import FilterBar from '../components/filters/FilterBar'
import {
  MUNICIPIOS,
  TIPOS_LUGAR,
  VISIBILIDADES,
  CATEGORIAS_CULTURALES,
} from '../data/placeTaxonomy'
import { filterPlaces } from '../utils/filterPlaces'

export default function Home() {
  const [q, setQ] = useState('')
  const [municipio, setMunicipio] = useState('todos')
  const [tipoLugar, setTipoLugar] = useState('todos')
  const [visibilidad, setVisibilidad] = useState('todos')
  const [categoriaCultural, setCategoriaCultural] = useState('todos')

  const sitios = useMemo(() => {
    return filterPlaces(sitiosData, {
      q,
      municipio,
      tipoLugar,
      visibilidad,
      categoriaCultural,
    })
  }, [q, municipio, tipoLugar, visibilidad, categoriaCultural])

  function clearFilters() {
    setQ('')
    setMunicipio('todos')
    setTipoLugar('todos')
    setVisibilidad('todos')
    setCategoriaCultural('todos')
  }

  return (
    <section>
      <div className="hero">
        <h1>Museo Virtual Medellín</h1>
        <p>Explora espacios culturales de la ciudad: memoria, arte e identidad.</p>
      </div>

      <FilterBar
        q={q}
        municipio={municipio}
        tipoLugar={tipoLugar}
        visibilidad={visibilidad}
        categoriaCultural={categoriaCultural}
        municipios={MUNICIPIOS}
        tiposLugar={TIPOS_LUGAR}
        visibilidades={VISIBILIDADES}
        categoriasCulturales={CATEGORIAS_CULTURALES}
        onQueryChange={setQ}
        onMunicipioChange={setMunicipio}
        onTipoLugarChange={setTipoLugar}
        onVisibilidadChange={setVisibilidad}
        onCategoriaCulturalChange={setCategoriaCultural}
        onClear={clearFilters}
        resultsCount={sitios.length}
      />

      <MapView sitios={sitios} />

      {sitios.length === 0 ? (
        <div className="card">
          <div className="card-body">
            <h3>Sin resultados</h3>
            <p>No se encontraron lugares con los filtros actuales.</p>
          </div>
        </div>
      ) : (
        <div className="grid">
          {sitios.map((s) => (
            <SiteCard key={s.id} sitio={s} />
          ))}
        </div>
      )}
    </section>
  )
}
