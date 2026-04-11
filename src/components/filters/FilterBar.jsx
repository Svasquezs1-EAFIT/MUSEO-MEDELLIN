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
  return (
    <>
      <div className="filters">
        <input
          type="search"
          placeholder="Buscar por nombre, oferta, dirección, categoría…"
          value={q}
          onChange={(e) => onQueryChange(e.target.value)}
        />

        <select value={municipio} onChange={(e) => onMunicipioChange(e.target.value)}>
          <option value="todos">Todos los municipios</option>
          {municipios.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select value={tipoLugar} onChange={(e) => onTipoLugarChange(e.target.value)}>
          <option value="todos">Todos los tipos</option>
          {tiposLugar.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select value={visibilidad} onChange={(e) => onVisibilidadChange(e.target.value)}>
          <option value="todos">Todas las visibilidades</option>
          {visibilidades.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          value={categoriaCultural}
          onChange={(e) => onCategoriaCulturalChange(e.target.value)}
        >
          <option value="todos">Todas las categorías</option>
          {categoriasCulturales.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

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
