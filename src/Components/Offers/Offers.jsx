import React from 'react'
import './Offers.css'
import exclusive_image3 from '../Assets/exclusive_image3.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BESTSELLER PRODUCT</p>
            <button>Chech Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image3} alt="" />

        </div>

    </div>
  )
}

export default Offers