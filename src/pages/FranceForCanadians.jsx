import { useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ImageWithFallback from '../components/ImageWithFallback'
import { getImage } from '../config/images'
import BackButton from '../components/BackButton'
import './Page.css'

function FranceForCanadians() {
  const { language } = useLanguage()

  const cards = [
    {
      id: 'visa',
      title: {
        en: 'Visa Requirements for Canadians',
        fr: 'Exigences de visa pour les Canadiens'
      },
      text: {
        en: 'Canadian citizens can visit France for up to 90 days within any 180-day period without a visa. For longer stays, you\'ll need a long-stay visa (visa de long séjour) before arriving. Options include work visas, student visas, or visitor visas for retirees. Canadians under 35 can apply for the Working Holiday Visa (Programme Vacances-Travail), which allows work and travel for up to 24 months. The application process typically takes 2-3 months.',
        fr: 'Les citoyens canadiens peuvent visiter la France jusqu\'à 90 jours sur une période de 180 jours sans visa. Pour des séjours plus longs, vous aurez besoin d\'un visa de long séjour avant d\'arriver. Les options incluent les visas de travail, les visas étudiants ou les visas visiteurs pour les retraités. Les Canadiens de moins de 35 ans peuvent demander le Visa Vacances-Travail (Programme Vacances-Travail), qui permet de travailler et voyager jusqu\'à 24 mois. Le processus de demande prend généralement 2-3 mois.'
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
        en: 'France\'s healthcare system is consistently ranked among the best in the world and is similar in quality to Canada\'s system, but often with shorter waiting times. Once you\'re legally resident, you can access the French social security system (Sécurité Sociale), which covers 70-100% of medical costs. Many Canadians appreciate the accessibility and quality of care. You\'ll need comprehensive travel insurance for visits, and health insurance is required for visa applications.',
        fr: 'Le système de santé français est constamment classé parmi les meilleurs au monde et est similaire en qualité au système canadien, mais souvent avec des temps d\'attente plus courts. Une fois que vous êtes résident légal, vous pouvez accéder au système de sécurité sociale français (Sécurité Sociale), qui couvre 70-100% des coûts médicaux. Beaucoup de Canadiens apprécient l\'accessibilité et la qualité des soins. Vous aurez besoin d\'une assurance voyage complète pour les visites, et l\'assurance maladie est requise pour les demandes de visa.'
      },
      image: 'healthcareSystem'
    },
    {
      id: 'cost',
      title: {
        en: 'Cost of Living',
        fr: 'Coût de la vie'
      },
      text: {
        en: 'France offers good value compared to Canada, especially in smaller cities and rural areas. Housing costs are generally lower, particularly outside Paris. Food and dining are often more affordable, especially if you shop at local markets. Utilities and transportation are typically cheaper. However, salaries can be lower than in Canada, so research your specific situation. Many Canadians find they can maintain a good lifestyle in France, often with better work-life balance.',
        fr: 'La France offre une bonne valeur par rapport au Canada, surtout dans les petites villes et les zones rurales. Les coûts du logement sont généralement plus bas, particulièrement en dehors de Paris. La nourriture et les restaurants sont souvent plus abordables, surtout si vous faites vos courses sur les marchés locaux. Les services publics et les transports sont généralement moins chers. Cependant, les salaires peuvent être plus bas qu\'au Canada, alors recherchez votre situation spécifique. Beaucoup de Canadiens trouvent qu\'ils peuvent maintenir un bon style de vie en France, souvent avec un meilleur équilibre vie-travail.'
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
        en: 'The French job market can be competitive, and speaking French is often essential. However, there are opportunities in tourism, teaching English, tech, and international business. The Working Holiday Visa is popular for young Canadians. Many Canadians work remotely for Canadian companies or start their own businesses. The work-life balance is excellent, with 35-hour weeks and 5 weeks of paid holiday, which many Canadians find better than in Canada.',
        fr: 'Le marché du travail français peut être compétitif, et parler français est souvent essentiel. Cependant, il y a des opportunités dans le tourisme, l\'enseignement de l\'anglais, la technologie et les affaires internationales. Le Visa Vacances-Travail est populaire pour les jeunes Canadiens. Beaucoup de Canadiens travaillent à distance pour des entreprises canadiennes ou créent leur propre entreprise. L\'équilibre vie-travail est excellent, avec des semaines de 35 heures et 5 semaines de vacances payées, ce que beaucoup de Canadiens trouvent meilleur qu\'au Canada.'
      },
      image: 'workCulture'
    },
    {
      id: 'language',
      title: {
        en: 'Language Advantage',
        fr: 'Avantage linguistique'
      },
      text: {
        en: 'Canadians, especially those from Quebec or with French language skills, have a significant advantage when moving to France. However, even if you don\'t speak French, learning it is crucial for integration. The French appreciate when foreigners make an effort to speak their language. Many Canadians find that their existing French skills (if any) help, but European French differs from Quebec French in accent and some vocabulary. Taking French classes will help you adapt and integrate more smoothly.',
        fr: 'Les Canadiens, surtout ceux du Québec ou avec des compétences en français, ont un avantage significatif lors du déménagement en France. Cependant, même si vous ne parlez pas français, l\'apprendre est crucial pour l\'intégration. Les Français apprécient quand les étrangers font un effort pour parler leur langue. Beaucoup de Canadiens trouvent que leurs compétences françaises existantes (si elles existent) aident, mais le français européen diffère du français québécois en accent et en vocabulaire. Prendre des cours de français vous aidera à vous adapter et à vous intégrer plus facilement.'
      },
      image: 'languageLearning'
    },
    {
      id: 'culture',
      title: {
        en: 'Cultural Similarities',
        fr: 'Similitudes culturelles'
      },
      text: {
        en: 'Canada and France share some cultural similarities, particularly through the Quebec connection. Both countries value work-life balance, though France takes it further with shorter work weeks and more vacation time. The French emphasis on food and meals may be familiar to Canadians, though the French take it to another level. Canadians often appreciate France\'s rich history, culture, and proximity to other European countries. The transition can be smoother for Canadians than for some other nationalities, especially those with French language skills.',
        fr: 'Le Canada et la France partagent certaines similitudes culturelles, particulièrement à travers la connexion québécoise. Les deux pays valorisent l\'équilibre vie-travail, bien que la France aille plus loin avec des semaines de travail plus courtes et plus de temps de vacances. L\'accent français sur la nourriture et les repas peut être familier aux Canadiens, bien que les Français le portent à un autre niveau. Les Canadiens apprécient souvent la riche histoire, la culture et la proximité d\'autres pays européens de la France. La transition peut être plus douce pour les Canadiens que pour certaines autres nationalités, surtout ceux avec des compétences en français.'
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
            {language === 'en' ? 'France for Canadians' : 'La France pour les Canadiens'}
          </h1>
          <p className="page-intro">
            {language === 'en'
              ? 'Moving to France from Canada offers a wonderful opportunity to experience European culture while maintaining some cultural similarities. Canada and France share a historical connection through Quebec, and many Canadians find the transition smoother than expected. France\'s excellent quality of life, healthcare, and rich culture make it an attractive destination for Canadians seeking adventure or a new home.'
              : 'Déménager en France depuis le Canada offre une merveilleuse opportunité de découvrir la culture européenne tout en maintenant certaines similitudes culturelles. Le Canada et la France partagent une connexion historique à travers le Québec, et beaucoup de Canadiens trouvent la transition plus douce que prévu. L\'excellente qualité de vie, les soins de santé et la riche culture de la France en font une destination attractive pour les Canadiens cherchant l\'aventure ou un nouveau foyer.'}
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

export default FranceForCanadians

