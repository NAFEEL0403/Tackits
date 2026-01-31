import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
       <div className='footer-content'>
          <div className='address'>
             <h4>Tackits Technologies</h4>
             <p>1st floor, 80/3, Palla St, Annai Nagar, Agraharam, Korattur, Chennai, Tamil Nadu 600076</p>
          </div>
          <div className='Contact'>
             <h4>Tackits Technologies</h4>
             <p>+91 9944331741</p>
             <p>+91 9566170051</p>
             <a href="info@tackits.com">info@tackits.com</a>
             <br/>
             <a href="enquiry@tackits.com">enquiry@tackits.com</a>
          </div>
          <div className='link'>
             <h4>Tackits Technologies</h4>
             <ul>
                <li><a href="/crm">CRM</a></li>
                <li><a href="/amc">AMC</a></li>
                <li><a href="/system-rentals">System Rentals</a></li>
                <li><a href="/web-services">Web Services</a></li>
                <li><a href="/app-development">App Development</a></li>
             </ul>
          </div>
          <div className='newsletter'>
             <h4>Subscribe to our newsletter</h4>
             <p>Email address</p>
             <input type='text' placeholder='Enter you email address'/>
             <button>Subscribe</button>
          </div>

       </div>

      
    </div>
  )
}

export default Footer
