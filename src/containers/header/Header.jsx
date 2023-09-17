import React from 'react'
import people from '../../assets/people.png';
import kubernetes from '../../assets/kubernetes-logo.png';
import './header.css'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
        <div className='gpt3__header-content'>
          <h1 className='gradient__text'>
            Deploy your containerized app automatically !
          </h1>
          <p>Kubernetes (or K8s) let's you set up automatic deployment and scaling of your containerized app on the web. <br />It groups containers that make up an application into logical units for easy management and discovery. Kubernetes builds upon 15 years of experience of running production workloads at Google, combined with best-of-breed ideas and practices from the community. </p>
      
          <div className='gpt3__header-content__input'>
            <input type="email" placeholder='Your Email Address' />
            <button type='button' className='btn btn-primary btn-orange btn-lg'>Get Started</button>
          </div>

          <div className='gpt3__header-content__people'>
            <img src={people} alt='people' />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>

        <div className='gpt3__header-image'>
          <img src={kubernetes} alt="kube" />
        </div>
    </div>
  )
}

export default Header