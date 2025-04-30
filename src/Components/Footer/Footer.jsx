import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinteser_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footer_logo} alt="" />
            <p>Elvoro</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contract</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-contailner">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icon-contailner">
                <img src={pinteser_icon} alt="" />
            </div>
            <div className="footer-icon-contailner">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2025 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer