import React from 'react'
import BodyPart1 from './BodyPart1'
import BodyPart2 from './BodyPart2'
import BodyPart3 from './BodyPart3'
import './LandingPage.css'

function LandingPage() {
  return (
    <div className='landingpage'>
      <BodyPart1 />
      <BodyPart2 />
      <BodyPart3 />
    </div>
  )
}

export default LandingPage
