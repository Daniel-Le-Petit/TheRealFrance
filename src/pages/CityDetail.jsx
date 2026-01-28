import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { cities } from '../data/cities'
import BackButton from '../components/BackButton'
import './CityDetail.css'

function CityDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { language } = useLanguage()
  
  const city = cities.find(c => c.id === id)

  useEffect(() => {
    if (!city) {
      navigate('/')
    }
  }, [city, navigate])

  if (!city) {
    return null
  }

  const sections = [
    {
      id: 'news',
      title: { en: 'News', fr: 'Actualités' },
      icon: '📰'
    },
    {
      id: 'restaurants',
      title: { en: 'Restaurants & Bars', fr: 'Restaurants et Bars' },
      icon: '🍽️'
    },
    {
      id: 'activities',
      title: { en: 'What to Do', fr: 'Que faire' },
      icon: '🎯'
    },
    {
      id: 'culture',
      title: { en: 'Culture', fr: 'Culture' },
      icon: '🎭'
    },
    {
      id: 'travel',
      title: { en: 'Travel', fr: 'Voyage' },
      icon: '✈️'
    },
    {
      id: 'hotels',
      title: { en: 'Hotels', fr: 'Hôtels' },
      icon: '🏨'
    },
    {
      id: 'art',
      title: { en: 'Art', fr: 'Art' },
      icon: '🎨'
    },
    {
      id: 'music',
      title: { en: 'Music', fr: 'Musique' },
      icon: '🎵'
    },
    {
      id: 'shopping',
      title: { en: 'Shopping', fr: 'Shopping' },
      icon: '🛍️'
    },
    {
      id: 'christmas',
      title: { en: 'Christmas', fr: 'Noël' },
      icon: '🎄'
    }
  ]

  const mapUrl = `https://www.google.com/maps?q=${city.location.lat},${city.location.lng}&hl=${language === 'fr' ? 'fr' : 'en'}`

  return (
    <div className="page city-detail-page">
      <main className="page-content city-detail-content">
        <BackButton />
        
        <div className="city-detail-header">
          <div className="city-detail-hero">
            <img 
              src={city.image} 
              alt={city.name[language]}
              className="city-detail-hero-image"
            />
            <div className="city-detail-hero-overlay">
              <h1 className="city-detail-title">
                {city.name[language]}
              </h1>
            </div>
          </div>
        </div>

        <div className="city-detail-intro">
          <p className="city-detail-description">
            {city.description[language]}
          </p>
        </div>

        <div className="city-sections-grid">
          {sections.map((section) => (
            <div key={section.id} className="city-section-card">
              <div className="city-section-card-header">
                <span className="city-section-icon">{section.icon}</span>
                <h2 className="city-section-card-title">
                  {section.title[language]}
                </h2>
              </div>
              <div className="city-section-card-content">
                <p className="city-section-card-text">
                  {city.sections[section.id][language]}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="city-map-section">
          <div className="city-info-card">
            <h3 className="city-info-card-title">
              {language === 'en' ? 'Location Map' : 'Carte du Lieu'}
            </h3>
            <div className="city-map-container">
              <div className="city-map-placeholder">
                <iframe
                  src={`https://maps.google.com/maps?q=${city.location.lat},${city.location.lng}&hl=${language === 'fr' ? 'fr' : 'en'}&z=12&output=embed`}
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: '8px' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={city.name[language]}
                ></iframe>
              </div>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="city-map-link"
              >
                {language === 'en' ? 'View on Google Maps' : 'Voir sur Google Maps'}
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CityDetail






