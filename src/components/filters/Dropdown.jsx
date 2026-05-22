import { useEffect, useId, useRef, useState } from 'react'

/**
 * Dropdown personalizado y accesible.
 *
 * Props:
 *  - value: string                    -> valor actualmente seleccionado
 *  - onChange: (newValue) => void
 *  - options: [{ value, label }]      -> lista de opciones
 *  - placeholder?: string             -> texto cuando no hay selección
 *  - ariaLabel?: string               -> etiqueta para lectores de pantalla
 */
export default function Dropdown({
  value,
  onChange,
  options,
  placeholder = 'Selecciona…',
  ariaLabel,
}) {
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const rootRef = useRef(null)
  const listRef = useRef(null)
  const listboxId = useId()

  const selected = options.find((opt) => opt.value === value)

  /* Cerrar al hacer clic fuera */
  useEffect(() => {
    if (!open) return

    function handleClickOutside(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [open])

  /* Cerrar con Escape */
  useEffect(() => {
    if (!open) return

    function handleKey(e) {
      if (e.key === 'Escape') {
        setOpen(false)
        rootRef.current?.querySelector('button')?.focus()
      }
    }

    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open])

  /* Posicionar índice activo al abrir */
  useEffect(() => {
    if (open) {
      const idx = options.findIndex((opt) => opt.value === value)
      setActiveIndex(idx >= 0 ? idx : 0)
    } else {
      setActiveIndex(-1)
    }
  }, [open, options, value])

  /* Scroll a la opción activa */
  useEffect(() => {
    if (open && activeIndex >= 0 && listRef.current) {
      const activeEl = listRef.current.querySelector(
        `[data-index="${activeIndex}"]`
      )
      activeEl?.scrollIntoView({ block: 'nearest' })
    }
  }, [activeIndex, open])

  function handleToggle() {
    setOpen((prev) => !prev)
  }

  function handleSelect(optValue) {
    onChange(optValue)
    setOpen(false)
    rootRef.current?.querySelector('button')?.focus()
  }

  function handleKeyDown(e) {
    if (!open) {
      if (['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(e.key)) {
        e.preventDefault()
        setOpen(true)
      }
      return
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((prev) => (prev + 1) % options.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((prev) => (prev - 1 + options.length) % options.length)
    } else if (e.key === 'Home') {
      e.preventDefault()
      setActiveIndex(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      setActiveIndex(options.length - 1)
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (activeIndex >= 0) {
        handleSelect(options[activeIndex].value)
      }
    } else if (e.key === 'Tab') {
      setOpen(false)
    }
  }

  return (
    <div
      ref={rootRef}
      className={`dropdown ${open ? 'is-open' : ''}`}
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        className="dropdown-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-label={ariaLabel}
        onClick={handleToggle}
      >
        <span className="dropdown-value">
          {selected ? selected.label : placeholder}
        </span>
        <span className="dropdown-arrow" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {open && (
        <ul
          ref={listRef}
          id={listboxId}
          role="listbox"
          className="dropdown-menu"
          tabIndex={-1}
        >
          {options.map((opt, idx) => {
            const isSelected = opt.value === value
            const isActive = idx === activeIndex
            return (
              <li
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                data-index={idx}
                className={[
                  'dropdown-option',
                  isSelected ? 'is-selected' : '',
                  isActive ? 'is-active' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => handleSelect(opt.value)}
              >
                <span className="dropdown-option-label">{opt.label}</span>
                {isSelected && (
                  <span className="dropdown-check" aria-hidden="true">
                    <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M4 10.5L8 14.5L16 6.5"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}