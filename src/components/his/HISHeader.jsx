import './HISHeader.css'

function HISHeader({ currentTime }) {
  return (
    <header className="his-header">
      <div className="his-header-left">
        <div className="his-logo">
          <div className="his-logo-icon">C</div>
          <div className="his-logo-text">
            <div className="his-logo-title">HIS HUB</div>
            <div className="his-logo-subtitle">INFORMATION SYSTEM V3.20</div>
          </div>
        </div>
      </div>

      <div className="his-header-center">
        <div className="his-search-bar">
          <svg className="his-search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="2"/>
            <path d="M19 19L14.65 14.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <input 
            type="text" 
            placeholder="Q Search components, chutes or flight delays..." 
            className="his-search-input"
          />
        </div>
      </div>

      <div className="his-header-right">
        <div className="his-time">{currentTime}</div>
        <div className="his-location">CDG HUB - FRANCE</div>
        <button className="his-icon-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2C10 2 3 4 3 10C3 13 5 15.5 10 18C15 15.5 17 13 17 10C17 4 10 2 10 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
            <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
          </svg>
        </button>
        <button className="his-icon-btn his-profile-btn">
          <div className="his-profile-avatar">JD</div>
        </button>
      </div>
    </header>
  )
}

export default HISHeader

