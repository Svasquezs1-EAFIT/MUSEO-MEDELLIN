import { useState } from 'react';
import { MUSEUMS, KEYWORDS } from '../data/museumData'; // Asegúrate de que la ruta sea correcta

export const useChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "¡Hola! Soy el guía virtual de los museos de Medellín. ¿Sobre qué museo quieres información?", sender: 'bot' }
  ]);

  const sendMessage = (userInput) => {
    if (!userInput.trim()) return;

    // 1. Agregar mensaje del usuario al chat
    const newUserMessage = { id: Date.now(), text: userInput, sender: 'user' };
    setMessages(prev => [...prev, newUserMessage]);

    // 2. Procesar la respuesta
    const inputCleaned = userInput.toLowerCase();
    let responseText = "Lo siento, solo tengo información sobre el Museo de Antioquia, El Castillo y el Palacio de la Cultura. ¿Te gustaría saber de alguno de ellos?";
    let museumKey = null;

    // Buscar si alguna palabra clave está en el mensaje del usuario
    for (let key in KEYWORDS) {
      if (inputCleaned.includes(key)) {
        museumKey = KEYWORDS[key];
        break;
      }
    }

    if (museumKey) {
      const info = MUSEUMS[museumKey];
      responseText = `${info.name}: ${info.description} Puedes visitarlo en el horario: ${info.schedule}`;
    }

    // 3. Simular un pequeño retraso para que parezca natural y agregar respuesta del bot
    setTimeout(() => {
      const botResponse = { 
        id: Date.now() + 1, 
        text: responseText, 
        sender: 'bot',
        image: museumKey ? MUSEUMS[museumKey].image : null // Opcional: enviar imagen si se encuentra el museo
      };
      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  return { messages, sendMessage };
};