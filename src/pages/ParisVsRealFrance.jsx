import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ImageWithFallback from '../components/ImageWithFallback'
import { getImage } from '../config/images'
import BackButton from '../components/BackButton'
import './Page.css'

function ParisVsRealFrance() {
  const { language } = useLanguage()
  const [imageError, setImageError] = useState(false)

  return (
    <div className="page">
      <main className="page-content">
        <BackButton />
        <div className="featured-image-container">
          {!imageError ? (
            <img 
              src={getImage('parisVsFrance', '/images/paris-vs-france.svg')} 
              alt="Paris vs Real France"
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
          {language === 'en' ? 'Paris vs Real France' : 'Paris vs la Vraie France'}
        </h1>
        <p>
          {language === 'en'
            ? 'While Paris is the magnificent face of France to the world, the real France extends far beyond the capital, offering incredible diversity and richness. Each region has its own beautiful character, cherished traditions, and unique way of life, creating a tapestry of cultural richness that makes France so special. Discovering these regions reveals the authentic heart of French culture and lifestyle.'
            : 'Alors que Paris est le visage magnifique de la France pour le monde, la vraie France s\'étend bien au-delà de la capitale, offrant une diversité et une richesse incroyables. Chaque région a son propre beau caractère, ses traditions chéries et son mode de vie unique, créant une tapisserie de richesse culturelle qui rend la France si spéciale. Découvrir ces régions révèle le cœur authentique de la culture et du mode de vie français.'}
        </p>
        <p>
          {language === 'en'
            ? 'Understanding the beautiful diversity between Paris and the regions helps you appreciate the full richness of French life. While Paris offers world-class culture, art, and amenities, the regions offer authentic traditions, more affordable living, stronger community bonds, and a peaceful pace of life. Both have their unique charms, and exploring beyond Paris reveals the warm, welcoming, and authentic France that many find even more appealing.'
            : 'Comprendre la belle diversité entre Paris et les régions vous aide à apprécier la pleine richesse de la vie française. Alors que Paris offre une culture, un art et des commodités de classe mondiale, les régions offrent des traditions authentiques, une vie plus abordable, des liens communautaires plus forts et un rythme de vie paisible. Les deux ont leurs charmes uniques, et explorer au-delà de Paris révèle la France chaleureuse, accueillante et authentique que beaucoup trouvent encore plus attrayante.'}
        </p>

        <h2>
          {language === 'en' ? 'Paris' : 'Paris'}
        </h2>
        <p>
          {language === 'en'
            ? 'Paris is a magnificent global city-cosmopolitan, vibrant, and culturally rich. It\'s the center of French politics, business, and high culture, offering incredible opportunities, world-class museums, beautiful architecture, and a dynamic atmosphere. While life here has higher costs and a faster pace than other regions, Paris provides unparalleled access to art, culture, international cuisine, and professional opportunities. It\'s a city that inspires and energizes, though it represents a different experience from the rest of France.'
            : 'Paris est une magnifique ville mondiale-cosmopolite, dynamique et culturellement riche. C\'est le centre de la politique, des affaires et de la haute culture françaises, offrant des opportunités incroyables, des musées de classe mondiale, une belle architecture et une atmosphère dynamique. Bien que la vie ici ait des coûts plus élevés et un rythme plus rapide que les autres régions, Paris offre un accès sans égal à l\'art, la culture, la cuisine internationale et les opportunités professionnelles. C\'est une ville qui inspire et dynamise, bien qu\'elle représente une expérience différente du reste de la France.'}
        </p>
        <div className="comparison-images">
          <div className="comparison-item">
            <ImageWithFallback 
              src={getImage('parisCity', '/images/paris-city.svg')} 
              alt={language === 'en' ? 'Paris city' : 'Ville de Paris'}
              className="content-image"
              fallbackText={language === 'en' ? 'Paris' : 'Paris'}
            />
            <p>
              {language === 'en' ? 'The Capital City' : 'La capitale'}
            </p>
          </div>
        </div>

        <h2>
          {language === 'en' ? 'Real France' : 'La Vraie France'}
        </h2>
        <p>
          {language === 'en'
            ? 'The real France is beautifully found in its diverse regions-from the wine country of Bordeaux to the stunning lavender fields of Provence, from the historic north to the sunny Mediterranean south. Each region has its own charming identity, local dialects, distinctive cuisine, and cherished traditions. Life here is often more affordable, more relaxed, and beautifully connected to local culture and community. Regional France offers authentic experiences, stronger community bonds, beautiful natural surroundings, and a pace of life that allows you to truly savor and appreciate each day.'
            : 'La vraie France se trouve magnifiquement dans ses régions diverses-du pays du vin de Bordeaux aux champs de lavande éblouissants de Provence, du nord historique au sud méditerranéen ensoleillé. Chaque région a sa propre identité charmante, ses dialectes locaux, sa cuisine distinctive et ses traditions chéries. La vie ici est souvent plus abordable, plus détendue et magnifiquement connectée à la culture et à la communauté locales. La France régionale offre des expériences authentiques, des liens communautaires plus forts, de beaux environnements naturels et un rythme de vie qui vous permet de vraiment savourer et apprécier chaque jour.'}
        </p>
        <div className="comparison-images">
          <div className="comparison-item">
            <ImageWithFallback 
              src={getImage('frenchRegions', '/images/french-regions.svg')} 
              alt={language === 'en' ? 'French regions' : 'Régions françaises'}
              className="content-image"
              fallbackText={language === 'en' ? 'Regions' : 'Régions'}
            />
            <p>
              {language === 'en' ? 'Diverse Regions' : 'Régions diverses'}
            </p>
          </div>
          <div className="comparison-item">
            <ImageWithFallback 
              src={getImage('frenchSmallTowns', '/images/french-small-towns.svg')} 
              alt={language === 'en' ? 'Small French towns' : 'Petites villes françaises'}
              className="content-image"
              fallbackText={language === 'en' ? 'Small towns' : 'Petites villes'}
            />
            <p>
              {language === 'en' ? 'Small Towns and Villages' : 'Petites villes et villages'}
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ParisVsRealFrance




