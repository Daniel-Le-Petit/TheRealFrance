import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ImageWithFallback from '../components/ImageWithFallback'
import { getImage } from '../config/images'
import BackButton from '../components/BackButton'
import './Page.css'

function FrenchParadox() {
  const { language } = useLanguage()
  const [imageError, setImageError] = useState(false)

  return (
    <div className="page">
      <main className="page-content">
        <BackButton />
        <div className="featured-image-container">
          {!imageError ? (
            <img 
              src={getImage('frenchParadox', '/images/french-paradox.svg')} 
              alt="French paradox"
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
          {language === 'en' ? 'The French Paradox' : 'Le Paradoxe Français'}
        </h1>
        <p>
          {language === 'en'
            ? 'The "French Paradox" is a fascinating and positive phenomenon that has inspired researchers worldwide: despite enjoying a diet that includes cheese, butter, and wine, the French have remarkably lower rates of cardiovascular disease and longer life expectancies than many other countries. This wonderful observation highlights the positive aspects of the French approach to food and lifestyle.'
            : 'Le "Paradoxe français" est un phénomène fascinant et positif qui a inspiré des chercheurs du monde entier : malgré une alimentation qui comprend fromage, beurre et vin, les Français ont des taux remarquablement plus faibles de maladies cardiovasculaires et une espérance de vie plus longue que de nombreux autres pays. Cette merveilleuse observation met en évidence les aspects positifs de l\'approche française de la nourriture et du mode de vie.'}
        </p>
        <p>
          {language === 'en'
            ? 'The beautiful secret isn\'t just what the French eat, but how they eat with joy and mindfulness: smaller portions of high-quality food, longer meals that allow true enjoyment, emphasis on quality over quantity, and a cultural approach that treats food as a source of pleasure and connection rather than just fuel. This positive philosophy, combined with regular physical activity, strong social connections, and taking time to savor life, contributes beautifully to French longevity and happiness-proving that enjoying food mindfully and socially is key to health and well-being.'
            : 'Le beau secret n\'est pas seulement ce que les Français mangent, mais comment ils mangent avec joie et attention : portions plus petites d\'aliments de haute qualité, repas plus longs qui permettent une véritable jouissance, accent sur la qualité plutôt que la quantité, et une approche culturelle qui traite la nourriture comme une source de plaisir et de connexion plutôt que comme du carburant. Cette philosophie positive, combinée à une activité physique régulière, des connexions sociales fortes et prendre le temps de savourer la vie, contribue magnifiquement à la longévité et au bonheur français-prouvant que profiter de la nourriture de manière consciente et sociale est la clé de la santé et du bien-être.'}
        </p>

        <div className="image-section">
          <ImageWithFallback 
            src={getImage('frenchWineCheese', '/images/french-wine-cheese.svg')} 
            alt={language === 'en' ? 'Wine and cheese' : 'Vin et fromage'}
            className="content-image"
            fallbackText={language === 'en' ? 'Wine & Cheese' : 'Vin & Fromage'}
          />
          <p>
            {language === 'en' 
              ? 'Wine and cheese are beloved staples of French cuisine, consumed regularly but always in moderation with great appreciation. The French approach to these foods beautifully emphasizes quality over quantity, thoughtful pairing, and genuine enjoyment rather than excess. This positive cultural relationship with food-treating it as art, pleasure, and connection-is key to understanding the French Paradox and demonstrates how enjoying food mindfully and socially contributes to both health and happiness.' 
              : 'Le vin et le fromage sont des éléments de base bien-aimés de la cuisine française, consommés régulièrement mais toujours avec modération et grande appréciation. L\'approche française de ces aliments met magnifiquement l\'accent sur la qualité plutôt que la quantité, l\'accord réfléchi et la jouissance authentique plutôt que l\'excès. Cette relation culturelle positive avec la nourriture-la traitant comme art, plaisir et connexion-est la clé pour comprendre le Paradoxe français et démontre comment profiter de la nourriture de manière consciente et sociale contribue à la fois à la santé et au bonheur.'}
          </p>
        </div>

        <div className="image-gallery">
          <div className="gallery-item">
            <ImageWithFallback 
              src={getImage('frenchDiet', '/images/french-diet.svg')} 
              alt={language === 'en' ? 'French diet' : 'Régime français'}
              className="gallery-image"
              fallbackText={language === 'en' ? 'Diet' : 'Régime'}
            />
            <p className="gallery-caption">
              {language === 'en' ? 'Mediterranean Diet' : 'Régime méditerranéen'}
            </p>
            <div className="gallery-content">
              <p>
                {language === 'en'
                  ? 'The French diet, particularly in southern regions, beautifully follows healthy Mediterranean principles: fresh, seasonal vegetables and fruits, whole grains, quality olive oil, and moderate, mindful consumption of wine. This positive approach to eating emphasizes natural, unprocessed foods and celebrates seasonal produce. Portion control and meal structure (three balanced meals a day, no snacking) are also important factors that contribute to health. This way of eating is not about restriction but about enjoying high-quality, nutritious food in a balanced, pleasurable way.'
                  : 'Le régime français, en particulier dans les régions du sud, suit magnifiquement les principes sains méditerranéens : légumes et fruits frais et de saison, grains entiers, huile d\'olive de qualité et consommation modérée et consciente de vin. Cette approche positive de l\'alimentation met l\'accent sur les aliments naturels et non transformés et célèbre les produits de saison. Le contrôle des portions et la structure des repas (trois repas équilibrés par jour, pas de grignotage) sont également des facteurs importants qui contribuent à la santé. Cette façon de manger n\'est pas une restriction mais profiter d\'aliments nutritifs de haute qualité de manière équilibrée et agréable.'}
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <ImageWithFallback 
              src={getImage('frenchHealth', '/images/french-health.svg')} 
              alt={language === 'en' ? 'French health' : 'Santé française'}
              className="gallery-image"
              fallbackText={language === 'en' ? 'Health' : 'Santé'}
            />
            <p className="gallery-caption">
              {language === 'en' ? 'Longevity' : 'Longévité'}
            </p>
            <div className="gallery-content">
              <p>
                {language === 'en'
                  ? 'France has one of the highest life expectancies in the world, with women averaging over 85 years-a wonderful achievement that reflects the positive aspects of French lifestyle. This remarkable longevity is beautifully attributed to the combination of a healthy, enjoyable diet, excellent healthcare system, strong work-life balance, and meaningful social connections. The French emphasis on quality of life, not just length, is also significant-they believe in living well, not just living long. This positive approach to aging and living contributes to both longevity and happiness, making France a model for healthy, fulfilling living.'
                  : 'La France a l\'une des espérances de vie les plus élevées au monde, les femmes dépassant en moyenne 85 ans-une merveilleuse réalisation qui reflète les aspects positifs du mode de vie français. Cette longévité remarquable est magnifiquement attribuée à la combinaison d\'une alimentation saine et agréable, d\'un excellent système de santé, d\'un fort équilibre vie-travail et de connexions sociales significatives. L\'accent mis par les Français sur la qualité de vie, pas seulement la longueur, est également significatif-ils croient en bien vivre, pas seulement vivre longtemps. Cette approche positive du vieillissement et de la vie contribue à la fois à la longévité et au bonheur, faisant de la France un modèle pour une vie saine et épanouissante.'}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default FrenchParadox




