import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-page">

      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Get in touch with Tackits Technologies. We are here to help you with
          all your IT and technology needs.
        </p>
      </div>

      <div className="contact-container">

        
        <div className="contact-info">
          <h2>Our Office</h2>
          <p>
            1st Floor, 80/3, Palla Street,<br />
            Annai Nagar, Agraharam,<br />
            Korattur, Chennai – 600076
          </p>

          <h2>Call Us</h2>
          <p>+91 99443 31741</p>
          <p>+91 95661 70051</p>

          <h2>Email</h2>
          <p>info@tackits.com</p>
          <p>enquiry@tackits.com</p>
        </div>

        
        <div className="contact-form">
          <h2>Send Us a Message</h2>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact
