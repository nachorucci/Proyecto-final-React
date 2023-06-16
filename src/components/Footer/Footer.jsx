import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer text-center p-3'>
        <h5>Art & Wine</h5>
        <h6>© 2023 Art & Wine Company</h6>
        <div>
          <i className="fa-brands fa-whatsapp m-2"></i>
          <i className="fa-brands fa-facebook m-2"></i>
          <i className="fa-brands fa-instagram m-2"></i>
          <i className="fa-brands fa-twitter m-2"></i>
        </div>
        <h6 className='contact m-2'>Terms & Conditions | Contact Us</h6>
        <h6 className='m-2'>Developed by <a target='_blank' href='https://github.com/CristianMozetich'>Cristian Mozetich</a></h6>
    </div>
  )
}

export default Footer
