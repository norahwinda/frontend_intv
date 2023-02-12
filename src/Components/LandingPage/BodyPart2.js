import React from 'react'
import './BodyPart2.css'
import Rectangle1 from '../../images/Rectangle1.png'
import Rectangle2 from '../../images/Rectangle2.png'
import Rectangle3 from '../../images/Rectangle3.png'

function BodyPart2 () {
  return (
    <div className='bodypart2'>
      <div className='bodypart2-top'>
        <img src={Rectangle1} alt='' />
        <h3>Studio</h3>
        <p>You will find best photo studios here</p>
      </div>
      <div className='bodypart2-center'>
        <img src={Rectangle2} alt='' />
        <h3>Events</h3>
        <p>Find events photographs</p>
      </div>
      <div className='bodypart2-bottom'>
        <img src={Rectangle3} alt='' />
        <h3>Commercial</h3>
        <p>Find photographs that will help sell you products</p>
      </div>
    </div>
  )
}

export default BodyPart2
