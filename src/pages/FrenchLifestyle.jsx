import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ImageWithFallback from '../components/ImageWithFallback'
import { getImage } from '../config/images'
import BackButton from '../components/BackButton'
import './Page.css'

function FrenchLifestyle() {
  const { language } = useLanguage()
  const [imageError, setImageError] = useState(false)

  return (
    <div className="page">
      <main className="page-content">
        <BackButton />
        <div className="featured-image-container">
          {!imageError ? (
            <img 
              src={getImage('frenchLifestyle', '/images/french-lifestyle.svg')} 
              alt="French lifestyle"
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
          {language === 'en' ? 'French Lifestyle' : 'Mode de vie français'}
        </h1>
        <p>
          {language === 'en'
            ? 'The French lifestyle is a beautiful celebration of quality, balance, and the art of living well-known as "l\'art de vivre." This philosophy emphasizes savoring life\'s pleasures, from perfectly prepared meals to meaningful conversations, from appreciating art and culture to maintaining strong family bonds. The French believe that life should be enjoyed, not just endured, and this positive approach creates a fulfilling and balanced existence.'
            : 'Le mode de vie français est une belle célébration de la qualité, de l\'équilibre et de l\'art de bien vivre-connu sous le nom de "l\'art de vivre". Cette philosophie met l\'accent sur la dégustation des plaisirs de la vie, des repas parfaitement préparés aux conversations significatives, de l\'appréciation de l\'art et de la culture au maintien de liens familiaux forts. Les Français croient que la vie doit être appréciée, pas seulement endurée, et cette approche positive crée une existence épanouissante et équilibrée.'}
        </p>
        <p>
          {language === 'en'
            ? 'What makes the French lifestyle so special is the emphasis on quality over quantity, on taking time to enjoy simple pleasures, and on building meaningful relationships. From the morning café ritual that starts the day with pleasure to the evening meal shared with family and friends, every moment is an opportunity to appreciate life. This positive approach to daily living contributes to France\'s reputation for excellent quality of life and happiness.'
            : 'Ce qui rend le mode de vie français si spécial, c\'est l\'accent mis sur la qualité plutôt que la quantité, sur le fait de prendre le temps de profiter des plaisirs simples, et sur la construction de relations significatives. Du rituel du café du matin qui commence la journée avec plaisir au repas du soir partagé en famille et entre amis, chaque moment est une opportunité d\'apprécier la vie. Cette approche positive de la vie quotidienne contribue à la réputation de la France pour une excellente qualité de vie et le bonheur.'}
        </p>

        <div className="image-gallery">
          <div className="gallery-item">
            <ImageWithFallback 
              src={getImage('frenchCafe', '/images/french-cafe.svg')} 
              alt={language === 'en' ? 'French café' : 'Café français'}
              className="gallery-image"
              fallbackText={language === 'en' ? 'Café' : 'Café'}
            />
            <p className="gallery-caption">
              {language === 'en' ? 'Café Culture' : 'Culture du café'}
            </p>
            <div className="gallery-content">
              <p>
                {language === 'en'
                  ? 'The café is the vibrant social heart of French life, a place where community, conversation, and culture come together beautifully. It\'s where friends meet for hours of conversation, where people work surrounded by the energy of city life, and where the simple pleasure of watching the world go by is valued. French cafés celebrate the art of taking time-time to think, to connect, to enjoy. This positive approach to social spaces creates warm, welcoming environments where everyone feels at home.'
                  : 'Le café est le cœur social vibrant de la vie française, un endroit où la communauté, la conversation et la culture se réunissent magnifiquement. C\'est là que les amis se rencontrent pour des heures de conversation, où les gens travaillent entourés de l\'énergie de la vie urbaine, et où le simple plaisir de regarder le monde passer est valorisé. Les cafés français célèbrent l\'art de prendre son temps-le temps de penser, de se connecter, de profiter. Cette approche positive des espaces sociaux crée des environnements chaleureux et accueillants où chacun se sent chez soi.'}
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <ImageWithFallback 
              src={getImage('frenchMarket', '/images/french-market.svg')} 
              alt={language === 'en' ? 'French market' : 'Marché français'}
              className="gallery-image"
              fallbackText={language === 'en' ? 'Market' : 'Marché'}
            />
            <p className="gallery-caption">
              {language === 'en' ? 'Local Markets' : 'Marchés locaux'}
            </p>
            <div className="gallery-content">
              <p>
                {language === 'en'
                  ? 'Weekly markets are a joyful cornerstone of French life, vibrant gatherings where fresh, local produce brings communities together. These markets offer more than shopping-they\'re social events where you connect with farmers, learn about seasonal foods, and become part of the local community. The French prioritize quality and seasonality, creating meals that celebrate the best of each season. This positive connection to food sources, producers, and local traditions makes markets a beloved part of French culture that supports both health and community bonds.'
                  : 'Les marchés hebdomadaires sont une pierre angulaire joyeuse de la vie française, des rassemblements dynamiques où les produits frais et locaux rassemblent les communautés. Ces marchés offrent plus que des achats-ce sont des événements sociaux où vous vous connectez avec les agriculteurs, apprenez sur les aliments de saison et devenez partie de la communauté locale. Les Français privilégient la qualité et la saisonnalité, créant des repas qui célèbrent le meilleur de chaque saison. Cette connexion positive aux sources alimentaires, aux producteurs et aux traditions locales fait des marchés une partie bien-aimée de la culture française qui soutient à la fois la santé et les liens communautaires.'}
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <ImageWithFallback 
              src={getImage('frenchDining', '/images/french-dining.svg')} 
              alt={language === 'en' ? 'French dining' : 'Repas français'}
              className="gallery-image"
              fallbackText={language === 'en' ? 'Dining' : 'Repas'}
            />
            <p className="gallery-caption">
              {language === 'en' ? 'French Dining Experience' : 'Expérience culinaire française'}
            </p>
            <div className="gallery-content">
              <p>
                {language === 'en'
                  ? 'Meals in France are beautiful celebrations of food, family, and friendship-not just sustenance, but meaningful events that bring people together. The French take genuine pleasure in their food, spending hours at the table to savor each course and enjoy conversation. Lunch breaks can last two hours, allowing time to truly appreciate the meal and recharge. Dinner is a cherished time for family connection and sharing the day\'s experiences. This positive approach to dining reflects the French belief that good food, good company, and taking time to enjoy both are essential to a happy, fulfilling life.'
                  : 'Les repas en France sont de belles célébrations de la nourriture, de la famille et de l\'amitié-pas seulement de la nourriture, mais des événements significatifs qui rassemblent les gens. Les Français prennent un plaisir authentique dans leur nourriture, passant des heures à table pour savourer chaque plat et profiter de la conversation. Les pauses déjeuner peuvent durer deux heures, permettant de vraiment apprécier le repas et de se ressourcer. Le dîner est un moment chéri pour la connexion familiale et le partage des expériences de la journée. Cette approche positive de la restauration reflète la croyance française que la bonne nourriture, la bonne compagnie et prendre le temps de profiter des deux sont essentiels à une vie heureuse et épanouissante.'}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default FrenchLifestyle




