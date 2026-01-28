import { useLanguage } from '../contexts/LanguageContext'
import './Footer.css'

function Footer() {
  const { language } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/legal" className="footer-link">
            {language === 'en' ? 'Legal Notice' : 'Mentions légales'}
          </a>
          <span className="footer-separator">|</span>
          <a href="/privacy" className="footer-link">
            {language === 'en' ? 'Privacy Policy' : 'Politique de confidentialité'}
          </a>
        </div>
        <p className="footer-copyright">
          © {new Date().getFullYear()} TheRealFrance. {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}
        </p>
      </div>
    </footer>
  )
}

export default Footer






