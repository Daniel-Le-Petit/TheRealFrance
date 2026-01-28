import { useLanguage } from '../contexts/LanguageContext'
import BackButton from '../components/BackButton'
import './Page.css'

function Legal() {
  const { language } = useLanguage()

  return (
    <div className="page">
      <main className="page-content">
        <BackButton />
        <div className="page-header">
          <h1>
            {language === 'en' ? 'Legal Notice' : 'Mentions légales'}
          </h1>
        </div>

        <section>
          <h2>
            {language === 'en' ? 'Publisher Information' : 'Informations éditeur'}
          </h2>
          <p>
            {language === 'en'
              ? 'This website is published by TheRealFrance.'
              : 'Ce site web est édité par TheRealFrance.'}
          </p>
          <p>
            {language === 'en'
              ? 'Address: Lyon, France'
              : 'Adresse : Lyon, France'}
          </p>
          <p>
            {language === 'en'
              ? 'Email: contact@therealfrance.com'
              : 'Email : contact@therealfrance.com'}
          </p>
        </section>

        <section>
          <h2>
            {language === 'en' ? 'Hosting' : 'Hébergement'}
          </h2>
          <p>
            {language === 'en'
              ? 'This website is hosted on modern cloud infrastructure.'
              : 'Ce site web est hébergé sur une infrastructure cloud moderne.'}
          </p>
        </section>

        <section>
          <h2>
            {language === 'en' ? 'Intellectual Property' : 'Propriété intellectuelle'}
          </h2>
          <p>
            {language === 'en'
              ? 'All content on this website, including text, images, graphics, and logos, is the property of TheRealFrance or its content providers and is protected by French and international copyright laws. Any reproduction, distribution, or use of this content without prior written authorization is prohibited.'
              : 'Tout le contenu de ce site web, y compris les textes, images, graphiques et logos, est la propriété de TheRealFrance ou de ses fournisseurs de contenu et est protégé par les lois françaises et internationales sur le droit d\'auteur. Toute reproduction, distribution ou utilisation de ce contenu sans autorisation écrite préalable est interdite.'}
          </p>
        </section>

        <section>
          <h2>
            {language === 'en' ? 'Limitation of Liability' : 'Limitation de responsabilité'}
          </h2>
          <p>
            {language === 'en'
              ? 'TheRealFrance strives to provide accurate and up-to-date information. However, we cannot guarantee the completeness, accuracy, or timeliness of all information on this website. TheRealFrance shall not be liable for any direct or indirect damage resulting from the use of this website or the inability to access it.'
              : 'TheRealFrance s\'efforce de fournir des informations exactes et à jour. Cependant, nous ne pouvons garantir l\'exhaustivité, l\'exactitude ou l\'actualité de toutes les informations sur ce site web. TheRealFrance ne pourra être tenu responsable de tout dommage direct ou indirect résultant de l\'utilisation de ce site web ou de l\'impossibilité d\'y accéder.'}
          </p>
        </section>

        <section>
          <h2>
            {language === 'en' ? 'External Links' : 'Liens externes'}
          </h2>
          <p>
            {language === 'en'
              ? 'This website may contain links to external websites. TheRealFrance is not responsible for the content, privacy policies, or practices of these external sites.'
              : 'Ce site web peut contenir des liens vers des sites web externes. TheRealFrance n\'est pas responsable du contenu, des politiques de confidentialité ou des pratiques de ces sites externes.'}
          </p>
        </section>

        <section>
          <h2>
            {language === 'en' ? 'Applicable Law' : 'Droit applicable'}
          </h2>
          <p>
            {language === 'en'
              ? 'These legal notices are governed by French law. Any dispute relating to this website shall be subject to the exclusive jurisdiction of the French courts.'
              : 'Ces mentions légales sont régies par le droit français. Tout litige relatif à ce site web relèvera de la compétence exclusive des tribunaux français.'}
          </p>
        </section>

        <section>
          <p style={{ marginTop: '2rem', color: '#666', fontSize: '0.9rem' }}>
            {language === 'en'
              ? 'Last updated: ' + new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
              : 'Dernière mise à jour : ' + new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </section>
      </main>
    </div>
  )
}

export default Legal

