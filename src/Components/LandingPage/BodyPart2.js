import React from 'react'
import './BodyPart2.css'

function BodyPart2() {
  return (
    <div className='bodypart2'>
      <div className='bodypart2__top'>
        <img src={"./Images/Rectangle1.png"} alt=''/>
        <h3>Studio</h3>
        <p>You will find best photo studios here</p>
      </div>
      <div className='bodypart2__center'>
         <img src={"./Images/Rectangle2.png"} alt=''/>
         <h3>Events</h3>
         <p>Find events photographs</p>
      </div>
      <div className='bodypart2__bottom'>
          <img src={"./Images/Rectangle3.png"}  alt=''/>
          <h3>Commercial</h3>
          <p>Find photographs that will help sell you products</p>
      </div>
    </div>
  )
}

export default BodyPart2
