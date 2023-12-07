import React from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <p className="footer-p">wimbledonsportingclub@gmail.com</p>
      <div className='logo-insta'>
        <FontAwesomeIcon className="phone"id="insta" icon={faInstagram} />
      </div>
      <p className="footer-p num">+447950686561</p>
    </div>
  )
}

export default Footer
