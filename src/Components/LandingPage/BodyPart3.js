import React from 'react'
import './BodyPart3.css'
import Rectangle4 from '../../images/Rectangle4.png'

function BodyPart3() {
  return (
    <div className='bodypart3'>
      <div className='bodypart3__top'>
        <img src={Rectangle4} alt=''/>
      </div>
      <div className='bodypart3__bottom'>
         <h1>Ask us questions</h1>
         <p>If you have any doubt, contact us and we will get back to you in minutes</p>
      </div>
    </div>
  )
}

export default BodyPart3
