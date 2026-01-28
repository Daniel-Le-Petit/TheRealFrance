import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ImageWithFallback from '../components/ImageWithFallback'
import { getImage } from '../config/images'
import BackButton from '../components/BackButton'
import './Page.css'

function HabitsOfFrenchPeople() {
  const { language } = useLanguage()
  const [imageError, setImageError] = useState(false)

  return (
    <div className="page">
      <main className="page-content">
        <BackButton />
        <div className="featured-image-container">
          {!imageError ? (
            <img 
              src={getImage('frenchHabits', '/images/french-habits.svg')} 
              alt="French habits"
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
          {language === 'en' ? 'Habits of French People' : 'Habitudes des Français'}
        </h1>
        <p>
          {language === 'en'
            ? 'French daily habits beautifully reflect a culture that values quality, tradition, and balance-creating a lifestyle that prioritizes well-being and human connection. These positive routines, lovingly passed down through generations, shape the French way of life and contribute to France\'s reputation for excellent quality of life and happiness.'
            : 'Les habitudes quotidiennes françaises reflètent magnifiquement une culture qui valorise la qualité, la tradition et l\'équilibre-créant un mode de vie qui privilégie le bien-être et la connexion humaine. Ces routines positives, transmises avec amour de génération en génération, façonnent le mode de vie français et contribuent à la réputation de la France pour une excellente qualité de vie et le bonheur.'}
        </p>
        <p>
          {language === 'en'
            ? 'From the daily trip to the boulangerie that supports local artisans to the warm ritual of greeting with "la bise" that creates human connection, these habits strengthen community bonds and add meaning to daily life. Understanding and embracing these positive customs helps you appreciate the richness of French culture and the values that make French life so special.'
            : 'Du voyage quotidien à la boulangerie qui soutient les artisans locaux au rituel chaleureux de salutation avec "la bise" qui crée une connexion humaine, ces habitudes renforcent les liens communautaires et ajoutent du sens à la vie quotidienne. Comprendre et embrasser ces coutumes positives vous aide à apprécier la richesse de la culture française et les valeurs qui rendent la vie française si spéciale.'}
        </p>

        <div className="image-gallery">
          <div className="gallery-item">
            <ImageWithFallback 
              src={getImage('frenchBaguette', '/images/french-baguette.svg')} 
              alt={language === 'en' ? 'French baguette' : 'Baguette française'}
              className="gallery-image"
              fallbackText={language === 'en' ? 'Baguette' : 'Baguette'}
            />
            <p className="gallery-caption">
              {language === 'en' ? 'Daily Baguette' : 'Baguette quotidienne'}
            </p>
            <div className="gallery-content">
              <p>
                {language === 'en'
                  ? 'The daily baguette run is a beloved quintessential French habit that brings joy and connection to everyday life. Many French people visit their local boulangerie every day to buy fresh, artisanal bread-a simple pleasure that supports local businesses and maintains warm social connections with neighbors and bakers. This positive tradition ensures the freshest quality while strengthening community bonds. The French take pride in supporting neighborhood artisans rather than buying mass-produced bread, creating a beautiful cycle of local economy and human connection that makes daily errands meaningful and pleasant.'
                  : 'La course quotidienne à la baguette est une habitude française par excellence bien-aimée qui apporte joie et connexion à la vie quotidienne. Beaucoup de Français visitent leur boulangerie locale tous les jours pour acheter du pain frais et artisanal-un plaisir simple qui soutient les entreprises locales et maintient des liens sociaux chaleureux avec les voisins et les boulangers. Cette tradition positive assure la qualité la plus fraîche tout en renforçant les liens communautaires. Les Français sont fiers de soutenir les artisans de quartier plutôt que d\'acheter du pain produit en masse, créant un beau cycle d\'économie locale et de connexion humaine qui rend les courses quotidiennes significatives et agréables.'}
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <ImageWithFallback 
              src={getImage('frenchGreeting', '/images/french-greeting.svg')} 
              alt={language === 'en' ? 'French greeting' : 'Salutation française'}
              className="gallery-image"
              fallbackText={language === 'en' ? 'Greeting' : 'Salutation'}
            />
            <p className="gallery-caption">
              {language === 'en' ? 'La Bise' : 'La bise'}
            </p>
            <div className="gallery-content">
              <p>
                {language === 'en'
                  ? '"La bise" is the warm, affectionate French custom of greeting with cheek kisses that beautifully expresses friendship, family bonds, and human connection. The number of kisses varies charmingly by region (typically 2-4), creating a delightful local tradition. This positive greeting is used for friends, family, and sometimes colleagues, creating physical connection and showing genuine warmth and care. La bise reflects the French value of human connection and the importance of expressing affection in daily interactions, making social encounters more personal and meaningful than a simple handshake.'
                  : '"La bise" est la coutume française chaleureuse et affectueuse de saluer avec des baisers sur la joue qui exprime magnifiquement l\'amitié, les liens familiaux et la connexion humaine. Le nombre de baisers varie de manière charmante selon les régions (généralement 2-4), créant une tradition locale délicieuse. Cette salutation positive est utilisée pour les amis, la famille et parfois les collègues, créant une connexion physique et montrant une chaleur et un soin authentiques. La bise reflète la valeur française de la connexion humaine et l\'importance d\'exprimer l\'affection dans les interactions quotidiennes, rendant les rencontres sociales plus personnelles et significatives qu\'une simple poignée de main.'}
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <ImageWithFallback 
              src={getImage('frenchWorkLife', '/images/french-work-life.svg')} 
              alt={language === 'en' ? 'Work-life balance' : 'Équilibre vie-travail'}
              className="gallery-image"
              fallbackText={language === 'en' ? 'Balance' : 'Équilibre'}
            />
            <p className="gallery-caption">
              {language === 'en' ? 'Work-Life Balance' : 'Équilibre vie-travail'}
            </p>
            <div className="gallery-content">
              <p>
                {language === 'en'
                  ? 'The French beautifully demonstrate that work-life balance is not a luxury but a fundamental right and key to happiness. With a 35-hour work week, generous vacation time (5 weeks minimum), and strong labor protections, France prioritizes personal time, family life, and well-being. Long lunch breaks allow time to enjoy meals and recharge, weekends are truly sacred for rest and connection, and the concept of "burnout" is taken seriously. This positive approach to work-life balance contributes to France\'s high quality of life, strong family bonds, and overall happiness-proving that valuing personal time and relationships leads to a more fulfilling and productive life.'
                  : 'Les Français démontrent magnifiquement que l\'équilibre vie-travail n\'est pas un luxe mais un droit fondamental et une clé du bonheur. Avec une semaine de travail de 35 heures, des vacances généreuses (5 semaines minimum) et de fortes protections du travail, la France privilégie le temps personnel, la vie familiale et le bien-être. Les longues pauses déjeuner permettent de profiter des repas et de se ressourcer, les week-ends sont vraiment sacrés pour le repos et la connexion, et le concept de "burnout" est pris au sérieux. Cette approche positive de l\'équilibre vie-travail contribue à la haute qualité de vie de la France, aux liens familiaux forts et au bonheur général-prouvant que valoriser le temps personnel et les relations mène à une vie plus épanouissante et productive.'}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HabitsOfFrenchPeople




