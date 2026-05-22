import Dropdown from './Dropdown'

export default function FilterBar({
  q,
  municipio,
  tipoLugar,
  visibilidad,
  categoriaCultural,
  municipios,
  tiposLugar,
  visibilidades,
  categoriasCulturales,
  onQueryChange,
  onMunicipioChange,
  onTipoLugarChange,
  onVisibilidadChange,
  onCategoriaCulturalChange,
  onClear,
  resultsCount,
}) {
  /* Helper: arma las opciones añadiendo una opción "todos" al inicio */
  const buildOptions = (items, allLabel) => [
    { value: 'todos', label: allLabel },
    ...items.map((item) => ({ value: item, label: item })),
  ]

  return (
    <>
      <div className="filters">
        <input
          type="search"
          placeholder="Buscar por nombre, oferta, dirección, categoría…"
          value={q}
          onChange={(e) => onQueryChange(e.target.value)}
        />

        <Dropdown
          ariaLabel="Filtrar por municipio"
          value={municipio}
          onChange={onMunicipioChange}
          options={buildOptions(municipios, 'Todos los municipios')}
        />

        <Dropdown
          ariaLabel="Filtrar por tipo de lugar"
          value={tipoLugar}
          onChange={onTipoLugarChange}
          options={buildOptions(tiposLugar, 'Todos los tipos')}
        />

        <Dropdown
          ariaLabel="Filtrar por visibilidad"
          value={visibilidad}
          onChange={onVisibilidadChange}
          options={buildOptions(visibilidades, 'Todas las visibilidades')}
        />

        <Dropdown
          ariaLabel="Filtrar por categoría cultural"
          value={categoriaCultural}
          onChange={onCategoriaCulturalChange}
          options={buildOptions(categoriasCulturales, 'Todas las categorías')}
        />

        <button type="button" className="btn" onClick={onClear}>
          Limpiar filtros
        </button>
      </div>

      <p className="muted" style={{ margin: '0 0 12px' }}>
        {resultsCount} resultado{resultsCount === 1 ? '' : 's'} encontrados
      </p>
    </>
  )
}
