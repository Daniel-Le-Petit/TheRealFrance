import { useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ImageWithFallback from '../components/ImageWithFallback'
import { getImage } from '../config/images'
import BackButton from '../components/BackButton'
import './Page.css'

function FranceForAustralians() {
  const { language } = useLanguage()

  const cards = [
    {
      id: 'visa',
      title: {
        en: 'Visa Options for Australians',
        fr: 'Options de visa pour les Australiens'
      },
      text: {
        en: 'Australian citizens can visit France for up to 90 days within any 180-day period without a visa. For longer stays, you\'ll need a long-stay visa (visa de long séjour). Popular options include the Working Holiday Visa (for those under 30), work visas, student visas, or visitor visas for retirees. The application process takes 2-3 months, so plan well in advance. Australians under 30 can take advantage of the Working Holiday Visa, which allows work and travel for up to 12 months.',
        fr: 'Les citoyens australiens peuvent visiter la France jusqu\'à 90 jours sur une période de 180 jours sans visa. Pour des séjours plus longs, vous aurez besoin d\'un visa de long séjour. Les options populaires incluent le Visa Vacances-Travail (pour ceux de moins de 30 ans), les visas de travail, les visas étudiants ou les visas visiteurs pour les retraités. Le processus de demande prend 2-3 mois, alors planifiez bien à l\'avance. Les Australiens de moins de 30 ans peuvent profiter du Visa Vacances-Travail, qui permet de travailler et voyager jusqu\'à 12 mois.'
      },
      image: 'visaDocument'
    },
    {
      id: 'healthcare',
      title: {
        en: 'Healthcare System',
        fr: 'Système de santé'
      },
      text: {
        en: 'France\'s healthcare system is ranked among the best in the world and is generally more accessible than Australia\'s system. Once you\'re legally resident, you can access the French social security system (Sécurité Sociale), which covers 70-100% of medical costs. Many Australians appreciate the shorter waiting times compared to Australia and the high quality of care. You\'ll need comprehensive travel insurance for visits, and health insurance is required for visa applications.',
        fr: 'Le système de santé français est classé parmi les meilleurs au monde et est généralement plus accessible que le système australien. Une fois que vous êtes résident légal, vous pouvez accéder au système de sécurité sociale français (Sécurité Sociale), qui couvre 70-100% des coûts médicaux. Beaucoup d\'Australiens apprécient les temps d\'attente plus courts par rapport à l\'Australie et la haute qualité des soins. Vous aurez besoin d\'une assurance voyage complète pour les visites, et l\'assurance maladie est requise pour les demandes de visa.'
      },
      image: 'healthcareSystem'
    },
    {
      id: 'cost',
      title: {
        en: 'Cost of Living Comparison',
        fr: 'Comparaison du coût de la vie'
      },
      text: {
        en: 'France offers good value compared to Australia, especially in smaller cities and rural areas. Housing costs are generally lower, particularly outside Paris. Food and dining are often more affordable, especially if you shop at local markets and cook at home. Utilities and transportation are typically cheaper. However, salaries can be lower than in Australia, so it\'s important to research your specific situation. Many Australians find they can live well in France on a similar or lower budget.',
        fr: 'La France offre une bonne valeur par rapport à l\'Australie, surtout dans les petites villes et les zones rurales. Les coûts du logement sont généralement plus bas, particulièrement en dehors de Paris. La nourriture et les restaurants sont souvent plus abordables, surtout si vous faites vos courses sur les marchés locaux et cuisinez à la maison. Les services publics et les transports sont généralement moins chers. Cependant, les salaires peuvent être plus bas qu\'en Australie, il est donc important de rechercher votre situation spécifique. Beaucoup d\'Australiens trouvent qu\'ils peuvent bien vivre en France avec un budget similaire ou inférieur.'
      },
      image: 'costOfLiving'
    },
    {
      id: 'work',
      title: {
        en: 'Working in France',
        fr: 'Travailler en France'
      },
      text: {
        en: 'The French job market can be competitive, and speaking French is often essential. However, there are opportunities in tourism, teaching English, tech, hospitality, and international business. Many Australians work in bars, restaurants, or as English teachers. The Working Holiday Visa is popular for young Australians wanting to experience France while working. Remote work for Australian companies is also an option. The work-life balance is excellent, with 35-hour weeks and generous holiday entitlements.',
        fr: 'Le marché du travail français peut être compétitif, et parler français est souvent essentiel. Cependant, il y a des opportunités dans le tourisme, l\'enseignement de l\'anglais, la technologie, l\'hôtellerie et les affaires internationales. Beaucoup d\'Australiens travaillent dans des bars, des restaurants ou comme professeurs d\'anglais. Le Visa Vacances-Travail est populaire pour les jeunes Australiens qui veulent découvrir la France tout en travaillant. Le travail à distance pour des entreprises australiennes est également une option. L\'équilibre vie-travail est excellent, avec des semaines de 35 heures et des congés généreux.'
      },
      image: 'workCulture'
    },
    {
      id: 'distance',
      title: {
        en: 'Distance and Travel',
        fr: 'Distance et voyage'
      },
      text: {
        en: 'France is a long way from Australia, which is one of the main considerations. Flights take 20-24 hours and can be expensive, though there are often good deals. However, being in France means easy access to the rest of Europe, which many Australians find exciting. The time difference (8-10 hours depending on daylight saving) can make communication with family and friends in Australia challenging, but modern technology helps bridge the gap.',
        fr: 'La France est très loin de l\'Australie, ce qui est l\'une des principales considérations. Les vols prennent 20-24 heures et peuvent être chers, bien qu\'il y ait souvent de bonnes affaires. Cependant, être en France signifie un accès facile au reste de l\'Europe, ce que beaucoup d\'Australiens trouvent passionnant. La différence de temps (8-10 heures selon l\'heure d\'été) peut rendre la communication avec la famille et les amis en Australie difficile, mais la technologie moderne aide à combler le fossé.'
      },
      image: 'frenchTransport'
    },
    {
      id: 'culture',
      title: {
        en: 'Cultural Adaptation',
        fr: 'Adaptation culturelle'
      },
      text: {
        en: 'French culture differs significantly from Australian culture. The French place more emphasis on food, meals are longer and more social, and the pace of life is generally slower. Bureaucracy can be complex, but services are often excellent. Learning French is crucial for integration, though many French people speak English. Australians often appreciate the rich history, culture, and proximity to other European countries. The laid-back Australian attitude can sometimes clash with French formality, but most Australians adapt well and enjoy the experience.',
        fr: 'La culture française diffère considérablement de la culture australienne. Les Français accordent plus d\'importance à la nourriture, les repas sont plus longs et plus sociaux, et le rythme de vie est généralement plus lent. La bureaucratie peut être complexe, mais les services sont souvent excellents. Apprendre le français est crucial pour l\'intégration, bien que beaucoup de Français parlent anglais. Les Australiens apprécient souvent la riche histoire, la culture et la proximité d\'autres pays européens. L\'attitude décontractée australienne peut parfois entrer en conflit avec la formalité française, mais la plupart des Australiens s\'adaptent bien et apprécient l\'expérience.'
      },
      image: 'frenchCulture'
    }
  ]

  useEffect(() => {
    if (window.location.hash === '#top') {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <div className="page" id="top">
      <main className="page-content">
        <BackButton />
        <div className="page-header">
          <h1>
            {language === 'en' ? 'France for Australians' : 'La France pour les Australiens'}
          </h1>
          <p className="page-intro">
            {language === 'en'
              ? 'Moving to France from Australia offers an exciting opportunity to experience European culture, history, and lifestyle. While it\'s a significant distance from home, many Australians find France\'s quality of life, healthcare, and work-life balance make it an attractive destination for both short-term adventures and long-term relocation.'
              : 'Déménager en France depuis l\'Australie offre une opportunité passionnante de découvrir la culture, l\'histoire et le mode de vie européens. Bien que ce soit une distance significative de chez soi, beaucoup d\'Australiens trouvent que la qualité de vie, les soins de santé et l\'équilibre vie-travail de la France en font une destination attractive pour les aventures à court terme et la relocalisation à long terme.'}
          </p>
        </div>

        <div className="info-cards-grid">
          {cards.map((card) => (
            <div key={card.id} className="info-card">
              <div className="info-card-image-container">
                <ImageWithFallback
                  src={getImage(card.image, '/images/placeholder.svg')}
                  alt={card.title[language]}
                  className="info-card-image"
                  fallbackText={card.title[language]}
                />
              </div>
              <div className="info-card-content">
                <h2 className="info-card-title">
                  {card.title[language]}
                </h2>
                <p className="info-card-text">
                  {card.text[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default FranceForAustralians

