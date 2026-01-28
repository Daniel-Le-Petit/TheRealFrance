import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ImageWithFallback from '../components/ImageWithFallback'
import { getImage } from '../config/images'
import BackButton from '../components/BackButton'
import './Page.css'

function FrenchCultureExplained() {
  const { language } = useLanguage()
  const [imageError, setImageError] = useState(false)

  return (
    <div className="page">
      <main className="page-content">
        <BackButton />
        <div className="featured-image-container">
          {!imageError ? (
            <img 
              src={getImage('frenchCulture', '/images/french-culture.svg')} 
              alt="French culture"
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
          {language === 'en' ? 'French Culture Explained' : 'La culture française expliquée'}
        </h1>
        <p>
          {language === 'en'
            ? 'French culture is a magnificent tapestry woven from centuries of history, world-renowned art, beautiful language, and cherished traditions-creating a rich heritage that continues to inspire and influence globally. It\'s a culture that beautifully balances intellectualism with artistic expression, preserves heritage while embracing innovation, and celebrates both national identity and regional diversity.'
            : 'La culture française est une magnifique tapisserie tissée à partir de siècles d\'histoire, d\'art de renommée mondiale, de belle langue et de traditions chéries-créant un riche patrimoine qui continue d\'inspirer et d\'influencer mondialement. C\'est une culture qui équilibre magnifiquement l\'intellectualisme avec l\'expression artistique, préserve le patrimoine tout en embrassant l\'innovation, et célèbre à la fois l\'identité nationale et la diversité régionale.'}
        </p>
        <p>
          {language === 'en'
            ? 'From the philosophical salons of the Enlightenment that shaped modern thought to the revolutionary art movements that changed how we see the world, France has been a cultural beacon for centuries. Understanding French culture means appreciating its beautiful complexity-the elegance of formal traditions and the warmth of casual interactions, the respect for heritage and the embrace of avant-garde innovation, the strong national identity and the celebration of regional uniqueness. This rich cultural heritage is a source of pride and joy for the French people.'
            : 'Des salons philosophiques des Lumières qui ont façonné la pensée moderne aux mouvements artistiques révolutionnaires qui ont changé notre façon de voir le monde, la France a été un phare culturel pendant des siècles. Comprendre la culture française signifie apprécier sa belle complexité-l\'élégance des traditions formelles et la chaleur des interactions décontractées, le respect du patrimoine et l\'embrassement de l\'innovation avant-gardiste, la forte identité nationale et la célébration de l\'unicité régionale. Ce riche patrimoine culturel est une source de fierté et de joie pour le peuple français.'}
        </p>

        <div className="image-section">
          <ImageWithFallback 
            src={getImage('frenchArt', '/images/french-art.svg')} 
            alt={language === 'en' ? 'French art' : 'Art français'}
            className="content-image"
            fallbackText={language === 'en' ? 'Art' : 'Art'}
          />
          <p>
            {language === 'en'
              ? 'France has been at the forefront of artistic movements for centuries, creating a legacy that continues to inspire the world. From the revolutionary Impressionists who changed how we see light and color to contemporary artists pushing boundaries, French artists have shaped global artistic expression. This rich artistic heritage is celebrated through world-class museums, vibrant galleries, and dynamic street art-making art accessible and integrated into daily life. The French appreciation for art reflects their belief that beauty, creativity, and cultural expression are essential to a fulfilling life.'
              : 'La France est à l\'avant-garde des mouvements artistiques depuis des siècles, créant un héritage qui continue d\'inspirer le monde. Des impressionnistes révolutionnaires qui ont changé notre façon de voir la lumière et la couleur aux artistes contemporains repoussant les limites, les artistes français ont façonné l\'expression artistique mondiale. Ce riche patrimoine artistique est célébré à travers des musées de classe mondiale, des galeries dynamiques et un art de rue dynamique-rendant l\'art accessible et intégré à la vie quotidienne. L\'appréciation française de l\'art reflète leur croyance que la beauté, la créativité et l\'expression culturelle sont essentielles à une vie épanouissante.'}
          </p>
        </div>

        <div className="image-gallery">
          <div className="gallery-item">
            <ImageWithFallback 
              src={getImage('frenchLanguage', '/images/french-language.svg')} 
              alt={language === 'en' ? 'French language' : 'Langue française'}
              className="gallery-image"
              fallbackText={language === 'en' ? 'Language' : 'Langue'}
            />
            <p className="gallery-caption">
              {language === 'en' ? 'The French Language' : 'La langue française'}
            </p>
            <div className="gallery-content">
              <p>
                {language === 'en'
                  ? 'French is not just a language-it\'s a beautiful cultural identity and a source of national pride. The French take great pride in their language, its elegance, and its preservation as a global language of diplomacy, culture, and art. The Académie Française works to maintain linguistic quality and richness. French people genuinely appreciate and warmly welcome when foreigners make an effort to speak their language, even if imperfectly, seeing it as a sign of respect and interest in French culture. This positive attitude toward language learning creates an encouraging environment for those wanting to embrace French culture.'
                  : 'Le français n\'est pas seulement une langue-c\'est une belle identité culturelle et une source de fierté nationale. Les Français sont très fiers de leur langue, de son élégance et de sa préservation en tant que langue mondiale de la diplomatie, de la culture et de l\'art. L\'Académie française travaille à maintenir la qualité et la richesse linguistiques. Les Français apprécient sincèrement et accueillent chaleureusement lorsque les étrangers font un effort pour parler leur langue, même imparfaitement, le voyant comme un signe de respect et d\'intérêt pour la culture française. Cette attitude positive envers l\'apprentissage des langues crée un environnement encourageant pour ceux qui veulent embrasser la culture française.'}
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <ImageWithFallback 
              src={getImage('frenchTraditions', '/images/french-traditions.svg')} 
              alt={language === 'en' ? 'French traditions' : 'Traditions françaises'}
              className="gallery-image"
              fallbackText={language === 'en' ? 'Traditions' : 'Traditions'}
            />
            <p className="gallery-caption">
              {language === 'en' ? 'Cultural Traditions' : 'Traditions culturelles'}
            </p>
            <div className="gallery-content">
              <p>
                {language === 'en'
                  ? 'French traditions beautifully range from grand national celebrations like Bastille Day that unite the entire nation to charming regional festivals and cherished family customs that create deep bonds. These positive traditions create a strong sense of continuity, belonging, and shared identity. Whether it\'s the joyful annual village fête that brings communities together, the celebratory grape harvest that honors agricultural heritage, or the sacred Sunday family meals that strengthen family bonds, traditions anchor French identity and create meaningful connections between past, present, and future generations.'
                  : 'Les traditions françaises vont magnifiquement des grandes célébrations nationales comme la Fête nationale qui unissent toute la nation aux charmants festivals régionaux et aux coutumes familiales chéries qui créent des liens profonds. Ces traditions positives créent un fort sentiment de continuité, d\'appartenance et d\'identité partagée. Qu\'il s\'agisse de la joyeuse fête annuelle du village qui rassemble les communautés, de la récolte du raisin célébrative qui honore le patrimoine agricole, ou des repas familiaux sacrés du dimanche qui renforcent les liens familiaux, les traditions ancrent l\'identité française et créent des connexions significatives entre les générations passées, présentes et futures.'}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default FrenchCultureExplained




