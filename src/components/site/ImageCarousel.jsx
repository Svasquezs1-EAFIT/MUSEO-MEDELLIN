import { useEffect, useMemo, useState } from 'react'

const PLACEHOLDER_IMAGE = '/images/placeholder.svg'

export default function ImageCarousel({ images = [], alt = 'Imagen del lugar' }) {
  const carouselImages = useMemo(() => {
    return Array.isArray(images) && images.length > 0 ? images : [PLACEHOLDER_IMAGE]
  }, [images])

  const [currentIndex, setCurrentIndex] = useState(0)
  const hasMultipleImages = carouselImages.length > 1
  const currentImage = carouselImages[currentIndex] || PLACEHOLDER_IMAGE

  useEffect(() => {
    setCurrentIndex(0)
  }, [carouselImages])

  function goToPrevious() {
    setCurrentIndex((index) =>
      index === 0 ? carouselImages.length - 1 : index - 1
    )
  }

  function goToNext() {
    setCurrentIndex((index) =>
      index === carouselImages.length - 1 ? 0 : index + 1
    )
  }

  function goToImage(index) {
    setCurrentIndex(index)
  }

  return (
    <figure className="image-carousel">
      <div className="carousel-frame">
        <img
          src={currentImage}
          alt={`${alt} ${currentIndex + 1}`}
          onError={(e) => {
            e.currentTarget.src = PLACEHOLDER_IMAGE
          }}
        />

        {hasMultipleImages && (
          <>
            <button
              type="button"
              className="carousel-control carousel-control-left"
              onClick={goToPrevious}
              aria-label="Ver imagen anterior"
            >
              ‹
            </button>

            <button
              type="button"
              className="carousel-control carousel-control-right"
              onClick={goToNext}
              aria-label="Ver imagen siguiente"
            >
              ›
            </button>

            <span className="carousel-counter">
              {currentIndex + 1} / {carouselImages.length}
            </span>
          </>
        )}
      </div>

      {hasMultipleImages && (
        <div className="carousel-thumbnails" aria-label="Miniaturas del carrusel">
          {carouselImages.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              className={`carousel-thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToImage(index)}
              aria-label={`Ver imagen ${index + 1}`}
            >
              <img
                src={image}
                alt=""
                onError={(e) => {
                  e.currentTarget.src = PLACEHOLDER_IMAGE
                }}
              />
            </button>
          ))}
        </div>
      )}
    </figure>
  )
}
