import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { useLanguage } from '../contexts/LanguageContext'
import ImageWithFallback from '../components/ImageWithFallback'
import { getImage } from '../config/images'
import './Page.css'

function Home() {
  const { language } = useLanguage()

  return (
    <div className="page">
      <Hero />
      <main className="page-content">
        <div className="welcome-highlight-section">
          <h2 className="welcome-highlight-title">
            {language === 'en' ? 'Welcome to TheRealFrance' : 'Bienvenue sur TheRealFrance'}
          </h2>
          <div className="welcome-highlight-content">
            <p className="welcome-highlight-text">
              {language === 'en'
                ? 'Discover the authentic France-a country celebrated for its art de vivre, rich cultural heritage, and exceptional quality of life. TheRealFrance invites you to explore the positive aspects of French life: from the world-renowned cuisine and wine culture to the emphasis on work-life balance, from the beautiful countryside to the vibrant regional traditions.'
                : 'Découvrez la France authentique-un pays célébré pour son art de vivre, son riche patrimoine culturel et sa qualité de vie exceptionnelle. TheRealFrance vous invite à explorer les aspects positifs de la vie française : de la cuisine et de la culture du vin de renommée mondiale à l\'accent mis sur l\'équilibre vie-travail, de la belle campagne aux traditions régionales dynamiques.'}
            </p>
            <p className="welcome-highlight-text">
              {language === 'en'
                ? 'France offers an exceptional lifestyle where quality takes precedence over quantity, where meals are moments of pleasure and connection, and where taking time to enjoy life is not a luxury but a way of life. Learn about the positive values that shape French society: appreciation for good food, strong family bonds, respect for culture and history, and a balanced approach to work and leisure.'
                : 'La France offre un mode de vie exceptionnel où la qualité prime sur la quantité, où les repas sont des moments de plaisir et de connexion, et où prendre le temps de profiter de la vie n\'est pas un luxe mais un mode de vie. Découvrez les valeurs positives qui façonnent la société française : l\'appréciation de la bonne nourriture, les liens familiaux forts, le respect de la culture et de l\'histoire, et une approche équilibrée du travail et des loisirs.'}
            </p>
            <p className="welcome-highlight-text">
              {language === 'en'
                ? 'Whether you\'re planning to move to France, already living here, or simply curious about what makes French life so special, we share the positive aspects of French culture, lifestyle, and daily habits that contribute to France\'s reputation as one of the best places to live in the world.'
                : 'Que vous planifiiez de déménager en France, que vous y viviez déjà, ou que vous soyez simplement curieux de ce qui rend la vie française si spéciale, nous partageons les aspects positifs de la culture française, du mode de vie et des habitudes quotidiennes qui contribuent à la réputation de la France comme l\'un des meilleurs endroits où vivre au monde.'}
            </p>
          </div>
        </div>

        <div className="nationality-cards-section">
          <div className="nationality-cards-grid">
            <Link to="/france-for-americans#top" className="nationality-card">
              <div className="nationality-card-flag">🇺🇸</div>
              <div className="nationality-card-image">
                <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=400&auto=format&fit=crop" alt="American" />
                <div className="nationality-card-overlay">
                  <h3 className="nationality-card-title">
                    {language === 'en' ? 'You are American' : 'Vous êtes Américain'}
                  </h3>
                  <p className="nationality-card-description">
                    {language === 'en' 
                      ? 'Essential information for Americans planning to move to France'
                      : 'Informations essentielles pour les Américains qui souhaitent venir en France'}
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/france-for-british#top" className="nationality-card">
              <div className="nationality-card-flag">🇬🇧</div>
              <div className="nationality-card-image">
                <img src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=400&auto=format&fit=crop" alt="British" />
                <div className="nationality-card-overlay">
                  <h3 className="nationality-card-title">
                    {language === 'en' ? 'You are British' : 'Vous êtes Anglais'}
                  </h3>
                  <p className="nationality-card-description">
                    {language === 'en'
                      ? 'Post-Brexit guide for British citizens moving to France'
                      : 'Guide post-Brexit pour les citoyens britanniques qui souhaitent venir en France'}
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/france-for-canadians#top" className="nationality-card">
              <div className="nationality-card-flag">🇨🇦</div>
              <div className="nationality-card-image">
                <img src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?q=80&w=400&auto=format&fit=crop" alt="Canadian" />
                <div className="nationality-card-overlay">
                  <h3 className="nationality-card-title">
                    {language === 'en' ? 'You are Canadian' : 'Vous êtes Canadien'}
                  </h3>
                  <p className="nationality-card-description">
                    {language === 'en'
                      ? 'Everything Canadians need to know about moving to France'
                      : 'Tout ce que les Canadiens doivent savoir pour venir en France'}
                  </p>
                </div>
              </div>
            </Link>

            <Link to="/france-for-australians#top" className="nationality-card">
              <div className="nationality-card-flag">🇦🇺</div>
              <div className="nationality-card-image">
                <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400&auto=format&fit=crop" alt="Australian" />
                <div className="nationality-card-overlay">
                  <h3 className="nationality-card-title">
                    {language === 'en' ? 'You are Australian' : 'Vous êtes Australien'}
                  </h3>
                  <p className="nationality-card-description">
                    {language === 'en'
                      ? 'Complete guide for Australians moving to France'
                      : 'Guide complet pour les Australiens qui souhaitent venir en France'}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <h2 style={{ marginTop: '4rem', marginBottom: '2rem' }}>
          {language === 'en' ? 'Discover the Beauty of France' : 'Découvrez la Beauté de la France'}
        </h2>
        
        <div className="image-gallery">
          <div className="gallery-item">
            <ImageWithFallback 
              src={getImage('frenchCountryside', '/images/french-countryside.svg')} 
              alt={language === 'en' ? 'French countryside' : 'Campagne française'}
              className="gallery-image"
              fallbackText={language === 'en' ? 'Countryside' : 'Campagne'}
            />
            <p className="gallery-caption">
              {language === 'en' ? 'Beautiful French Countryside' : 'Belle campagne française'}
            </p>
            <div className="gallery-content">
              <p>
                {language === 'en'
                  ? 'France\'s countryside is a breathtaking patchwork of rolling hills, vineyards, and charming villages that showcase the country\'s natural beauty. From the vibrant lavender fields of Provence to the lush green pastures of Normandy, each region offers its own unique charm and authentic way of life. The French countryside represents a slower, more connected way of living, where community bonds are strong and traditions are preserved with pride.'
                  : 'La campagne française est une mosaïque à couper le souffle de collines ondulantes, de vignobles et de villages charmants qui mettent en valeur la beauté naturelle du pays. Des champs de lavande vibrants de Provence aux pâturages verts luxuriants de Normandie, chaque région offre son propre charme unique et son mode de vie authentique. La campagne française représente un mode de vie plus lent et plus connecté, où les liens communautaires sont forts et les traditions sont préservées avec fierté.'}
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <ImageWithFallback 
              src={getImage('frenchVillage', '/images/french-village.svg')} 
              alt={language === 'en' ? 'French village' : 'Village français'}
              className="gallery-image"
              fallbackText={language === 'en' ? 'Village' : 'Village'}
            />
            <p className="gallery-caption">
              {language === 'en' ? 'Charming French Villages' : 'Charmants villages français'}
            </p>
            <div className="gallery-content">
              <p>
                {language === 'en'
                  ? 'French villages are the heart and soul of rural France, where genuine community spirit thrives and cherished traditions are lovingly preserved. These picturesque settlements offer a peaceful, slower pace of life where neighbors know each other, local markets bring people together, and festivals celebrate regional heritage. Living in a French village means being part of a close-knit community where quality of life, natural beauty, and human connections take center stage.'
                  : 'Les villages français sont le cœur et l\'âme de la France rurale, où un véritable esprit communautaire prospère et où les traditions chéries sont préservées avec amour. Ces établissements pittoresques offrent un rythme de vie paisible et plus lent où les voisins se connaissent, les marchés locaux rassemblent les gens et les festivals célèbrent le patrimoine régional. Vivre dans un village français signifie faire partie d\'une communauté soudée où la qualité de vie, la beauté naturelle et les connexions humaines sont au premier plan.'}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home


