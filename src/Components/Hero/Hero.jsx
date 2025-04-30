import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image4 from '../Assets/hero_image4.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>SUMMER STYLE BASH</h2>
            <div>
                    <p>Exclusive</p>
                    <div className="hero-hand-icon">
                <p>Drop</p> <img src={hand_icon} alt="" />
                </div>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
           

        </div>
        <div className="hero-right">
            <img src={hero_image4} alt="" />
        </div>

    </div>
    
  )
}

export default Hero