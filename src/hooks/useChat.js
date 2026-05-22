import { useState } from 'react'
import { MUSEUMS, INTENTIONS, SUB_INTENTIONS } from '../data/museumData'

/* =========================================================
   UTILIDADES DE TEXTO
   ========================================================= */

/**
 * Normaliza un texto: lo pasa a minúsculas, le quita tildes,
 * signos de puntuación y reduce espacios múltiples a uno.
 */
function normalize(text) {
  return text
    .toLowerCase()
    .normalize('NFD')                  // separa letra base del acento
    .replace(/[\u0300-\u036f]/g, '')   // elimina los acentos
    .replace(/[¿?¡!.,;:"'()]/g, ' ')   // elimina puntuación
    .replace(/\s+/g, ' ')              // colapsa espacios
    .trim()
}

/**
 * Distancia de Levenshtein:
 * cuenta cuántas inserciones, borrados o sustituciones
 * de UNA letra hacen falta para convertir 'a' en 'b'.
 *
 *   levenshtein("castiyo", "castillo") -> 2
 *   levenshtein("explorra", "explora") -> 1
 *   levenshtein("botero", "boterro")   -> 1
 */
function levenshtein(a, b) {
  if (a === b) return 0
  if (!a.length) return b.length
  if (!b.length) return a.length

  // matriz de (a.length+1) x (b.length+1)
  const matrix = Array.from({ length: a.length + 1 }, () =>
    new Array(b.length + 1).fill(0)
  )

  for (let i = 0; i <= a.length; i++) matrix[i][0] = i
  for (let j = 0; j <= b.length; j++) matrix[0][j] = j

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,        // borrado
        matrix[i][j - 1] + 1,        // inserción
        matrix[i - 1][j - 1] + cost  // sustitución
      )
    }
  }

  return matrix[a.length][b.length]
}

/**
 * Umbral de error tolerable según el largo de la palabra.
 * Estricto para palabras cortas (donde 1 letra cambia el significado).
 */
function tolerance(word) {
  if (word.length <= 3) return 0   // 3 letras o menos: match exacto obligatorio
  if (word.length <= 5) return 1
  if (word.length <= 8) return 2
  return 3
}

/**
 * ¿La palabra del usuario "se parece lo suficiente"
 * a alguna palabra del tag?
 */
function wordMatchesTag(userWord, tag) {
  // Si el tag tiene varias palabras, comparar el conjunto completo y cada parte
  const tagWords = tag.split(' ')

  // Match exacto en cualquier parte
  if (tagWords.includes(userWord)) return true

  // Fuzzy match contra cada palabra del tag
  for (const tw of tagWords) {
    if (Math.abs(tw.length - userWord.length) > 3) continue
    if (levenshtein(userWord, tw) <= tolerance(tw)) return true
  }

  return false
}

/* =========================================================
   DETECTORES DE INTENCIÓN
   ========================================================= */

/**
 * Devuelve true si la frase normalizada contiene alguna
 * de las expresiones de la lista.
 */
function containsAny(text, expressions) {
  return expressions.some((expr) => text.includes(expr))
}

/**
 * Palabras muy comunes que NO deben usarse para matching
 * (preposiciones, artículos, verbos auxiliares, palabras de pregunta).
 */
const STOPWORDS = new Set([
  'que', 'cual', 'cuales', 'como', 'donde', 'cuando', 'cuanto', 'cuantos',
  'para', 'por', 'con', 'sin', 'sobre', 'entre', 'desde', 'hasta',
  'los', 'las', 'una', 'unos', 'unas', 'del', 'mas', 'pero',
  'esta', 'este', 'esto', 'esa', 'ese', 'eso',
  'quiero', 'busco', 'puedo', 'tengo', 'hace', 'hacer', 'hora', 'horas',
  'abre', 'cierra', 'abierto', 'cerrado', 'gratis', 'precio', 'costo',
  'queda', 'esta', 'ubicado', 'ubicada', 'visitar', 'visita',
  'info', 'informacion', 'cuentame', 'dime', 'hablame', 'ver',
])

/**
 * Encuentra los museos que coinciden con el input del usuario.
 * Cada museo recibe un puntaje según cuántos tags acertó y qué tan exactos fueron.
 * Devuelve el de mayor puntaje (o null si nada pasa el umbral).
 */
function findMuseum(normalizedInput) {
  const userWords = normalizedInput
    .split(' ')
    .filter((w) => w.length > 2 && !STOPWORDS.has(w))

  if (userWords.length === 0) return null

  let bestKey = null
  let bestScore = 0

  for (const [key, museum] of Object.entries(MUSEUMS)) {
    let score = 0

    for (const tag of museum.tags) {
      // 1. Match de frase completa (ej. "casa de la memoria") -> peso alto
      if (tag.includes(' ') && normalizedInput.includes(tag)) {
        score += 10
        continue
      }

      // 2. Match palabra a palabra (con tolerancia a errores)
      for (const word of userWords) {
        if (wordMatchesTag(word, tag)) {
          // Match exacto pesa más que fuzzy
          score += tag === word ? 5 : 3
          break
        }
      }
    }

    if (score > bestScore) {
      bestScore = score
      bestKey = key
    }
  }

  // Umbral mínimo: 5 = al menos un match exacto o dos fuzzy
  return bestScore >= 5 ? bestKey : null
}

/**
 * Detecta si el usuario pregunta específicamente por horario,
 * ubicación o precio. Devuelve la sub-intención o null.
 */
function detectSubIntention(normalizedInput) {
  if (containsAny(normalizedInput, SUB_INTENTIONS.HORARIO)) return 'HORARIO'
  if (containsAny(normalizedInput, SUB_INTENTIONS.UBICACION)) return 'UBICACION'
  if (containsAny(normalizedInput, SUB_INTENTIONS.PRECIO)) return 'PRECIO'
  return null
}

/**
 * Cuando no se identifica ningún museo, sugiere los lugares
 * cuyos nombres más se parezcan a lo que escribió el usuario.
 */
function suggestSimilar(normalizedInput) {
  const userWords = normalizedInput.split(' ').filter((w) => w.length > 2)

  const scored = Object.values(MUSEUMS).map((museum) => {
    const normalizedName = normalize(museum.name)
    let minDistance = Infinity

    for (const userWord of userWords) {
      for (const nameWord of normalizedName.split(' ')) {
        if (nameWord.length < 4) continue
        const d = levenshtein(userWord, nameWord)
        if (d < minDistance) minDistance = d
      }
    }

    return { name: museum.name, distance: minDistance }
  })

  // Ordenar de menor a mayor distancia, tomar los 3 más cercanos
  return scored
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 3)
    .map((m) => m.name)
}

/* =========================================================
   CONSTRUCCIÓN DE LA RESPUESTA
   ========================================================= */

function buildMuseumResponse(museumKey, subIntention) {
  const info = MUSEUMS[museumKey]

  // Respuestas específicas
  if (subIntention === 'HORARIO') {
    return {
      text: `🕐 Horario de ${info.name}:\n\n${info.schedule}`,
      image: info.image,
    }
  }

  if (subIntention === 'UBICACION') {
    return {
      text: `📍 Dirección de ${info.name}:\n\n${info.address}`,
      image: info.image,
    }
  }

  if (subIntention === 'PRECIO') {
    return {
      text: `🎟️ Entrada en ${info.name}:\n\n${info.price}`,
      image: info.image,
    }
  }

  // Respuesta general (sin sub-intención específica)
  const fullText =
    `✨ ${info.name}\n\n` +
    `${info.description}\n\n` +
    `🕐 Horario: ${info.schedule}\n` +
    `📍 Dirección: ${info.address}\n` +
    `🎟️ Entrada: ${info.price}`

  return { text: fullText, image: info.image }
}

/* =========================================================
   HOOK PRINCIPAL
   ========================================================= */

export const useChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: '¡Hola! Soy tu guía virtual de Medellín. ¿Quieres conocer la lista de lugares disponibles o buscas información sobre alguno en especial?',
      sender: 'bot',
    },
  ])

  const sendMessage = (userInput) => {
    const text = userInput.trim()
    if (!text) return

    // Mensaje del usuario
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), text, sender: 'user' },
    ])

    const cleanInput = normalize(text)

    setTimeout(() => {
      let responseText = ''
      let responseImage = null

      // 1. Saludo
      if (containsAny(cleanInput, INTENTIONS.SALUDO)) {
        responseText =
          '¡Hola! Qué alegría saludarte. Estoy aquí para darte toda la información sobre los museos y parques de la ciudad. ¿Por dónde quieres empezar?'
      }
      // 2. Despedida / agradecimiento
      else if (containsAny(cleanInput, INTENTIONS.DESPEDIDA)) {
        responseText =
          '¡Con mucho gusto! Espero que disfrutes mucho de Medellín. Si tienes más preguntas, aquí estaré.'
      }
      // 3. Pide la lista completa
      else if (containsAny(cleanInput, INTENTIONS.LISTADO)) {
        const listado = Object.values(MUSEUMS)
          .map((m) => `• ${m.name}`)
          .join('\n')
        responseText = `Actualmente puedo darte información sobre estos ${
          Object.keys(MUSEUMS).length
        } lugares:\n\n${listado}\n\n¿Cuál de ellos te interesa conocer?`
      }
      // 4. Busca un museo específico
      else {
        const museumKey = findMuseum(cleanInput)

        if (museumKey) {
          const subIntention = detectSubIntention(cleanInput)
          const response = buildMuseumResponse(museumKey, subIntention)
          responseText = response.text
          responseImage = response.image
        } else {
          // 5. No se entendió: sugerir los más parecidos
          const suggestions = suggestSimilar(cleanInput).join(', ')
          responseText =
            'No estoy seguro de a qué lugar te refieres. 🤔\n\n' +
            `¿Quisiste decir alguno de estos?: ${suggestions}\n\n` +
            'También puedes escribir "ver todos" para mostrarte la lista completa.'
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: responseText,
          sender: 'bot',
          image: responseImage,
        },
      ])
    }, 600)
  }

  return { messages, sendMessage }
}