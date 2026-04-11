import legacySitios from './sitios.js'
import { validatePlace } from '../utils/validatePlace.js'

function slugify(text) {
  return String(text)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function inferTipoLugar(sitio) {
  const text = `${sitio.nombre} ${sitio.descripcion} ${sitio.oferta}`.toLowerCase()

  if (text.includes('teatro')) return 'artístico'
  if (text.includes('arte moderno')) return 'artístico'
  if (text.includes('memoria')) return 'histórico'
  if (text.includes('cementerio')) return 'histórico'
  if (text.includes('palacio')) return 'histórico'
  if (text.includes('museo del agua')) return 'comunitario'

  return 'histórico'
}

function inferCategoriasCulturales(sitio) {
  const text = `${sitio.nombre} ${sitio.descripcion} ${sitio.oferta} ${sitio.valorIdentitario}`.toLowerCase()
  const categorias = new Set()

  if (text.includes('memoria') || text.includes('historia') || text.includes('patrimonio')) {
    categorias.add('memoria')
  }

  if (text.includes('arte') || text.includes('mural') || text.includes('exposiciones') || text.includes('museo')) {
    categorias.add('arte')
  }

  if (text.includes('teatro') || text.includes('danza') || text.includes('música') || text.includes('musica')) {
    categorias.add('música')
  }

  if (categorias.size === 0) {
    categorias.add('memoria')
  }

  return Array.from(categorias)
}

function inferCapas(categorias) {
  const capas = new Set()

  if (categorias.includes('memoria')) capas.add('memoria-historica')
  if (categorias.includes('arte')) capas.add('arte-urbano')
  if (categorias.includes('música')) capas.add('cultura-cotidiana')

  if (capas.size === 0) {
    capas.add('cultura-cotidiana')
  }

  return Array.from(capas)
}

function buildRelatoNarrativo(sitio) {
  return `${sitio.nombre} se integra a la memoria cultural de ${sitio.barrio}, donde su presencia conecta patrimonio, vida urbana e identidad local. Hoy funciona como un punto de encuentro entre visitantes, relatos de ciudad y experiencias culturales.`
}

export const places = legacySitios.map((sitio) => {
  const categoriasCulturales = inferCategoriasCulturales(sitio)
  const imagenes = sitio.imagen ? [sitio.imagen] : []

  return {
    id: String(sitio.id),
    slug: slugify(sitio.nombre),
    nombre: sitio.nombre,
    municipio: 'Medellín',
    barrio: sitio.barrio,
    tipoLugar: inferTipoLugar(sitio),
    visibilidad: 'popular',
    categoriasCulturales,
    capas: inferCapas(categoriasCulturales),
    descripcionBreve: sitio.descripcion,
    historiaContexto: sitio.descripcion,
    relatoNarrativo: buildRelatoNarrativo(sitio),
    imagenes,
    coords: sitio.coords,
    lugaresRelacionados: [],
    bibliografia: [],
    enlacesExternos: [],
    tags: [sitio.barrio, ...categoriasCulturales],

    // Compatibilidad temporal con componentes actuales
    direccion: sitio.direccion,
    horarios: sitio.horarios,
    descripcion: sitio.descripcion,
    oferta: sitio.oferta,
    valorIdentitario: sitio.valorIdentitario,
    imagen: imagenes[0] || '/images/placeholder.jpg',
  }
})

export const invalidPlaces = places
  .map((place) => ({
    id: place.id,
    nombre: place.nombre,
    errors: validatePlace(place),
  }))
  .filter((item) => item.errors.length > 0)

export default places
