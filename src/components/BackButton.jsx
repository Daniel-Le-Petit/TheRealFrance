import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import './BackButton.css'

function BackButton() {
  const navigate = useNavigate()
  const { language } = useLanguage()

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <button onClick={handleBack} className="back-button" aria-label={language === 'en' ? 'Go back' : 'Retour'}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span>{language === 'en' ? 'Back' : 'Retour'}</span>
    </button>
  )
}

export default BackButton






