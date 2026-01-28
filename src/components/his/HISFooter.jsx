import './HISFooter.css'

function HISFooter() {
  return (
    <footer className="his-footer">
      <div className="his-footer-section">
        <h4 className="his-footer-title">DATA SOURCE INTEGRATIONS</h4>
        <div className="his-footer-badges">
          <span className="his-footer-badge">HORUS</span>
          <span className="his-footer-badge">FDS</span>
          <span className="his-footer-badge">TSP</span>
          <span className="his-footer-badge his-footer-badge-active">Hub Stack</span>
        </div>
      </div>

      <div className="his-footer-section">
        <h4 className="his-footer-title">CORE CAPABILITIES</h4>
        <ul className="his-footer-list">
          <li>Real-time sort-down adjustments</li>
          <li>Volume forecasting & resource allocation</li>
          <li>Critical comment broadcasting</li>
        </ul>
      </div>

      <div className="his-footer-actions">
        <button className="his-footer-icon-btn" title="Download">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 13V3M10 13L6 9M10 13L14 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 17H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <button className="his-footer-icon-btn" title="Upload">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 7V17M10 7L6 11M10 7L14 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 3H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <button className="his-footer-icon-btn" title="Add">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </footer>
  )
}

export default HISFooter

