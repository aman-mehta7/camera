// src/components/LoadingScreen.jsx
import React from 'react'
// import '../index.css' // optional styling

const LoadingScreen = ({ progress }) => {
  return (
    <div className="loading-container">
      <div className="loader" />
      <p className="loading-text">Loading... {progress ? `${progress}%` : ''}</p>
    </div>
  )
}

export default LoadingScreen