import { useState } from 'react'
import './SplitImage.css'

function SplitImage({ leftImage, rightImage, leftAlt, rightAlt, fallbackText }) {
  const [leftError, setLeftError] = useState(false)
  const [rightError, setRightError] = useState(false)

  if (leftError && rightError) {
    return (
      <div className="split-image-fallback">
        {fallbackText || 'Image'}
      </div>
    )
  }

  return (
    <div className="split-image-container">
      <div className="split-image-left">
        {!leftError ? (
          <img 
            src={leftImage} 
            alt={leftAlt}
            onError={() => setLeftError(true)}
            className="split-image"
          />
        ) : (
          <div className="split-image-placeholder">
            {leftAlt}
          </div>
        )}
      </div>
      <div className="split-image-divider"></div>
      <div className="split-image-right">
        {!rightError ? (
          <img 
            src={rightImage} 
            alt={rightAlt}
            onError={() => setRightError(true)}
            className="split-image"
          />
        ) : (
          <div className="split-image-placeholder">
            {rightAlt}
          </div>
        )}
      </div>
    </div>
  )
}

export default SplitImage



