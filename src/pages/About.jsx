import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ImageWithFallback from '../components/ImageWithFallback'
import { getImage } from '../config/images'
import BackButton from '../components/BackButton'
import './Page.css'

function About() {
  const { language } = useLanguage()
  const [imageError, setImageError] = useState(false)

  return (
    <div className="page">
      <main className="page-content">
        <BackButton />
        <div className="featured-image-container">
          {!imageError ? (
            <img 
              src={getImage('aboutFrance', '/images/about-france.svg')} 
              alt="About TheRealFrance"
              className="featured-image"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="image-placeholder">
              {language === 'en' ? 'Image placeholder' : 'Image à venir'}
            </div>
          )}
        </div>
        <h1>
          {language === 'en' ? 'About TheRealFrance' : 'À propos de TheRealFrance'}
        </h1>
        <p>
          {language === 'en'
            ? 'TheRealFrance was created to provide authentic, practical information about life in France beyond the tourist brochures and stereotypes. We believe that understanding the real France-its regions, culture, habits, and daily life-is essential for anyone wanting to truly experience or move to this beautiful country.'
            : 'TheRealFrance a été créé pour fournir des informations authentiques et pratiques sur la vie en France au-delà des brochures touristiques et des stéréotypes. Nous croyons que comprendre la vraie France-ses régions, sa culture, ses habitudes et sa vie quotidienne-est essentiel pour quiconque veut vraiment vivre ou déménager dans ce beau pays.'}
        </p>
        <p>
          {language === 'en'
            ? 'Our mission is to bridge the gap between perception and reality, offering insights into French lifestyle, culture, practical living information, and the nuances that make France unique. Whether you\'re planning a move, already living here, or simply curious about French life, we provide the information you need to understand the real France.'
            : 'Notre mission est de combler le fossé entre la perception et la réalité, en offrant des informations sur le mode de vie français, la culture, les informations pratiques sur la vie et les nuances qui rendent la France unique. Que vous planifiiez un déménagement, que vous y viviez déjà ou que vous soyez simplement curieux de la vie française, nous fournissons les informations dont vous avez besoin pour comprendre la vraie France.'}
        </p>
        <p>
          {language === 'en'
            ? 'We cover topics ranging from daily habits and cultural traditions to practical matters like housing, healthcare, and cost of living. Our goal is to help you navigate French life with confidence and authenticity.'
            : 'Nous couvrons des sujets allant des habitudes quotidiennes et des traditions culturelles aux questions pratiques comme le logement, les soins de santé et le coût de la vie. Notre objectif est de vous aider à naviguer dans la vie française avec confiance et authenticité.'}
        </p>

        <div className="image-section">
          <ImageWithFallback 
            src={getImage('aboutTeam', '/images/about-team.svg')} 
            alt={language === 'en' ? 'About us' : 'À propos de nous'}
            className="content-image"
            fallbackText={language === 'en' ? 'About' : 'À propos'}
          />
          <p>
            {language === 'en'
              ? 'Our team consists of people who have experienced life in France firsthand-from expats who made the move to French natives sharing their insights. We combine personal experience with research to provide accurate, helpful information about living in France.'
              : 'Notre équipe se compose de personnes qui ont vécu la vie en France de première main-des expatriés qui ont fait le déménagement aux Français natifs partageant leurs connaissances. Nous combinons l\'expérience personnelle avec la recherche pour fournir des informations précises et utiles sur la vie en France.'}
          </p>
        </div>
      </main>
    </div>
  )
}

export default About




