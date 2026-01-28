import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { attractions } from '../data/attractions'
import BackButton from '../components/BackButton'
import './AttractionDetail.css'

function AttractionDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { language } = useLanguage()
  
  const attraction = attractions.find(a => a.id === id)

  useEffect(() => {
    if (!attraction) {
      navigate('/')
    }
  }, [attraction, navigate])

  if (!attraction) {
    return null
  }

  const details = attraction.details[language]
  const mapUrl = `https://www.google.com/maps?q=${attraction.location.lat},${attraction.location.lng}&hl=${language === 'fr' ? 'fr' : 'en'}`

  return (
    <div className="page attraction-detail-page">
      <main className="page-content attraction-detail-content">
        <BackButton />
        
        <div className="attraction-detail-header">
          <div className="attraction-detail-hero">
            <img 
              src={attraction.image} 
              alt={attraction.title[language]}
              className="attraction-detail-hero-image"
            />
            <div className="attraction-detail-hero-overlay">
              <h1 className="attraction-detail-title">
                {attraction.title[language]}
              </h1>
              <div className="attraction-detail-badge">
                {attraction.date.display[language]}
              </div>
            </div>
          </div>
        </div>

        <div className="attraction-detail-grid">
          <div className="attraction-detail-main">
            <div className="attraction-info-card">
              <h2 className="attraction-info-card-title">
                {language === 'en' ? 'About' : 'À propos'}
              </h2>
              <p className="attraction-info-card-text">
                {details.description}
              </p>
            </div>

            <div className="attraction-info-card">
              <h2 className="attraction-info-card-title">
                {language === 'en' ? 'Highlights' : 'Points forts'}
              </h2>
              <ul className="attraction-highlights-list">
                {details.highlights.map((highlight, index) => (
                  <li key={index} className="attraction-highlight-item">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="attraction-detail-sidebar">
            <div className="attraction-info-card">
              <h3 className="attraction-info-card-subtitle">
                {language === 'en' ? 'Event Information' : 'Informations sur l\'événement'}
              </h3>
              <div className="attraction-info-item">
                <span className="attraction-info-label">
                  {language === 'en' ? 'Category' : 'Catégorie'}
                </span>
                <span className="attraction-info-value">{details.category}</span>
              </div>
              <div className="attraction-info-item">
                <span className="attraction-info-label">
                  {language === 'en' ? 'Duration' : 'Durée'}
                </span>
                <span className="attraction-info-value">{details.duration}</span>
              </div>
              <div className="attraction-info-item">
                <span className="attraction-info-label">
                  {language === 'en' ? 'Price' : 'Prix'}
                </span>
                <span className="attraction-info-value">{details.price}</span>
              </div>
              <div className="attraction-info-item">
                <span className="attraction-info-label">
                  {language === 'en' ? 'Location' : 'Lieu'}
                </span>
                <span className="attraction-info-value">{attraction.location.name}</span>
              </div>
              {details.website && (
                <a 
                  href={details.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="attraction-website-link"
                >
                  {language === 'en' ? 'Visit Official Website' : 'Visiter le Site Officiel'}
                </a>
              )}
            </div>

            <div className="attraction-info-card">
              <h3 className="attraction-info-card-subtitle">
                {language === 'en' ? 'Location Map' : 'Carte du Lieu'}
              </h3>
              <div className="attraction-map-container">
                <div className="attraction-map-placeholder">
                  <iframe
                    src={`https://maps.google.com/maps?q=${attraction.location.lat},${attraction.location.lng}&hl=${language === 'fr' ? 'fr' : 'en'}&z=13&output=embed`}
                    width="100%"
                    height="300"
                    style={{ border: 0, borderRadius: '8px' }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={attraction.title[language]}
                  ></iframe>
                </div>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="attraction-map-link"
                >
                  {language === 'en' ? 'View on Google Maps' : 'Voir sur Google Maps'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AttractionDetail

