import { useState, useEffect } from 'react'
import './HISDashboard.css'
import HISHeader from '../components/his/HISHeader'
import KPICards from '../components/his/KPICards'
import SubAppsGrid from '../components/his/SubAppsGrid'
import UpcomingFeatures from '../components/his/UpcomingFeatures'
import HISFooter from '../components/his/HISFooter'

function HISDashboard() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    })
  }

  return (
    <div className="his-dashboard">
      <HISHeader currentTime={formatTime(currentTime)} />
      
      <main className="his-main-content">
        <div className="his-hero-section">
          <div className="his-section-label">REAL-TIME HUB DASHBOARD</div>
          <h1 className="his-main-title">Hub Information System</h1>
          <p className="his-description">
            Optimizing sort operations through dynamic visibility for SPSS and EBSS. 
            Monitor physical positions, split details, and real-time processing metrics directly from CDG.
          </p>
          
          <KPICards />
          
          <div className="his-action-buttons">
            <button className="his-btn his-btn-sync">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2V6M8 10V14M2 8H6M10 8H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 2C10.2091 2 12 3.79086 12 6C12 8.20914 10.2091 10 8 10C5.79086 10 4 8.20914 4 6C4 3.79086 5.79086 2 8 2Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Sync Data
            </button>
            <button className="his-btn his-btn-noc his-btn-primary">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 4L12 8L8 12M4 4L8 8L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              NOC Live Connection
            </button>
          </div>
        </div>

        <SubAppsGrid />

        <UpcomingFeatures />

        <HISFooter />
      </main>
    </div>
  )
}

export default HISDashboard

