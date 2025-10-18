import React from 'react'
import LandingPage from './sections/LandingPage'
import Scene from './THREE/Scene'
import Pg2 from './sections/Pg2'
import Pg3 from './sections/pg3'
import Pg4 from './sections/Pg4'
import Pg5 from './sections/Pg5'
import LastPg from './sections/LastPg'

const App = () => {
  return (
    <main> 
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