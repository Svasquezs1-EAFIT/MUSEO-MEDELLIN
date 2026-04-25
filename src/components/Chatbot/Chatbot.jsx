import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useChat } from '../../hooks/useChat'
import './Chatbot.css'

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const { messages, sendMessage } = useChat()
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = (e) => {
    e.preventDefault()

    if (input.trim()) {
      sendMessage(input)
      setInput('')
    }
  }

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button
        className="chat-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Cerrar chatbot' : 'Abrir chatbot'}
      >
        {isOpen ? '✖' : '💬'}
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">Guía de Museos Medellín</div>

          <div className="chat-messages" ref={scrollRef}>
            {messages.map((msg) => (
              <div key={msg.id} className={`message-wrapper ${msg.sender}`}>
                <div className="message-text">
                  {msg.text}

                  {msg.image && (
                    <img src={msg.image} alt="Lugar cultural" className="chat-image" />
                  )}

                  {msg.link && (
                    <Link className="chat-link" to={msg.link}>
                      {msg.linkLabel || 'Ver ficha completa'}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form className="chat-input" onSubmit={handleSend}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Pregunta por un lugar..."
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Chatbot
