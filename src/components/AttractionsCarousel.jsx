import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { attractions } from '../data/attractions'
import './AttractionsCarousel.css'

function AttractionsCarousel() {
  const { language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % attractions.length
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current
          const cardWidth = container.offsetWidth / Math.min(attractions.length, 3)
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
      const cardWidth = container.offsetWidth / Math.min(attractions.length, 3)
      container.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      })
    }
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? attractions.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }

  const goToNext = () => {
    const newIndex = currentIndex === attractions.length - 1 ? 0 : currentIndex + 1
    goToSlide(newIndex)
  }

  return (
    <section className="attractions-carousel-section">
      <div className="attractions-carousel-container">
        <h2 className="attractions-carousel-title">
          {language === 'en' 
            ? 'Must-See Attractions in France Right Now' 
            : 'Attractions Incontournables en France en ce Moment'}
        </h2>
        <div className="attractions-carousel-wrapper">
          <button className="attractions-carousel-button attractions-carousel-button-prev" onClick={goToPrevious}>
            &#8249;
          </button>
          <div className="attractions-carousel-scroll" ref={scrollContainerRef}>
            <div className="attractions-carousel-cards">
              {attractions.map((attraction, index) => (
                <Link
                  key={attraction.id}
                  to={`/attraction/${attraction.id}`}
                  className={`attraction-card ${index === currentIndex ? 'active' : ''}`}
                >
                  <div className="attraction-card-image">
                    <img 
                      src={attraction.image} 
                      alt={attraction.title[language]}
                      loading="lazy"
                    />
                    <div className="attraction-card-overlay">
                      <div className="attraction-card-date">
                        {attraction.date.display[language]}
                      </div>
                    </div>
                  </div>
                  <div className="attraction-card-content">
                    <h3 className="attraction-card-title">
                      {attraction.title[language]}
                    </h3>
                    <p className="attraction-card-description">
                      {attraction.description[language]}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <button className="attractions-carousel-button attractions-carousel-button-next" onClick={goToNext}>
            &#8250;
          </button>
        </div>
        <div className="attractions-carousel-dots">
          {attractions.map((_, index) => (
            <button
              key={index}
              className={`attractions-carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to attraction ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AttractionsCarousel






