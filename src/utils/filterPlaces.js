export function filterPlaces(places, filters) {
  const {
    q = '',
    municipio = 'todos',
    tipoLugar = 'todos',
    visibilidad = 'todos',
    categoriaCultural = 'todos',
  } = filters

  const query = q.trim().toLowerCase()

  return places.filter((place) => {
    const searchableText = [
      place.nombre,
      place.descripcionBreve,
      place.descripcion,
      place.direccion,
      place.oferta,
      place.barrio,
      place.municipio,
      ...(Array.isArray(place.tags) ? place.tags : []),
      ...(Array.isArray(place.categoriasCulturales) ? place.categoriasCulturales : []),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()

    const matchesQuery = query === '' || searchableText.includes(query)
    const matchesMunicipio = municipio === 'todos' || place.municipio === municipio
    const matchesTipoLugar = tipoLugar === 'todos' || place.tipoLugar === tipoLugar
    const matchesVisibilidad = visibilidad === 'todos' || place.visibilidad === visibilidad
    const matchesCategoria =
      categoriaCultural === 'todos' ||
      (Array.isArray(place.categoriasCulturales) &&
        place.categoriasCulturales.includes(categoriaCultural))

    return (
      matchesQuery &&
      matchesMunicipio &&
      matchesTipoLugar &&
      matchesVisibilidad &&
      matchesCategoria
    )
  })
}
