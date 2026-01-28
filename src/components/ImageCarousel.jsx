import { useState, useEffect, useRef } from 'react'
import './ImageCarousel.css'

const jfifImages = [
  '/images/ardeche.jfif',
  '/images/Bretagne.jfif',
  '/images/Bretagne2.jfif',
  '/images/corse.jfif',
  '/images/femme_montagne.jfif',
  '/images/Phare.jfif',
  '/images/plage.jfif'
]

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % jfifImages.length
        // Auto-scroll to center the active image
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current
          const imageWidth = container.offsetWidth / jfifImages.length
          container.scrollTo({
            left: nextIndex * imageWidth,
            behavior: 'smooth'
          })
        }
        return nextIndex
      })
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const imageWidth = container.offsetWidth / jfifImages.length
      container.scrollTo({
        left: index * imageWidth,
        behavior: 'smooth'
      })
    }
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? jfifImages.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }

  const goToNext = () => {
    const newIndex = currentIndex === jfifImages.length - 1 ? 0 : currentIndex + 1
    goToSlide(newIndex)
  }

  return (
    <div className="image-carousel">
      <button className="carousel-button carousel-button-prev" onClick={goToPrevious}>
        &#8249;
      </button>
      <div className="carousel-container" ref={scrollContainerRef}>
        <div className="carousel-slides">
          {jfifImages.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            >
              <img 
                src={image} 
                alt={`French region ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-button carousel-button-next" onClick={goToNext}>
        &#8250;
      </button>
      <div className="carousel-dots">
        {jfifImages.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageCarousel






