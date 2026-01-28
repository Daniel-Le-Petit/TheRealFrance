import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import FrenchLifestyle from './pages/FrenchLifestyle'
import HabitsOfFrenchPeople from './pages/HabitsOfFrenchPeople'
import FrenchCultureExplained from './pages/FrenchCultureExplained'
import LivingInFrance from './pages/LivingInFrance'
import FrenchRetirementGuide from './pages/FrenchRetirementGuide'
import ParisVsRealFrance from './pages/ParisVsRealFrance'
import FrenchParadox from './pages/FrenchParadox'
import CostOfLivingInFrance from './pages/CostOfLivingInFrance'
import About from './pages/About'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import Privacy from './pages/Privacy'
import FranceForAmericans from './pages/FranceForAmericans'
import FranceForBritish from './pages/FranceForBritish'
import FranceForAustralians from './pages/FranceForAustralians'
import FranceForCanadians from './pages/FranceForCanadians'
import AttractionsCarousel from './components/AttractionsCarousel'
import AttractionDetail from './pages/AttractionDetail'
import CitiesCarousel from './components/CitiesCarousel'
import CityDetail from './pages/CityDetail'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/french-lifestyle" element={<FrenchLifestyle />} />
            <Route path="/habits-of-french-people" element={<HabitsOfFrenchPeople />} />
            <Route path="/french-culture-explained" element={<FrenchCultureExplained />} />
            <Route path="/living-in-france" element={<LivingInFrance />} />
            <Route path="/french-retirement-guide" element={<FrenchRetirementGuide />} />
            <Route path="/paris-vs-real-france" element={<ParisVsRealFrance />} />
            <Route path="/french-paradox" element={<FrenchParadox />} />
            <Route path="/cost-of-living-in-france" element={<CostOfLivingInFrance />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/france-for-americans" element={<FranceForAmericans />} />
            <Route path="/france-for-british" element={<FranceForBritish />} />
            <Route path="/france-for-australians" element={<FranceForAustralians />} />
            <Route path="/france-for-canadians" element={<FranceForCanadians />} />
            <Route path="/attraction/:id" element={<AttractionDetail />} />
            <Route path="/city/:id" element={<CityDetail />} />
          </Routes>
          <CitiesCarousel />
          <AttractionsCarousel />
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App




