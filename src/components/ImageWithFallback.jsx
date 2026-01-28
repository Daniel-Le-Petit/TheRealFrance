import { useState } from 'react'
import './ImageWithFallback.css'

function ImageWithFallback({ src, alt, className, fallbackText }) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className={`image-fallback ${className || ''}`}>
        {fallbackText || 'Image'}
      </div>
    )
  }

  return (
    <img 
      src={src} 
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  )
}

export default ImageWithFallback




