import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ImageWithFallback from '../components/ImageWithFallback'
import { getImage } from '../config/images'
import BackButton from '../components/BackButton'
import './Page.css'

function FranceForAmericans() {
  const { language } = useLanguage()

  const cards = [
    {
      id: 'visa',
      title: {
        en: 'Visa and Legal Requirements',
        fr: 'Visa et exigences légales'
      },
      text: {
        en: 'As an American citizen, you can stay in France for up to 90 days without a visa. For longer stays, you\'ll need to apply for a long-stay visa (visa de long séjour) before arriving. Popular options include the work visa, student visa, or the "visitor" visa for retirees. The process typically takes 2-3 months, so plan ahead. Once in France, you\'ll need to apply for a residence permit (titre de séjour) at your local préfecture.',
        fr: 'En tant que citoyen américain, vous pouvez rester en France jusqu\'à 90 jours sans visa. Pour des séjours plus longs, vous devrez demander un visa de long séjour avant d\'arriver. Les options populaires incluent le visa de travail, le visa étudiant ou le visa "visiteur" pour les retraités. Le processus prend généralement 2-3 mois, alors planifiez à l\'avance. Une fois en France, vous devrez demander un titre de séjour à votre préfecture locale.'
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
        en: 'France\'s healthcare system is consistently ranked among the best in the world. Once you\'re legally resident, you can access the French social security system (Sécurité Sociale), which covers 70-100% of medical costs. Most Americans find the quality of care excellent and the costs much lower than in the US. You\'ll need to register with the French health insurance system, and many also choose to purchase a "mutuelle" (supplementary insurance) for complete coverage.',
        fr: 'Le système de santé français est constamment classé parmi les meilleurs au monde. Une fois que vous êtes résident légal, vous pouvez accéder au système de sécurité sociale français (Sécurité Sociale), qui couvre 70-100% des coûts médicaux. La plupart des Américains trouvent la qualité des soins excellente et les coûts beaucoup plus bas qu\'aux États-Unis. Vous devrez vous inscrire au système d\'assurance maladie français, et beaucoup choisissent également d\'acheter une "mutuelle" (assurance complémentaire) pour une couverture complète.'
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
        en: 'While Paris can be expensive, smaller French cities offer excellent value. Housing costs are generally lower than major US cities, especially outside Paris. Food costs are comparable or lower, especially if you shop at local markets. Utilities, transportation, and healthcare are typically more affordable. The biggest adjustment for many Americans is the smaller living spaces, but the trade-off is often better quality of life and more time to enjoy it.',
        fr: 'Bien que Paris puisse être cher, les petites villes françaises offrent une excellente valeur. Les coûts du logement sont généralement plus bas que dans les grandes villes américaines, surtout en dehors de Paris. Les coûts alimentaires sont comparables ou plus bas, surtout si vous faites vos courses sur les marchés locaux. Les services publics, les transports et les soins de santé sont généralement plus abordables. Le plus grand ajustement pour de nombreux Américains est les espaces de vie plus petits, mais le compromis est souvent une meilleure qualité de vie et plus de temps pour en profiter.'
      },
      image: 'costOfLiving'
    },
    {
      id: 'work',
      title: {
        en: 'Work Culture Differences',
        fr: 'Différences de culture du travail'
      },
      text: {
        en: 'French work culture emphasizes work-life balance more than the US. The standard workweek is 35 hours, and employees receive 5 weeks of paid vacation plus public holidays. Lunch breaks are longer (often 1-2 hours), and the pace can be less intense. However, the job market can be competitive, and speaking French is often essential. Many Americans find remote work opportunities or start their own businesses, taking advantage of France\'s supportive environment for entrepreneurs.',
        fr: 'La culture du travail française met l\'accent sur l\'équilibre vie-travail plus qu\'aux États-Unis. La semaine de travail standard est de 35 heures, et les employés reçoivent 5 semaines de vacances payées plus les jours fériés. Les pauses déjeuner sont plus longues (souvent 1-2 heures), et le rythme peut être moins intense. Cependant, le marché du travail peut être compétitif, et parler français est souvent essentiel. Beaucoup d\'Américains trouvent des opportunités de travail à distance ou créent leur propre entreprise, profitant de l\'environnement favorable de la France pour les entrepreneurs.'
      },
      image: 'workCulture'
    },
    {
      id: 'tax',
      title: {
        en: 'Tax Considerations',
        fr: 'Considérations fiscales'
      },
      text: {
        en: 'As an American living in France, you\'ll need to file taxes in both countries. The US taxes citizens on worldwide income, but there are tax treaties and credits to avoid double taxation. France has a progressive income tax system, and you\'ll pay French taxes on your French income. It\'s essential to consult with a tax professional familiar with both US and French tax laws to ensure compliance and optimize your situation.',
        fr: 'En tant qu\'Américain vivant en France, vous devrez déclarer des impôts dans les deux pays. Les États-Unis imposent les citoyens sur le revenu mondial, mais il existe des traités fiscaux et des crédits pour éviter la double imposition. La France a un système d\'impôt sur le revenu progressif, et vous paierez des impôts français sur votre revenu français. Il est essentiel de consulter un professionnel fiscal familier avec les lois fiscales américaines et françaises pour assurer la conformité et optimiser votre situation.'
      },
      image: 'taxes'
    },
    {
      id: 'language',
      title: {
        en: 'Language and Integration',
        fr: 'Langue et intégration'
      },
      text: {
        en: 'While many French people speak English, especially in cities, learning French is crucial for integration and daily life. The French appreciate when foreigners make an effort to speak their language. Consider taking French classes before or after arriving. Many cities offer affordable French courses, and there are excellent online resources. Making French friends and participating in local activities will accelerate your learning and help you feel at home.',
        fr: 'Bien que beaucoup de Français parlent anglais, surtout dans les villes, apprendre le français est crucial pour l\'intégration et la vie quotidienne. Les Français apprécient quand les étrangers font un effort pour parler leur langue. Envisagez de prendre des cours de français avant ou après votre arrivée. Beaucoup de villes offrent des cours de français abordables, et il existe d\'excellentes ressources en ligne. Se faire des amis français et participer à des activités locales accélérera votre apprentissage et vous aidera à vous sentir chez vous.'
      },
      image: 'languageLearning'
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
            {language === 'en' ? 'France for Americans' : 'La France pour les Américains'}
          </h1>
          <p className="page-intro">
            {language === 'en'
              ? 'Moving to France from the United States offers an incredible opportunity to experience a different way of life while maintaining access to excellent services and quality of life. Understanding the key differences and advantages will help you make a smooth transition and fully enjoy your French adventure.'
              : 'Déménager en France depuis les États-Unis offre une opportunité incroyable de découvrir un mode de vie différent tout en conservant l\'accès à d\'excellents services et une qualité de vie. Comprendre les principales différences et avantages vous aidera à faire une transition en douceur et à profiter pleinement de votre aventure française.'}
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

export default FranceForAmericans

