import {
  MUNICIPIOS,
  TIPOS_LUGAR,
  VISIBILIDADES,
  CATEGORIAS_CULTURALES,
  CAPAS,
} from '../data/placeTaxonomy.js'

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0
}

function isNumber(value) {
  return typeof value === 'number' && !Number.isNaN(value)
}

function isStringArray(value) {
  return Array.isArray(value) && value.every(isNonEmptyString)
}

function hasValidCoords(coords) {
  return Boolean(
    coords &&
    isNumber(coords.lat) &&
    isNumber(coords.lng)
  )
}

function everyValueInList(values, allowed) {
  return values.every(value => allowed.includes(value))
}

export function validatePlace(place) {
  const errors = []

  if (!place || typeof place !== 'object') {
    return ['El lugar debe ser un objeto válido']
  }

  if (!isNonEmptyString(String(place.id))) errors.push('id es obligatorio')
  if (!isNonEmptyString(place.slug)) errors.push('slug es obligatorio')
  if (!isNonEmptyString(place.nombre)) errors.push('nombre es obligatorio')
  if (!isNonEmptyString(place.municipio)) errors.push('municipio es obligatorio')
  if (!isNonEmptyString(place.barrio)) errors.push('barrio es obligatorio')
  if (!isNonEmptyString(place.tipoLugar)) errors.push('tipoLugar es obligatorio')
  if (!isNonEmptyString(place.visibilidad)) errors.push('visibilidad es obligatoria')
  if (!isNonEmptyString(place.descripcionBreve)) errors.push('descripcionBreve es obligatoria')
  if (!isNonEmptyString(place.historiaContexto)) errors.push('historiaContexto es obligatorio')
  if (!isNonEmptyString(place.relatoNarrativo)) errors.push('relatoNarrativo es obligatorio')

  if (!Array.isArray(place.imagenes)) errors.push('imagenes debe ser un arreglo')
  if (!Array.isArray(place.lugaresRelacionados)) errors.push('lugaresRelacionados debe ser un arreglo')
  if (!Array.isArray(place.bibliografia)) errors.push('bibliografia debe ser un arreglo')
  if (!Array.isArray(place.enlacesExternos)) errors.push('enlacesExternos debe ser un arreglo')
  if (!Array.isArray(place.categoriasCulturales)) errors.push('categoriasCulturales debe ser un arreglo')
  if (!Array.isArray(place.capas)) errors.push('capas debe ser un arreglo')
  if (!Array.isArray(place.tags)) errors.push('tags debe ser un arreglo')

  if (Array.isArray(place.categoriasCulturales) && !everyValueInList(place.categoriasCulturales, CATEGORIAS_CULTURALES)) {
    errors.push('categoriasCulturales contiene valores no permitidos')
  }

  if (Array.isArray(place.capas) && !everyValueInList(place.capas, CAPAS)) {
    errors.push('capas contiene valores no permitidos')
  }

  if (Array.isArray(place.tags) && !isStringArray(place.tags)) {
    errors.push('tags debe contener solo textos')
  }

  if (place.municipio && !MUNICIPIOS.includes(place.municipio)) {
    errors.push('municipio no permitido')
  }

  if (place.tipoLugar && !TIPOS_LUGAR.includes(place.tipoLugar)) {
    errors.push('tipoLugar no permitido')
  }

  if (place.visibilidad && !VISIBILIDADES.includes(place.visibilidad)) {
    errors.push('visibilidad no permitida')
  }

  if (!hasValidCoords(place.coords)) {
    errors.push('coords debe incluir lat y lng numéricos')
  }

  return errors
}

export function isValidPlace(place) {
  return validatePlace(place).length === 0
}
