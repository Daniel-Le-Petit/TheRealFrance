import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../contexts/LanguageContext'
import BackButton from '../components/BackButton'
import './Page.css'
import './Contact.css'

function Contact() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    honeypot: '' // Champ honeypot pour limiter le spam
  })
  const [status, setStatus] = useState('idle') // idle, sending, sent, error
  const [errorMessage, setErrorMessage] = useState('')

  // ⚠️ CONFIGURATION EMAILJS
  // Les clés sont lues depuis les variables d'environnement (.env)
  // Dans Vite, les variables doivent être préfixées par VITE_
  // Exemple dans .env :
  // VITE_EMAILJS_SERVICE_ID=service_go62bxn
  // VITE_EMAILJS_TEMPLATE_ID=template_sirltvl
  // VITE_EMAILJS_PUBLIC_KEY=gBCd9v4gii2QckAgK
  const EMAILJS_CONFIG = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
  }

  // Vérifier si EmailJS est configuré
  const isEmailJSConfigured = EMAILJS_CONFIG.serviceId !== 'YOUR_SERVICE_ID' && 
                              EMAILJS_CONFIG.templateId !== 'YOUR_TEMPLATE_ID' && 
                              EMAILJS_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY' &&
                              EMAILJS_CONFIG.serviceId &&
                              EMAILJS_CONFIG.templateId &&
                              EMAILJS_CONFIG.publicKey

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (status === 'error') {
      setStatus('idle')
      setErrorMessage('')
    }
  }

  const validateForm = () => {
    // Vérification du honeypot (doit rester vide)
    if (formData.honeypot) {
      setErrorMessage(language === 'en' ? 'Validation error' : 'Erreur de validation')
      return false
    }

    if (!formData.firstName.trim()) {
      setErrorMessage(language === 'en' ? 'First name is required' : 'Le prénom est requis')
      return false
    }

    if (!formData.lastName.trim()) {
      setErrorMessage(language === 'en' ? 'Last name is required' : 'Le nom est requis')
      return false
    }

    if (!formData.email.trim()) {
      setErrorMessage(language === 'en' ? 'Email is required' : 'L\'adresse email est requise')
      return false
    }

    if (!formData.email.includes('@')) {
      setErrorMessage(language === 'en' ? 'Please enter a valid email address' : 'Veuillez saisir une adresse email valide')
      return false
    }

    if (!formData.message.trim()) {
      setErrorMessage(language === 'en' ? 'Message is required' : 'Le message est requis')
      return false
    }

    if (formData.message.trim().length < 10) {
      setErrorMessage(language === 'en' ? 'Message must contain at least 10 characters' : 'Le message doit contenir au moins 10 caractères')
      return false
    }

    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      setStatus('error')
      return
    }

    // Vérifier si EmailJS est configuré avant d'essayer d'envoyer
    if (!isEmailJSConfigured) {
      setStatus('error')
      setErrorMessage(language === 'en'
        ? '⚠️ EmailJS is not configured yet. Please configure your EmailJS keys in src/pages/Contact.jsx. See EMAILJS_SETUP.md for instructions.'
        : '⚠️ EmailJS n\'est pas encore configuré. Veuillez configurer vos clés EmailJS dans src/pages/Contact.jsx. Consultez EMAILJS_SETUP.md pour les instructions.')
      return
    }

    setStatus('sending')
    setErrorMessage('')

    try {
      // Préparation des données pour EmailJS
      const fullName = `${formData.firstName} ${formData.lastName}`.trim()
      const templateParams = {
        from_name: fullName,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
        to_email: import.meta.env.VITE_EMAILJS_TO_EMAIL || 'contact@therealfrance.com',
        to_name: 'TheRealFrance',
        subject: (language === 'en' ? 'New message from ' : 'Nouveau message de ') + fullName + ' - TheRealFrance',
        date: new Date().toLocaleString(language === 'en' ? 'en-US' : 'fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      }

      console.log('EmailJS Parameters:', templateParams)

      // Envoi via EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      )

      console.log('Email sent successfully:', response)
      setStatus('sent')
      setFormData({ firstName: '', lastName: '', email: '', message: '', honeypot: '' })

    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
      
      // Vérifier si EmailJS n'est pas configuré
      if (EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID' || 
          EMAILJS_CONFIG.templateId === 'YOUR_TEMPLATE_ID' || 
          EMAILJS_CONFIG.publicKey === 'YOUR_PUBLIC_KEY') {
        setErrorMessage(language === 'en'
          ? '⚠️ EmailJS is not configured yet. Please configure your EmailJS keys in src/pages/Contact.jsx. See EMAILJS_SETUP.md for instructions.'
          : '⚠️ EmailJS n\'est pas encore configuré. Veuillez configurer vos clés EmailJS dans src/pages/Contact.jsx. Consultez EMAILJS_SETUP.md pour les instructions.')
        return
      }
      
      // Messages d'erreur selon le type d'erreur
      if (error.status === 400 && error.text && error.text.includes('service ID not found')) {
        setErrorMessage(language === 'en' 
          ? 'EmailJS service not found. Please check your Service ID in the configuration.'
          : 'Service EmailJS introuvable. Vérifiez votre Service ID dans la configuration.')
      } else if (error.status === 400) {
        setErrorMessage(language === 'en'
          ? 'Invalid EmailJS configuration. Please check your Service ID, Template ID, and Public Key.'
          : 'Configuration EmailJS invalide. Vérifiez votre Service ID, Template ID et Public Key.')
      } else if (error.status === 422) {
        setErrorMessage(language === 'en'
          ? 'EmailJS configuration error: Destination email is empty. Check your template configuration on emailjs.com.'
          : 'Erreur de configuration EmailJS : L\'adresse de destination est vide. Vérifiez la configuration du template sur emailjs.com.')
      } else if (error.message && error.message.includes('Invalid')) {
        setErrorMessage(language === 'en'
          ? 'Invalid EmailJS configuration. Check your service keys.'
          : 'Configuration EmailJS invalide. Vérifiez vos clés de service.')
      } else if (error.text && error.text.includes('Public Key')) {
        setErrorMessage(language === 'en'
          ? 'Invalid Public Key. Please check your EmailJS Public Key in Account > General.'
          : 'Clé publique invalide. Vérifiez votre Public Key EmailJS dans Account > General.')
      } else {
        // Message d'erreur par défaut avec plus de détails
        const errorDetails = error.text || error.message || error.toString() || 'Unknown error'
        console.error('Full error object:', error)
        setErrorMessage(language === 'en'
          ? `⚠️ EmailJS Error: ${errorDetails}. Please check: 1) Your EmailJS keys are configured correctly in Contact.jsx, 2) Your EmailJS service is active, 3) Your template has the correct variables. See EMAILJS_SETUP.md for help.`
          : `⚠️ Erreur EmailJS : ${errorDetails}. Vérifiez : 1) Vos clés EmailJS sont correctement configurées dans Contact.jsx, 2) Votre service EmailJS est actif, 3) Votre template a les bonnes variables. Consultez EMAILJS_SETUP.md pour de l'aide.`)
      }
    }
  }

  const getStatusMessage = () => {
    switch (status) {
      case 'sending':
        return language === 'en' ? 'Sending...' : 'Envoi en cours...'
      case 'sent':
        return language === 'en' 
          ? 'Message sent successfully! Thank you for your feedback.'
          : 'Message envoyé avec succès ! Merci pour votre retour.'
      case 'error':
        return errorMessage
      default:
        return ''
    }
  }

  const getStatusClass = () => {
    switch (status) {
      case 'sending':
        return 'status-sending'
      case 'sent':
        return 'status-success'
      case 'error':
        return 'status-error'
      default:
        return ''
    }
  }

  return (
    <div className="page contact-page">
      <main className="contact-main">
        <div className="contact-wrapper">
          <BackButton />
          {/* Left side - Dark background with info */}
          <div className="contact-info-side">
            <h1 className="contact-title">
              {language === 'en' ? 'Have questions about France?' : 'Des questions sur la France ?'}
            </h1>
            <p className="contact-description">
              {language === 'en'
                ? 'Whether you\'re planning to move to France, already living here, or simply curious about French life and culture, we\'re here to help. Fill out the form and we\'ll respond within 24 hours.'
                : 'Que vous projetiez de venir en France, que vous y viviez déjà, ou que vous soyez simplement curieux de la vie et de la culture française, nous sommes là pour vous aider. Remplissez le formulaire et nous vous répondrons sous 24h.'}
            </p>
            <div className="contact-details">
              <div className="contact-detail-item">
                <svg className="contact-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 8.33333C17.5 14.1667 10 18.3333 10 18.3333C10 18.3333 2.5 14.1667 2.5 8.33333C2.5 6.56522 3.20238 4.86953 4.45262 3.61929C5.70286 2.36905 7.39855 1.66667 9.16667 1.66667C10.9348 1.66667 12.6305 2.36905 13.8807 3.61929C15.131 4.86953 15.8333 6.56522 15.8333 8.33333C15.8333 10.1014 15.131 11.7971 13.8807 13.0474C12.6305 14.2976 10.9348 15 9.16667 15C7.39855 15 5.70286 14.2976 4.45262 13.0474C3.20238 11.7971 2.5 10.1014 2.5 8.33333Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.16667 10C10.0871 10 10.8333 9.25381 10.8333 8.33333C10.8333 7.41286 10.0871 6.66667 9.16667 6.66667C8.24619 6.66667 7.5 7.41286 7.5 8.33333C7.5 9.25381 8.24619 10 9.16667 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Lyon, France</span>
              </div>
            </div>
          </div>

          {/* Right side - White form */}
          <div className="contact-form-side">
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              {/* Champ honeypot caché pour limiter le spam */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleInputChange}
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />

              <div className="form-group">
                <label htmlFor="firstName" className="form-label">
                  {language === 'en' ? 'First Name' : 'Prénom'}
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder={language === 'en' ? 'Jean' : 'Jean'}
                  required
                  aria-invalid={status === 'error' && !formData.firstName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName" className="form-label">
                  {language === 'en' ? 'Last Name' : 'Nom'}
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder={language === 'en' ? 'Dupont' : 'Dupont'}
                  required
                  aria-invalid={status === 'error' && !formData.lastName}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="jean.dupont@exemple.com"
                  required
                  aria-invalid={status === 'error' && !formData.email}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  {language === 'en' ? 'Message' : 'Message'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder={language === 'en' ? 'Describe your project...' : 'Décrivez votre projet...'}
                  required
                  rows="5"
                  minLength="10"
                  aria-invalid={status === 'error' && !formData.message}
                />
              </div>

              <button
                type="submit"
                className={`submit-button ${status === 'sending' ? 'sending' : ''}`}
                disabled={status === 'sending'}
                aria-describedby="status-message"
              >
                {status === 'sending' ? (
                  <>
                    <span className="spinner"></span>
                    {language === 'en' ? 'Sending...' : 'Envoi en cours...'}
                  </>
                ) : (
                  <>
                    {language === 'en' ? 'Send Message' : 'Envoyer le message'}
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.3333 1.66667L9.16667 10.8333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M18.3333 1.66667L12.5 18.3333L9.16667 10.8333L1.66667 7.5L18.3333 1.66667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </button>

              {status !== 'idle' && (
                <div
                  id="status-message"
                  className={`status-message ${getStatusClass()}`}
                  role="alert"
                  aria-live="polite"
                >
                  {getStatusMessage()}
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Contact



