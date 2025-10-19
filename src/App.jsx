import React, { useState, useEffect } from 'react'
import LandingPage from './sections/LandingPage'
import Scene from './THREE/Scene'
import Pg2 from './sections/Pg2'
import Pg3 from './sections/Pg3'
import Pg4 from './sections/Pg4'
import Pg5 from './sections/Pg5'
import LastPg from './sections/LastPg'
import LoadingScreen from './components/LoadingScreen'

const App = () => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Example: simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setLoading(false)
          return 100
        }
        return prev + 10
      })
    }, 200)
  }, [])

  if (loading) return <LoadingScreen progress={progress} />

  return (
    <main className="lg:bg-[#f3e7d9]">
      <Scene /> 
      <LandingPage />
      <Pg2 />
      <Pg3 />
      <Pg4 />
      <Pg5 />
      <LastPg />
    </main>
  )
}

export default App