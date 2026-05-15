import { useState } from 'react';
import { MUSEUMS, KEYWORDS, INTENTIONS } from '../data/museumData';

export const useChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "¡Hola! Soy tu guía virtual de Medellín. ¿Quieres conocer la lista de lugares disponibles o buscas información sobre alguno en especial?", sender: 'bot' }
  ]);

  const sendMessage = (userInput) => {
    const text = userInput.trim();
    if (!text) return;

    // Agregar mensaje del usuario al historial
    setMessages(prev => [...prev, { id: Date.now(), text, sender: 'user' }]);

    const cleanInput = text.toLowerCase();

    setTimeout(() => {
      let responseText = "";
      let responseImage = null;

      // 1. ANTICIPACIÓN: ¿Es un saludo?
      if (INTENTIONS.SALUDO.some(s => cleanInput.includes(s))) {
        responseText = "¡Hola! Qué alegría saludarte. Estoy aquí para darte toda la información sobre los museos y parques de la ciudad. ¿Por dónde quieres empezar?";
      } 
      // 2. ANTICIPACIÓN: ¿Es una despedida o agradecimiento?
      else if (INTENTIONS.DESPEDIDA.some(d => cleanInput.includes(d))) {
        responseText = "¡Con mucho gusto! Espero que disfrutes mucho de Medellín. Si tienes más preguntas, aquí estaré.";
      }
      // 3. ANTICIPACIÓN: ¿Pide la lista de todos los lugares?
      else if (INTENTIONS.LISTADO.some(l => cleanInput.includes(l))) {
        const listado = Object.values(MUSEUMS).map(m => `• ${m.name}`).join("\n");
        responseText = `Actualmente puedo darte información sobre estos 13 lugares:\n\n${listado}\n\n¿Cuál de ellos te interesa conocer?`;
      }
      // 4. Búsqueda de Museo Específico
      else {
        let museumKey = null;
        for (let key in KEYWORDS) {
          if (cleanInput.includes(key)) {
            museumKey = KEYWORDS[key];
            break;
          }
        }

        if (museumKey) {
          const info = MUSEUMS[museumKey];
          responseText = `${info.name}: ${info.description}\n\n📍 Horario: ${info.schedule}`;
          responseImage = info.image;
        } else {
          // 5. ANTICIPACIÓN: No se entendió (Sugerencias dinámicas)
          const names = Object.values(MUSEUMS).map(m => m.name);
          const suggestions = names.sort(() => 0.5 - Math.random()).slice(0, 3).join(", ");
          responseText = `No estoy seguro de a qué lugar te refieres. 🤔\n\nPrueba preguntando por: "${suggestions}" o escribe "ver todos" para mostrarte la lista completa.`;
        }
      }

      // Agregar respuesta del bot al historial
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: responseText, 
        sender: 'bot', 
        image: responseImage 
      }]);
    }, 600);
  };

  return { messages, sendMessage };
};