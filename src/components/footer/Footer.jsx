import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Muhammad Yogi</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiece">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com"><FiInstagram /></a>
        <a href="https://www.facebook.com"><FaFacebookF /></a>
        <a href="https://www.twitter.com"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Yogi Gaek. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer