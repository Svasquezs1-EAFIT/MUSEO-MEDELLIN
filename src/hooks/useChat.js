import { useState } from 'react'
import { getPlaceChatbotResponse } from '../utils/placeChatbot'

export const useChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: '¡Hola! Soy el guía virtual de Museo Virtual Medellín. Puedo ayudarte con información sobre lugares, horarios, ubicación, categorías culturales y recomendaciones. ¿Qué lugar quieres explorar?',
      sender: 'bot',
    },
  ])

  const sendMessage = (userInput) => {
    if (!userInput.trim()) return

    const newUserMessage = {
      id: Date.now(),
      text: userInput,
      sender: 'user',
    }

    setMessages((prev) => [...prev, newUserMessage])

    const response = getPlaceChatbotResponse(userInput)

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: response.text,
        sender: 'bot',
        image: response.image || null,
        link: response.link || null,
        linkLabel: response.linkLabel || null,
      }

      setMessages((prev) => [...prev, botResponse])
    }, 500)
  }

  return { messages, sendMessage }
}
