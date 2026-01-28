import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ImageWithFallback from '../components/ImageWithFallback'
import { getImage } from '../config/images'
import BackButton from '../components/BackButton'
import './Page.css'

function FrenchRetirementGuide() {
  const { language } = useLanguage()
  const [imageError, setImageError] = useState(false)

  return (
    <div className="page">
      <main className="page-content">
        <BackButton />
        <div className="featured-image-container">
          {!imageError ? (
            <img 
              src={getImage('frenchRetirement', '/images/french-retirement.svg')} 
              alt="French retirement"
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
          {language === 'en' ? 'French Retirement Guide' : 'Guide de la retraite en France'}
        </h1>
        <p>
          {language === 'en'
            ? 'Retiring in France is a wonderful dream that many people successfully achieve, offering exceptional benefits: world-class healthcare, beautiful landscapes, rich cultural life, and a lifestyle that celebrates quality of life and well-being. The French retirement system provides strong protections and benefits that make retirement secure and enjoyable.'
            : 'Prendre sa retraite en France est un merveilleux rêve que beaucoup de gens réalisent avec succès, offrant des avantages exceptionnels : soins de santé de classe mondiale, beaux paysages, vie culturelle riche et un mode de vie qui célèbre la qualité de vie et le bien-être. Le système de retraite français fournit de fortes protections et avantages qui rendent la retraite sécurisée et agréable.'}
        </p>
        <p>
          {language === 'en'
            ? 'Whether you\'re a French citizen planning retirement or an expat considering France as a retirement destination, understanding the positive aspects of the French retirement system-excellent healthcare coverage, pension benefits, cultural richness, and quality of life-will help you make informed decisions and fully enjoy the benefits of retiring in one of the world\'s best countries for quality of life.'
            : 'Que vous soyez un citoyen français planifiant la retraite ou un expatrié envisageant la France comme destination de retraite, comprendre les aspects positifs du système de retraite français-excellente couverture de santé, avantages de pension, richesse culturelle et qualité de vie-vous aidera à prendre des décisions éclairées et à profiter pleinement des avantages de prendre sa retraite dans l\'un des meilleurs pays au monde pour la qualité de vie.'}
        </p>

        <div className="image-gallery">
          <div className="gallery-item">
            <ImageWithFallback 
              src={getImage('frenchRetirementLife', '/images/french-retirement-life.svg')} 
              alt={language === 'en' ? 'Retirement life' : 'Vie de retraite'}
              className="gallery-image"
              fallbackText={language === 'en' ? 'Retirement' : 'Retraite'}
            />
            <p className="gallery-caption">
              {language === 'en' ? 'Retirement Lifestyle' : 'Mode de vie à la retraite'}
            </p>
            <div className="gallery-content">
              <p>
                {language === 'en'
                  ? 'French retirees enjoy a wonderfully active and fulfilling lifestyle with excellent access to cultural activities, beautiful outdoor recreation, and meaningful social connections. Many small towns and villages have vibrant senior communities that organize events, activities, and social gatherings. The peaceful pace of life, combined with world-class healthcare and affordable living in many regions, makes France an exceptionally attractive retirement destination. Retirees can enjoy art, music, nature, and community while maintaining an active, engaged lifestyle that contributes to health and happiness.'
                  : 'Les retraités français jouissent d\'un mode de vie merveilleusement actif et épanouissant avec un excellent accès aux activités culturelles, de beaux loisirs de plein air et des connexions sociales significatives. Beaucoup de petites villes et villages ont des communautés de seniors dynamiques qui organisent des événements, des activités et des rassemblements sociaux. Le rythme de vie paisible, combiné à des soins de santé de classe mondiale et une vie abordable dans de nombreuses régions, fait de la France une destination de retraite exceptionnellement attrayante. Les retraités peuvent profiter de l\'art, de la musique, de la nature et de la communauté tout en maintenant un mode de vie actif et engagé qui contribue à la santé et au bonheur.'}
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <ImageWithFallback 
              src={getImage('frenchPension', '/images/french-pension.svg')} 
              alt={language === 'en' ? 'French pension' : 'Pension française'}
              className="gallery-image"
              fallbackText={language === 'en' ? 'Pension' : 'Pension'}
            />
            <p className="gallery-caption">
              {language === 'en' ? 'Pension System' : 'Système de retraite'}
            </p>
            <div className="gallery-content">
              <p>
                {language === 'en'
                  ? 'France has a comprehensive pension system designed to provide security and dignity in retirement. The system includes multiple schemes based on profession, ensuring that different types of work are recognized and rewarded. Pensions are calculated based on years of contributions and average salary, providing a fair and predictable retirement income. The French pension system reflects the country\'s commitment to social protection and ensuring that retirees can enjoy their later years with financial security and peace of mind, contributing to France\'s reputation for excellent quality of life at all stages.'
                  : 'La France a un système de retraite complet conçu pour fournir sécurité et dignité à la retraite. Le système comprend plusieurs régimes basés sur la profession, garantissant que différents types de travail sont reconnus et récompensés. Les pensions sont calculées en fonction des années de cotisations et du salaire moyen, fournissant un revenu de retraite équitable et prévisible. Le système de retraite français reflète l\'engagement du pays envers la protection sociale et garantit que les retraités peuvent profiter de leurs dernières années avec sécurité financière et tranquillité d\'esprit, contribuant à la réputation de la France pour une excellente qualité de vie à tous les stades.'}
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <ImageWithFallback 
              src={getImage('frenchSeniors', '/images/french-seniors.svg')} 
              alt={language === 'en' ? 'French seniors' : 'Seniors français'}
              className="gallery-image"
              fallbackText={language === 'en' ? 'Seniors' : 'Seniors'}
            />
            <p className="gallery-caption">
              {language === 'en' ? 'Active Seniors' : 'Seniors actifs'}
            </p>
            <div className="gallery-content">
              <p>
                {language === 'en'
                  ? 'French seniors beautifully remain active, engaged, and valued members of their communities, demonstrating a positive approach to aging. Many participate enthusiastically in local associations, cultural activities, and meaningful volunteer work. The French approach to aging emphasizes maintaining strong social connections, staying physically active, and continuing to engage with culture, learning, and life. This active, positive lifestyle contributes significantly to France\'s high life expectancy and quality of life, showing that staying engaged and connected is key to healthy, happy aging. French society values and respects its seniors, creating an environment where they can thrive and contribute.'
                  : 'Les seniors français restent magnifiquement actifs, engagés et membres valorisés de leurs communautés, démontrant une approche positive du vieillissement. Beaucoup participent avec enthousiasme à des associations locales, des activités culturelles et du bénévolat significatif. L\'approche française du vieillissement met l\'accent sur le maintien de fortes connexions sociales, le maintien de l\'activité physique et la poursuite de l\'engagement avec la culture, l\'apprentissage et la vie. Ce mode de vie actif et positif contribue significativement à la longue espérance de vie et à la qualité de vie de la France, montrant que rester engagé et connecté est la clé d\'un vieillissement sain et heureux. La société française valorise et respecte ses seniors, créant un environnement où ils peuvent prospérer et contribuer.'}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default FrenchRetirementGuide




