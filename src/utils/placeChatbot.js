import places from '../data/places.js'

function normalizeText(value = '') {
  return String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

function includesAny(text, words) {
  return words.some((word) => text.includes(normalizeText(word)))
}

function cleanSearchIntent(value = '') {
  return normalizeText(value)
    .replace(/^(que|qué)\s+(sabes|conoces|me\s+puedes\s+decir)\s+(de|del|sobre)\s+/, '')
    .replace(/^(donde|dónde)\s+(queda|esta|está)\s+/, '')
    .replace(/^horarios?\s+(de|del)\s+/, '')
    .replace(/^recomiendame\s+/, '')
    .replace(/^muestrame\s+/, '')
    .replace(/^lugares\s+(de|sobre)\s+/, '')
    .trim()
}

function getPlaceSearchText(place) {
  return normalizeText([
    place.nombre,
    place.slug,
    place.municipio,
    place.barrio,
    place.direccion,
    place.tipoLugar,
    place.visibilidad,
    place.descripcionBreve,
    place.historiaContexto,
    place.relatoNarrativo,
    place.ofertaCultural,
    place.valorIdentitario,
    ...(Array.isArray(place.tags) ? place.tags : []),
    ...(Array.isArray(place.categoriasCulturales) ? place.categoriasCulturales : []),
  ].filter(Boolean).join(' '))
}

function scorePlace(place, query) {
  const normalizedQuery = normalizeText(query)
  const cleanedQuery = cleanSearchIntent(query)
  const placeName = normalizeText(place.nombre)
  const searchText = getPlaceSearchText(place)

  const genericWords = new Set([
    'que',
    'sabes',
    'del',
    'de',
    'sobre',
    'museo',
    'lugar',
    'lugares',
    'sitio',
    'sitios',
    'donde',
    'queda',
    'esta',
    'está',
    'horario',
    'horarios',
    'recomiendame',
    'muestrame',
  ])

  const words = cleanedQuery
    .split(/\s+/)
    .filter((word) => word.length > 2 && !genericWords.has(word))

  let score = 0

  if (cleanedQuery && placeName === cleanedQuery) score += 100
  if (cleanedQuery && placeName.includes(cleanedQuery)) score += 60
  if (cleanedQuery && searchText.includes(cleanedQuery)) score += 20
  if (normalizedQuery.includes(placeName)) score += 80

  words.forEach((word) => {
    if (placeName.includes(word)) score += 12
    if (normalizeText(place.barrio).includes(word)) score += 4
    if (normalizeText(place.tipoLugar).includes(word)) score += 4
    if (searchText.includes(word)) score += 1
  })

  return score
}

function findBestPlace(query) {
  const scored = places
    .map((place) => ({
      place,
      score: scorePlace(place, query),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)

  return scored[0]?.score >= 12 ? scored[0].place : null
}

function findRelatedPlaces(query) {
  const normalizedQuery = normalizeText(query)

  const categoryMatches = places.filter((place) => {
    const categories = Array.isArray(place.categoriasCulturales)
      ? place.categoriasCulturales.map(normalizeText)
      : []

    const tags = Array.isArray(place.tags)
      ? place.tags.map(normalizeText)
      : []

    return (
      categories.some((category) => normalizedQuery.includes(category)) ||
      tags.some((tag) => normalizedQuery.includes(tag)) ||
      normalizedQuery.includes(normalizeText(place.tipoLugar)) ||
      normalizedQuery.includes(normalizeText(place.barrio))
    )
  })

  return categoryMatches.slice(0, 5)
}

function formatPlaceResponse(place, query) {
  const normalizedQuery = normalizeText(query)

  if (includesAny(normalizedQuery, ['horario', 'horarios', 'abre', 'abierto'])) {
    return {
      text: `${place.nombre}\n\nHorario: ${place.horarios || 'No tengo un horario registrado para este lugar.'}`,
      image: place.imagen,
      link: `/lugar/${place.id}`,
      linkLabel: 'Ver ficha completa',
    }
  }

  if (includesAny(normalizedQuery, ['donde', 'ubicacion', 'direccion', 'queda', 'llegar'])) {
    return {
      text: `${place.nombre}\n\nUbicación: ${place.direccion || 'No tengo una dirección registrada.'}\nBarrio/Zona: ${place.barrio || 'No registrado'}\nMunicipio: ${place.municipio || 'No registrado'}`,
      image: place.imagen,
      link: `/lugar/${place.id}`,
      linkLabel: 'Ver ficha completa',
    }
  }

  if (includesAny(normalizedQuery, ['oferta', 'actividades', 'hacer', 'programacion', 'cultural'])) {
    return {
      text: `${place.nombre}\n\nOferta cultural: ${place.ofertaCultural || place.oferta || 'No tengo oferta cultural registrada.'}`,
      image: place.imagen,
      link: `/lugar/${place.id}`,
      linkLabel: 'Ver ficha completa',
    }
  }

  return {
    text: `${place.nombre}\n\n${place.descripcionBreve}\n\nHistoria y contexto: ${place.historiaContexto}\n\nValor identitario: ${place.valorIdentitario}`,
    image: place.imagen,
    link: `/lugar/${place.id}`,
    linkLabel: 'Ver ficha completa',
  }
}

function formatRecommendations(matches, query) {
  const list = matches
    .map((place, index) => `${index + 1}. ${place.nombre} — ${place.barrio}. ${place.descripcionBreve}`)
    .join('\n\n')

  return {
    text: `Encontré estos lugares relacionados con tu búsqueda:\n\n${list}\n\nPuedes preguntarme por uno en específico, por ejemplo: “¿Dónde queda ${matches[0].nombre}?”`,
    image: matches[0]?.imagen || null,
  }
}

function getHelpResponse() {
  return {
    text: `Puedo ayudarte a explorar los lugares culturales del proyecto.\n\nPuedes preguntarme cosas como:\n\n- ¿Qué sabes del Museo de Antioquia?\n- ¿Dónde queda Parque Explora?\n- ¿Qué horarios tiene el Jardín Botánico?\n- Recomiéndame lugares de memoria\n- Muéstrame lugares de arte\n- Lugares de naturaleza\n- Lugares en el Centro\n\nActualmente tengo información de ${places.length} lugares.`,
    image: null,
  }
}

export function getPlaceChatbotResponse(userInput) {
  const input = normalizeText(userInput)

  if (!input) {
    return getHelpResponse()
  }

  if (includesAny(input, ['hola', 'buenas', 'ayuda', 'que puedes hacer', 'como funcionas'])) {
    return getHelpResponse()
  }

  if (includesAny(input, ['cuantos lugares', 'cantidad de lugares', 'total de lugares'])) {
    return {
      text: `Actualmente tengo información de ${places.length} lugares culturales e históricos de Medellín.`,
      image: null,
    }
  }

  const bestPlace = findBestPlace(input)

  if (bestPlace) {
    return formatPlaceResponse(bestPlace, userInput)
  }

  const relatedPlaces = findRelatedPlaces(input)

  if (relatedPlaces.length > 0) {
    return formatRecommendations(relatedPlaces, userInput)
  }

  return {
    text: `No encontré un lugar exacto con esa búsqueda.\n\nPuedes intentar con nombres como “Museo de Antioquia”, “Parque Explora”, “Jardín Botánico”, “Parque Arví” o con temas como “arte”, “memoria”, “naturaleza”, “ciencia”, “arquitectura” o “Centro”.`,
    image: null,
  }
}
