import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import './Header.css'

function Header() {
  const { language, toggleLanguage } = useLanguage()
  const [logoError, setLogoError] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          {!logoError && (
            <img 
              src="/images/logo.svg" 
              alt="TheRealFrance" 
              className="logo-img"
              onError={() => setLogoError(true)}
            />
          )}
          <span>TheRealFrance</span>
        </Link>
        <nav className="nav">
          <Link to="/french-lifestyle">
            {language === 'en' ? 'French Lifestyle' : 'Mode de vie français'}
          </Link>
          <Link to="/habits-of-french-people">
            {language === 'en' ? 'Habits' : 'Habitudes'}
          </Link>
          <Link to="/french-culture-explained">
            {language === 'en' ? 'Culture' : 'Culture'}
          </Link>
          <Link to="/living-in-france">
            {language === 'en' ? 'Living in France' : 'Vivre en France'}
          </Link>
          <Link to="/about">
            {language === 'en' ? 'About' : 'À propos'}
          </Link>
          <Link to="/contact">
            {language === 'en' ? 'Contact' : 'Contact'}
          </Link>
        </nav>
        <button onClick={toggleLanguage} className="lang-toggle">
          {language === 'en' ? 'FR' : 'EN'}
        </button>
      </div>
    </header>
  )
}

export default Header




