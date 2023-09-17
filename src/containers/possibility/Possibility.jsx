import React from 'react'
import possibilityImage from '../../assets/possibility.png';
import './possibility.css'

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
        <div className='gpt3__possibility-image'>
          <img src={possibilityImage} alt="poss" />
        </div>
        <div className='gpt3__possibility-content'>
          <h4>Request Early Access to Get Started</h4>
          <h1 className='gradient__text'>The possibilities are <br /> beyond your imagination </h1>
          <p>Kubernetes opens possibilities for efficient containerized application management, enabling automatic scaling and high availability across various environments. Its flexibility empowers organizations to innovate with ease.</p>
          <h4>Request Early Access</h4>
        </div>
    </div>
  )
}

export default Possibility