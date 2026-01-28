import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ImageWithFallback from '../components/ImageWithFallback'
import { getImage } from '../config/images'
import BackButton from '../components/BackButton'
import './Page.css'

function LivingInFrance() {
  const { language } = useLanguage()
  const [imageError, setImageError] = useState(false)

  return (
    <div className="page">
      <main className="page-content">
        <BackButton />
        <div className="featured-image-container">
          {!imageError ? (
            <img 
              src={getImage('livingInFrance', '/images/living-in-france.svg')} 
              alt="Living in France"
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
          {language === 'en' ? 'Living in France' : 'Vivre en France'}
        </h1>
        <p>
          {language === 'en'
            ? 'Living in France offers an exceptional quality of life that combines rich history, vibrant culture, and excellent modern amenities. The country provides outstanding healthcare, excellent public transportation, strong social protections, and a beautiful environment that makes daily life both practical and enjoyable. Understanding these positive aspects helps you fully appreciate and benefit from the French way of life.'
            : 'Vivre en France offre une qualité de vie exceptionnelle qui combine une riche histoire, une culture dynamique et d\'excellentes commodités modernes. Le pays fournit d\'excellents soins de santé, d\'excellents transports publics, de fortes protections sociales et un bel environnement qui rend la vie quotidienne à la fois pratique et agréable. Comprendre ces aspects positifs vous aide à apprécier pleinement et à bénéficier du mode de vie français.'}
        </p>
        <p>
          {language === 'en'
            ? 'France\'s commitment to quality of life is evident in its excellent public services, work-life balance, and social safety net. Whether you\'re moving for work, retirement, or a lifestyle change, you\'ll discover that France offers numerous positive benefits: universal healthcare, affordable public transport, strong tenant protections, and a culture that values well-being. These advantages make France one of the best places in the world to live.'
            : 'L\'engagement de la France envers la qualité de vie est évident dans ses excellents services publics, l\'équilibre vie-travail et le filet de sécurité sociale. Que vous déménagiez pour le travail, la retraite ou un changement de mode de vie, vous découvrirez que la France offre de nombreux avantages positifs : soins de santé universels, transports publics abordables, fortes protections des locataires et une culture qui valorise le bien-être. Ces avantages font de la France l\'un des meilleurs endroits au monde où vivre.'}
        </p>

        <div className="image-gallery">
          <div className="gallery-item">
            <ImageWithFallback 
              src={getImage('frenchHousing', '/images/french-housing.svg')} 
              alt={language === 'en' ? 'French housing' : 'Logement français'}
              className="gallery-image"
              fallbackText={language === 'en' ? 'Housing' : 'Logement'}
            />
            <p className="gallery-caption">
              {language === 'en' ? 'Housing in France' : 'Logement en France'}
            </p>
            <div className="gallery-content">
              <p>
                {language === 'en'
                  ? 'France offers excellent housing options with strong legal protections for tenants that make renting secure and fair. While Paris is more expensive, smaller cities and rural areas provide beautiful, affordable housing with excellent quality of life. The French rental system includes mandatory insurance for security, reasonable deposits, and tenant-friendly regulations. Many regions offer charming properties with character, from historic city centers to peaceful countryside homes, allowing you to find a home that matches your lifestyle and budget while enjoying France\'s beautiful architecture and living spaces.'
                  : 'La France offre d\'excellentes options de logement avec de fortes protections légales pour les locataires qui rendent la location sécurisée et équitable. Bien que Paris soit plus cher, les petites villes et les zones rurales fournissent de beaux logements abordables avec une excellente qualité de vie. Le système locatif français comprend une assurance obligatoire pour la sécurité, des dépôts raisonnables et des règlements favorables aux locataires. De nombreuses régions offrent des propriétés charmantes avec du caractère, des centres-villes historiques aux maisons de campagne paisibles, vous permettant de trouver une maison qui correspond à votre mode de vie et votre budget tout en profitant de la belle architecture et des espaces de vie français.'}
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <ImageWithFallback 
              src={getImage('frenchTransport', '/images/french-transport.svg')} 
              alt={language === 'en' ? 'French transport' : 'Transport français'}
              className="gallery-image"
              fallbackText={language === 'en' ? 'Transport' : 'Transport'}
            />
            <p className="gallery-caption">
              {language === 'en' ? 'Public Transport' : 'Transport public'}
            </p>
            <div className="gallery-content">
              <p>
                {language === 'en'
                  ? 'France boasts one of the world\'s best public transportation systems, making travel efficient, affordable, and environmentally friendly. The high-speed TGV trains connect major cities beautifully, while comprehensive metro and bus networks make urban areas easily accessible. Many French people enjoy the convenience and reliability of public transport, which is often faster and more pleasant than driving, especially in cities. This excellent infrastructure supports a car-free lifestyle, reduces environmental impact, and makes exploring France\'s beautiful regions both easy and enjoyable.'
                  : 'La France possède l\'un des meilleurs systèmes de transport public au monde, rendant les déplacements efficaces, abordables et respectueux de l\'environnement. Les trains TGV à grande vitesse relient magnifiquement les grandes villes, tandis que les réseaux de métro et de bus complets rendent les zones urbaines facilement accessibles. Beaucoup de Français apprécient la commodité et la fiabilité des transports publics, qui sont souvent plus rapides et plus agréables que la conduite, surtout dans les villes. Cette excellente infrastructure soutient un mode de vie sans voiture, réduit l\'impact environnemental et rend l\'exploration des belles régions de France à la fois facile et agréable.'}
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <ImageWithFallback 
              src={getImage('frenchHealthcare', '/images/french-healthcare.svg')} 
              alt={language === 'en' ? 'French healthcare' : 'Santé française'}
              className="gallery-image"
              fallbackText={language === 'en' ? 'Healthcare' : 'Santé'}
            />
            <p className="gallery-caption">
              {language === 'en' ? 'Healthcare System' : 'Système de santé'}
            </p>
            <div className="gallery-content">
              <p>
                {language === 'en'
                  ? 'France\'s healthcare system is consistently ranked among the best in the world, providing exceptional medical care that is accessible, affordable, and comprehensive. With universal coverage through the Sécurité Sociale, most medical expenses are generously reimbursed, ensuring that quality healthcare is available to everyone. The system beautifully emphasizes preventive care, early detection, and accessibility, with most doctors accepting the national health insurance. This excellent healthcare system contributes significantly to France\'s high life expectancy and quality of life, giving residents peace of mind and confidence in their health and well-being.'
                  : 'Le système de santé français est constamment classé parmi les meilleurs au monde, fournissant des soins médicaux exceptionnels qui sont accessibles, abordables et complets. Avec une couverture universelle par la Sécurité Sociale, la plupart des frais médicaux sont généreusement remboursés, garantissant que des soins de santé de qualité sont disponibles pour tous. Le système met magnifiquement l\'accent sur les soins préventifs, la détection précoce et l\'accessibilité, la plupart des médecins acceptant l\'assurance maladie nationale. Ce excellent système de santé contribue significativement à la longue espérance de vie et à la qualité de vie de la France, donnant aux résidents la tranquillité d\'esprit et la confiance dans leur santé et leur bien-être.'}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LivingInFrance




