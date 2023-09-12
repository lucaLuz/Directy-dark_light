import React from 'react'
import './Footer.css'
import Logo from "../../../src/assets/logo.svg"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>
      <img src={Logo} alt="" />
      </a>
      <ul className='permalinks'>
        <li><a href="#">Ofertas</a></li>
        <li><a href="">Passagens</a></li>
        <li><a href="">Hospedagens</a></li>
      </ul>

      <div className='footer__copyrigth'>
        <small>
          &copy; Lu Devolper
        </small>
      </div>
    </footer>
  )
}

export default Footer