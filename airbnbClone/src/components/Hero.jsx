// import React from 'react'
import GridImage from '../images/Grid.png';
const Hero = () => {
  return (
    <section>
        <img src={GridImage} alt="Grid" className="hero--photo" />

            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}

export default Hero