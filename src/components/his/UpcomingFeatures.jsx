import './UpcomingFeatures.css'

function UpcomingFeatures() {
  return (
    <section className="his-upcoming-features">
      <div className="his-upcoming-card">
        <div className="his-upcoming-header">
          <h3 className="his-upcoming-title">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M10 6V10L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Upcoming Features
          </h3>
        </div>
        <p className="his-upcoming-description">
          Percentage Occupancy monitoring (Target 1230 chutes) and automated red highlighting for critical split transit counts.
        </p>
        <div className="his-progress-section">
          <div className="his-progress-header">
            <span className="his-progress-label">DEVELOPMENT PROGRESS</span>
            <span className="his-progress-percentage">75%</span>
          </div>
          <div className="his-progress-bar">
            <div className="his-progress-fill" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UpcomingFeatures

