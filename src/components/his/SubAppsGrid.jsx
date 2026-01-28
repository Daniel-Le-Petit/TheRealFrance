import './SubAppsGrid.css'

function SubAppsGrid() {
  const subApps = [
    {
      id: 'spss',
      title: 'HIS for SPSS',
      icon: '📄',
      description: 'Document consolidation & Infeed-to-Outfeed tracking. Optimizes ~63 screens in the CDG...',
      features: [
        'Document transit counts',
        'Dynamic chute configuration (max 120)',
        'Bag processing metrics'
      ],
      category: 'OPERATIONS',
      status: 'online'
    },
    {
      id: 'ebss',
      title: 'HIS for EBSS',
      icon: <IconBox />,
      description: 'Strategic Outfeed monitoring for conveyable/non-conveyable packages and ULD container loading.',
      features: [
        'Sort down time indicators',
        'Flight delay integration',
        'Volume processed tracking'
      ],
      category: 'OPERATIONS',
      status: 'online'
    },
    {
      id: 'msp',
      title: 'HIS MSP',
      icon: '🔒',
      description: 'Monitor for Sensitive Products. Enhanced visibility for secure and time-critical package handling.',
      features: [
        'Real-time sensitive item tracking',
        'Handling efficiency monitoring',
        'Chain of custody visibility'
      ],
      category: 'MONITORING',
      status: 'online'
    },
    {
      id: 'ofd',
      title: 'HIS OFD',
      icon: <IconPlane />,
      description: 'Outbound Flight Delays. Real-time communication and anticipation of linehaul bottlenecks.',
      features: [
        'Remaining pieces processing time',
        'Vessel detail pop-ups',
        'NOC approval workflow'
      ],
      category: 'MONITORING',
      status: 'online'
    },
    {
      id: 'crdb',
      title: 'Control Room Boxes (CRDB)',
      icon: '📊',
      description: 'Full-spectrum visibility for the Box Outfeed area through 4 specialized data boards.',
      features: [
        'Overview (Conveyables, Bags, Non-Conv)',
        'Run Out Transit details',
        'Intermediate Destination research'
      ],
      category: 'CONTROL',
      status: 'online'
    },
    {
      id: 'crdd',
      title: 'Control Room Docs (CRDD)',
      icon: <IconChart />,
      description: 'In-depth real-time analytics for the Document Scan and SPSS area.',
      features: [
        'Total Transit vs Processed scan area',
        'Percentage Occupancy calculations',
        'Detail per Zone (scanned pieces/hour)'
      ],
      category: 'CONTROL',
      status: 'online'
    }
  ]

  return (
    <section className="his-sub-apps-section">
      <div className="his-sub-apps-header">
        <div>
          <h2 className="his-section-title">Operational Sub-Apps</h2>
          <p className="his-section-subtitle">{subApps.length} Available</p>
        </div>
        <div className="his-sub-apps-filters">
          <button className="his-filter-btn">
            ALL CATEGORIES
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="his-icon-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 3H7V7H3V3Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M13 3H17V7H13V3Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M3 13H7V17H3V13Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M13 13H17V17H13V13Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="his-sub-apps-grid">
        {subApps.map((app) => (
          <div key={app.id} className="his-sub-app-card">
            <div className="his-sub-app-card-header">
              <div className="his-sub-app-icon">{app.icon}</div>
              <span className={`his-status-badge his-status-${app.status}`}>
                {app.status.toUpperCase()}
              </span>
            </div>
            
            <h3 className="his-sub-app-title">{app.title}</h3>
            <p className="his-sub-app-description">{app.description}</p>
            
            <ul className="his-sub-app-features">
              {app.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            
            <div className="his-sub-app-footer">
              <span className="his-sub-app-category">{app.category}</span>
              <a href={`#${app.id}`} className="his-access-link">
                Access App <span>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SubAppsGrid

