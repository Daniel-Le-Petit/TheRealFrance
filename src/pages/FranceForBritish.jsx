import { useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ImageWithFallback from '../components/ImageWithFallback'
import { getImage } from '../config/images'
import BackButton from '../components/BackButton'
import './Page.css'

function FranceForBritish() {
  const { language } = useLanguage()

  const cards = [
    {
      id: 'visa',
      title: {
        en: 'Post-Brexit Visa Requirements',
        fr: 'Exigences de visa post-Brexit'
      },
      text: {
        en: 'Since Brexit, British citizens can no longer freely move to France. You can visit for up to 90 days in any 180-day period without a visa. For longer stays, you\'ll need a long-stay visa (visa de long séjour) before arriving. Options include work visas, student visas, or visitor visas for retirees. The application process typically takes 2-3 months. If you were already living in France before December 31, 2020, you may be eligible for a "Withdrawal Agreement" residence permit.',
        fr: 'Depuis le Brexit, les citoyens britanniques ne peuvent plus se déplacer librement en France. Vous pouvez visiter jusqu\'à 90 jours sur une période de 180 jours sans visa. Pour des séjours plus longs, vous aurez besoin d\'un visa de long séjour avant d\'arriver. Les options incluent les visas de travail, les visas étudiants ou les visas visiteurs pour les retraités. Le processus de demande prend généralement 2-3 mois. Si vous viviez déjà en France avant le 31 décembre 2020, vous pourriez être éligible pour un titre de séjour "Accord de retrait".'
      },
      image: 'visaDocument'
    },
    {
      id: 'healthcare',
      title: {
        en: 'Healthcare After Brexit',
        fr: 'Santé après le Brexit'
      },
      text: {
        en: 'British citizens can no longer use the European Health Insurance Card (EHIC) in France. You\'ll need comprehensive health insurance when visiting, and for long-term residents, you\'ll need to register with the French healthcare system (Sécurité Sociale) once you have legal residence. The system is excellent and covers most medical costs. Many British expats find the healthcare quality comparable or better than the NHS, with shorter waiting times for specialists.',
        fr: 'Les citoyens britanniques ne peuvent plus utiliser la Carte européenne d\'assurance maladie (CEAM) en France. Vous aurez besoin d\'une assurance maladie complète lors de vos visites, et pour les résidents de longue durée, vous devrez vous inscrire au système de santé français (Sécurité Sociale) une fois que vous avez une résidence légale. Le système est excellent et couvre la plupart des coûts médicaux. Beaucoup d\'expatriés britanniques trouvent la qualité des soins comparable ou meilleure que le NHS, avec des temps d\'attente plus courts pour les spécialistes.'
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
        en: 'France offers excellent value compared to the UK, especially outside Paris. Property prices are generally lower, and you get more for your money. Food costs are similar or lower, especially if you shop at local markets. Utilities and transportation are often more affordable. Many British expats find they can maintain a better lifestyle in France on the same or lower income, particularly in rural areas or smaller cities.',
        fr: 'La France offre une excellente valeur par rapport au Royaume-Uni, surtout en dehors de Paris. Les prix de l\'immobilier sont généralement plus bas, et vous obtenez plus pour votre argent. Les coûts alimentaires sont similaires ou plus bas, surtout si vous faites vos courses sur les marchés locaux. Les services publics et les transports sont souvent plus abordables. Beaucoup d\'expatriés britanniques trouvent qu\'ils peuvent maintenir un meilleur style de vie en France avec le même revenu ou moins, particulièrement dans les zones rurales ou les petites villes.'
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
        en: 'To work in France, you\'ll need a work visa and a job offer. The French job market can be competitive, and speaking French is often essential. However, there are opportunities in tourism, teaching English, tech, and international business. Many British expats work remotely for UK companies or start their own businesses. The work-life balance is better than in the UK, with 35-hour weeks and 5 weeks of paid holiday.',
        fr: 'Pour travailler en France, vous aurez besoin d\'un visa de travail et d\'une offre d\'emploi. Le marché du travail français peut être compétitif, et parler français est souvent essentiel. Cependant, il y a des opportunités dans le tourisme, l\'enseignement de l\'anglais, la technologie et les affaires internationales. Beaucoup d\'expatriés britanniques travaillent à distance pour des entreprises britanniques ou créent leur propre entreprise. L\'équilibre vie-travail est meilleur qu\'au Royaume-Uni, avec des semaines de 35 heures et 5 semaines de vacances payées.'
      },
      image: 'workCulture'
    },
    {
      id: 'property',
      title: {
        en: 'Property and Housing',
        fr: 'Propriété et logement'
      },
      text: {
        en: 'Many British citizens buy property in France, often in rural areas or smaller towns where prices are more affordable. The property buying process is different from the UK, involving a notaire (notary) and taking 2-3 months. Renting is also popular, with strong tenant protections. Whether buying or renting, you\'ll find better value than in most of the UK, especially for character properties and larger spaces.',
        fr: 'Beaucoup de citoyens britanniques achètent des propriétés en France, souvent dans les zones rurales ou les petites villes où les prix sont plus abordables. Le processus d\'achat immobilier est différent du Royaume-Uni, impliquant un notaire et prenant 2-3 mois. La location est également populaire, avec de fortes protections des locataires. Que vous achetiez ou louiez, vous trouverez une meilleure valeur que dans la plupart du Royaume-Uni, surtout pour les propriétés avec du caractère et les espaces plus grands.'
      },
      image: 'frenchHousing'
    },
    {
      id: 'culture',
      title: {
        en: 'Cultural Similarities and Differences',
        fr: 'Similitudes et différences culturelles'
      },
      text: {
        en: 'While France and the UK share some cultural similarities, there are important differences. The French place more emphasis on food, meals are longer and more social, and the pace of life is generally slower. Bureaucracy can be more complex, but services are often excellent. Learning French will greatly enhance your experience, though many French people speak English. The proximity to the UK makes it easy to visit family and friends, and many British expats maintain strong connections with home.',
        fr: 'Bien que la France et le Royaume-Uni partagent certaines similitudes culturelles, il y a des différences importantes. Les Français accordent plus d\'importance à la nourriture, les repas sont plus longs et plus sociaux, et le rythme de vie est généralement plus lent. La bureaucratie peut être plus complexe, mais les services sont souvent excellents. Apprendre le français améliorera grandement votre expérience, bien que beaucoup de Français parlent anglais. La proximité du Royaume-Uni facilite les visites à la famille et aux amis, et beaucoup d\'expatriés britanniques maintiennent des liens forts avec leur pays d\'origine.'
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
            {language === 'en' ? 'France for British Citizens' : 'La France pour les Anglais'}
          </h1>
          <p className="page-intro">
            {language === 'en'
              ? 'Moving to France from the UK offers a wonderful opportunity to experience continental European life while staying relatively close to home. With Brexit, the process has changed, but France remains an attractive destination for British citizens seeking a new adventure, better weather, or a different pace of life.'
              : 'Déménager en France depuis le Royaume-Uni offre une merveilleuse opportunité de découvrir la vie européenne continentale tout en restant relativement proche de chez soi. Avec le Brexit, le processus a changé, mais la France reste une destination attractive pour les citoyens britanniques cherchant une nouvelle aventure, un meilleur temps ou un rythme de vie différent.'}
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

export default FranceForBritish

