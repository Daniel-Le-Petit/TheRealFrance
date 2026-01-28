import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ImageWithFallback from '../components/ImageWithFallback'
import { getImage } from '../config/images'
import BackButton from '../components/BackButton'
import './Page.css'

function CostOfLivingInFrance() {
  const { language } = useLanguage()
  const [imageError, setImageError] = useState(false)

  return (
    <div className="page">
      <main className="page-content">
        <BackButton />
        <div className="featured-image-container">
          {!imageError ? (
            <img 
              src={getImage('costOfLiving', '/images/cost-of-living.svg')} 
              alt="Cost of living in France"
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
          {language === 'en' ? 'Cost of Living in France' : 'Coût de la vie en France'}
        </h1>
        <p>
          {language === 'en'
            ? 'The cost of living in France offers excellent value when you consider the exceptional quality of life, services, and benefits included. While Paris is among the more expensive cities in Europe, smaller cities and rural areas provide beautiful, affordable living with outstanding quality of life. Understanding these positive aspects helps you appreciate the value France offers.'
            : 'Le coût de la vie en France offre une excellente valeur lorsque vous considérez la qualité de vie exceptionnelle, les services et les avantages inclus. Bien que Paris soit parmi les villes les plus chères d\'Europe, les petites villes et les zones rurales fournissent une belle vie abordable avec une qualité de vie exceptionnelle. Comprendre ces aspects positifs vous aide à apprécier la valeur que la France offre.'}
        </p>
        <p>
          {language === 'en'
            ? 'France offers outstanding value in healthcare, education, public services, and quality of life. The excellent healthcare system, free or low-cost education, reliable public transport, and strong social protections mean that your money goes further in terms of well-being and security. The emphasis on work-life balance, cultural richness, and beautiful living environments makes France an excellent investment in your quality of life and happiness.'
            : 'La France offre une valeur exceptionnelle en matière de santé, d\'éducation, de services publics et de qualité de vie. L\'excellent système de santé, l\'éducation gratuite ou à faible coût, les transports publics fiables et les fortes protections sociales signifient que votre argent va plus loin en termes de bien-être et de sécurité. L\'accent mis sur l\'équilibre vie-travail, la richesse culturelle et les beaux environnements de vie fait de la France un excellent investissement dans votre qualité de vie et votre bonheur.'}
        </p>

        <div className="image-gallery">
          <div className="gallery-item">
            <ImageWithFallback 
              src={getImage('frenchGroceries', '/images/french-groceries.svg')} 
              alt={language === 'en' ? 'French groceries' : 'Courses en France'}
              className="gallery-image"
              fallbackText={language === 'en' ? 'Groceries' : 'Courses'}
            />
            <p className="gallery-caption">
              {language === 'en' ? 'Food Costs' : 'Coûts alimentaires'}
            </p>
            <div className="gallery-content">
              <p>
                {language === 'en'
                  ? 'Food costs in France offer excellent value when you discover the joy of shopping at local markets and supporting regional producers. Quality, fresh produce is available at wonderful prices, especially when buying seasonal items. The French food culture celebrates cooking at home with local ingredients, which is both economical and enjoyable. Eating out offers beautiful variety-from charming, affordable boulangeries and neighborhood cafés to world-class restaurants. This positive approach to food means you can eat well and healthily while supporting local economies and enjoying the pleasure of good food.'
                  : 'Les coûts alimentaires en France offrent une excellente valeur lorsque vous découvrez la joie de faire vos courses sur les marchés locaux et de soutenir les producteurs régionaux. Des produits frais de qualité sont disponibles à des prix merveilleux, surtout lors de l\'achat d\'articles de saison. La culture alimentaire française célèbre la cuisine à la maison avec des ingrédients locaux, ce qui est à la fois économique et agréable. Manger au restaurant offre une belle variété-des boulangeries et cafés de quartier charmants et abordables aux restaurants de classe mondiale. Cette approche positive de la nourriture signifie que vous pouvez bien manger et sainement tout en soutenant les économies locales et en profitant du plaisir de la bonne nourriture.'}
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <ImageWithFallback 
              src={getImage('frenchRent', '/images/french-rent.svg')} 
              alt={language === 'en' ? 'French rent' : 'Loyer en France'}
              className="gallery-image"
              fallbackText={language === 'en' ? 'Rent' : 'Loyer'}
            />
            <p className="gallery-caption">
              {language === 'en' ? 'Housing Costs' : 'Coûts du logement'}
            </p>
            <div className="gallery-content">
              <p>
                {language === 'en'
                  ? 'Housing in France offers beautiful options across all price ranges, with strong tenant protections that make renting secure and fair. While Paris is more expensive, it offers unparalleled cultural and professional opportunities. Smaller cities provide excellent value with charming properties, beautiful architecture, and lower costs-a one-bedroom apartment might cost €400-800/month compared to Paris\'s €1,200-2,500. Rural areas offer even better value with stunning countryside homes. The French rental system includes strong legal protections for tenants, making housing investment secure and giving you peace of mind in your home.'
                  : 'Le logement en France offre de belles options dans toutes les gammes de prix, avec de fortes protections des locataires qui rendent la location sécurisée et équitable. Bien que Paris soit plus cher, il offre des opportunités culturelles et professionnelles sans égal. Les petites villes offrent une excellente valeur avec des propriétés charmantes, une belle architecture et des coûts plus bas-un appartement d\'une chambre pourrait coûter 400-800 €/mois comparé aux 1 200-2 500 € de Paris. Les zones rurales offrent une meilleure valeur encore avec de magnifiques maisons de campagne. Le système locatif français comprend de fortes protections légales pour les locataires, rendant l\'investissement en logement sécurisé et vous donnant la tranquillité d\'esprit dans votre maison.'}
              </p>
            </div>
          </div>
          <div className="gallery-item">
            <ImageWithFallback 
              src={getImage('frenchUtilities', '/images/french-utilities.svg')} 
              alt={language === 'en' ? 'French utilities' : 'Services publics en France'}
              className="gallery-image"
              fallbackText={language === 'en' ? 'Utilities' : 'Services'}
            />
            <p className="gallery-caption">
              {language === 'en' ? 'Utilities' : 'Services publics'}
            </p>
            <div className="gallery-content">
              <p>
                {language === 'en'
                  ? 'Utility costs in France are generally reasonable and well-regulated, with excellent service quality. France has invested significantly in energy efficiency, and many apartments are well-insulated, helping to keep heating costs manageable while being environmentally responsible. Internet and phone services are competitive with good coverage and reliable service. The average monthly utility bill for a small apartment ranges from €80-150, providing good value for reliable, quality services. France\'s commitment to renewable energy and efficiency means you\'re investing in both your comfort and environmental sustainability.'
                  : 'Les coûts des services publics en France sont généralement raisonnables et bien réglementés, avec une excellente qualité de service. La France a investi considérablement dans l\'efficacité énergétique, et beaucoup d\'appartements sont bien isolés, aidant à maintenir les coûts de chauffage gérables tout en étant respectueux de l\'environnement. Les services internet et téléphoniques sont compétitifs avec une bonne couverture et un service fiable. La facture mensuelle moyenne des services publics pour un petit appartement varie de 80-150 €, offrant une bonne valeur pour des services fiables et de qualité. L\'engagement de la France envers les énergies renouvelables et l\'efficacité signifie que vous investissez à la fois dans votre confort et la durabilité environnementale.'}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CostOfLivingInFrance




