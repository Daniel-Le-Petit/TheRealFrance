import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { cities } from '../data/cities'
import './CitiesCarousel.css'

function CitiesCarousel() {
  const { language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % cities.length
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current
          const cardWidth = container.offsetWidth / Math.min(cities.length, 3)
          container.scrollTo({
            left: nextIndex * cardWidth,
            behavior: 'smooth'
          })
        }
        return nextIndex
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = container.offsetWidth / Math.min(cities.length, 3)
      container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      })
    }
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? cities.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }

  const goToNext = () => {
    const newIndex = currentIndex === cities.length - 1 ? 0 : currentIndex + 1
    goToSlide(newIndex)
  }

  return (
    <section className="cities-carousel-section">
      <div className="cities-carousel-container">
        <h2 className="cities-carousel-title">
          {language === 'en' 
            ? 'Main Tourist Cities in France' 
            : 'Principales Villes Touristiques de France'}
        </h2>
        <div className="cities-carousel-wrapper">
          <button className="cities-carousel-button cities-carousel-button-prev" onClick={goToPrevious}>
            &#8249;
          </button>
          <div className="cities-carousel-scroll" ref={scrollContainerRef}>
            <div className="cities-carousel-cards">
              {cities.map((city, index) => (
                <Link
                  key={city.id}
                  to={`/city/${city.id}`}
                  className={`city-card ${index === currentIndex ? 'active' : ''}`}
                >
                  <div className="city-card-image">
                    <img 
                      src={city.image} 
                      alt={city.name[language]}
                      loading="lazy"
                    />
                  </div>
                  <div className="city-card-content">
                    <h3 className="city-card-title">
                      {city.name[language]}
                    </h3>
                    <p className="city-card-description">
                      {city.description[language]}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <button className="cities-carousel-button cities-carousel-button-next" onClick={goToNext}>
            &#8250;
          </button>
        </div>
        <div className="cities-carousel-dots">
          {cities.map((_, index) => (
            <button
              key={index}
              className={`cities-carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to city ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CitiesCarousel






