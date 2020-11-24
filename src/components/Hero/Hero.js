import React from 'react'
import './Hero.css'
import surf from '../../images/surf.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__overlay">
        <div className="hero__container">
          <img src={surf} alt="surf" className="hero__surf" />
          <div className="hero__container-text">
            <p>Votre planche personalisée...</p>
            <p>Toutes nos planches sont garantie 10 ans</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
