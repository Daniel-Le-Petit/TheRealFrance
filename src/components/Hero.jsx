import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ImageCarousel from './ImageCarousel'
import './Hero.css'

function Hero() {
  const { language } = useLanguage()
  const [imageError, setImageError] = useState(false)

  return (
    <section className="hero">
      {!imageError && (
        <img 
          className="hero-image" 
          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2000&auto=format&fit=crop"
          alt="French countryside"
          onError={() => setImageError(true)}
        />
      )}
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">
            {language === 'en' 
              ? 'Discover the Real France' 
              : 'Découvrez la Vraie France'}
          </h1>
          <p className="hero-subtitle">
            {language === 'en'
              ? 'Beyond the clichés, explore authentic French life, culture, and lifestyle'
              : 'Au-delà des clichés, explorez la vie, la culture et le mode de vie français authentiques'}
          </p>
        </div>
      </div>
      <div className="hero-carousel">
        <ImageCarousel />
      </div>
    </section>
  )
}

export default Hero




