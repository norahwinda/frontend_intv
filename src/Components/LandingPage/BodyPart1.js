import React from 'react'
import './BodyPart1.css'
import body from '../../images/body1.png'

function BodyPart1() {
  return (
    <div className='bodypart1'>
      <div className='bodypart1-left'>
        <h1>Photography for all your products needs</h1>
        <p>You will meet different people from every part of the world with excellent skills for your products</p>
        <button>Let's start</button>
      </div>
      <div className='bodypart1-right'>
            <img  src={body} alt=''/>
      </div>
    </div>
  )
}

export default BodyPart1
