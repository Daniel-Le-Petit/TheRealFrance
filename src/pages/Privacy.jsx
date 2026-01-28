import { useLanguage } from '../contexts/LanguageContext'
import BackButton from '../components/BackButton'
import './Page.css'

function Privacy() {
  const { language } = useLanguage()

  return (
    <div className="page">
      <main className="page-content">
        <BackButton />
        <div className="page-header">
          <h1>
            {language === 'en' ? 'Privacy Policy' : 'Politique de confidentialité'}
          </h1>
        </div>

        <section>
          <h2>
            {language === 'en' ? 'Introduction' : 'Introduction'}
          </h2>
          <p>
            {language === 'en'
              ? 'TheRealFrance is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website.'
              : 'TheRealFrance s\'engage à protéger votre vie privée. Cette Politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous visitez notre site web.'}
          </p>
        </section>

        <section>
          <h2>
            {language === 'en' ? 'Information We Collect' : 'Informations que nous collectons'}
          </h2>
          <p>
            {language === 'en'
              ? 'When you use our contact form, we collect the following information:'
              : 'Lorsque vous utilisez notre formulaire de contact, nous collectons les informations suivantes :'}
          </p>
          <ul>
            <li>
              {language === 'en' ? 'Name' : 'Nom'}
            </li>
            <li>
              {language === 'en' ? 'Email address' : 'Adresse email'}
            </li>
            <li>
              {language === 'en' ? 'Message content' : 'Contenu du message'}
            </li>
          </ul>
          <p>
            {language === 'en'
              ? 'We may also collect technical information such as your IP address, browser type, and device information for website analytics and security purposes.'
              : 'Nous pouvons également collecter des informations techniques telles que votre adresse IP, le type de navigateur et les informations sur votre appareil à des fins d\'analyse du site web et de sécurité.'}
          </p>
        </section>

        <section>
          <h2>
            {language === 'en' ? 'How We Use Your Information' : 'Comment nous utilisons vos informations'}
          </h2>
          <p>
            {language === 'en'
              ? 'We use the information you provide to:'
              : 'Nous utilisons les informations que vous fournissez pour :'}
          </p>
          <ul>
            <li>
              {language === 'en' ? 'Respond to your inquiries and messages' : 'Répondre à vos demandes et messages'}
            </li>
            <li>
              {language === 'en' ? 'Improve our website and services' : 'Améliorer notre site web et nos services'}
            </li>
            <li>
              {language === 'en' ? 'Ensure website security and prevent fraud' : 'Assurer la sécurité du site web et prévenir la fraude'}
            </li>
          </ul>
        </section>

        <section>
          <h2>
            {language === 'en' ? 'Data Protection' : 'Protection des données'}
          </h2>
          <p>
            {language === 'en'
              ? 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and is not shared with third parties without your consent, except as required by law.'
              : 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos informations personnelles contre l\'accès non autorisé, l\'altération, la divulgation ou la destruction. Vos données sont stockées de manière sécurisée et ne sont pas partagées avec des tiers sans votre consentement, sauf si la loi l\'exige.'}
          </p>
        </section>

        <section>
          <h2>
            {language === 'en' ? 'Your Rights' : 'Vos droits'}
          </h2>
          <p>
            {language === 'en'
              ? 'Under the General Data Protection Regulation (GDPR) and French data protection laws, you have the right to:'
              : 'En vertu du Règlement Général sur la Protection des Données (RGPD) et des lois françaises sur la protection des données, vous avez le droit de :'}
          </p>
          <ul>
            <li>
              {language === 'en' ? 'Access your personal data' : 'Accéder à vos données personnelles'}
            </li>
            <li>
              {language === 'en' ? 'Request correction of inaccurate data' : 'Demander la correction de données inexactes'}
            </li>
            <li>
              {language === 'en' ? 'Request deletion of your data' : 'Demander la suppression de vos données'}
            </li>
            <li>
              {language === 'en' ? 'Object to the processing of your data' : 'Vous opposer au traitement de vos données'}
            </li>
            <li>
              {language === 'en' ? 'Request data portability' : 'Demander la portabilité des données'}
            </li>
          </ul>
          <p>
            {language === 'en'
              ? 'To exercise these rights, please contact us at contact@therealfrance.com'
              : 'Pour exercer ces droits, veuillez nous contacter à contact@therealfrance.com'}
          </p>
        </section>

        <section>
          <h2>
            {language === 'en' ? 'Cookies' : 'Cookies'}
          </h2>
          <p>
            {language === 'en'
              ? 'This website may use cookies to enhance your browsing experience. Cookies are small text files stored on your device. You can control cookie settings through your browser preferences.'
              : 'Ce site web peut utiliser des cookies pour améliorer votre expérience de navigation. Les cookies sont de petits fichiers texte stockés sur votre appareil. Vous pouvez contrôler les paramètres des cookies via les préférences de votre navigateur.'}
          </p>
        </section>

        <section>
          <h2>
            {language === 'en' ? 'Third-Party Services' : 'Services tiers'}
          </h2>
          <p>
            {language === 'en'
              ? 'We use EmailJS to process contact form submissions. EmailJS may process your information according to their own privacy policy. We recommend reviewing EmailJS\'s privacy policy for more information.'
              : 'Nous utilisons EmailJS pour traiter les soumissions du formulaire de contact. EmailJS peut traiter vos informations conformément à sa propre politique de confidentialité. Nous recommandons de consulter la politique de confidentialité d\'EmailJS pour plus d\'informations.'}
          </p>
        </section>

        <section>
          <h2>
            {language === 'en' ? 'Changes to This Policy' : 'Modifications de cette politique'}
          </h2>
          <p>
            {language === 'en'
              ? 'We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated date.'
              : 'Nous pouvons mettre à jour cette Politique de confidentialité de temps à autre. Nous vous informerons de tout changement important en publiant la nouvelle politique sur cette page avec une date mise à jour.'}
          </p>
        </section>

        <section>
          <h2>
            {language === 'en' ? 'Contact Us' : 'Contactez-nous'}
          </h2>
          <p>
            {language === 'en'
              ? 'If you have any questions about this Privacy Policy, please contact us at contact@therealfrance.com'
              : 'Si vous avez des questions concernant cette Politique de confidentialité, veuillez nous contacter à contact@therealfrance.com'}
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

export default Privacy

