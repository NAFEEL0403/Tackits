import React from 'react'
import './Service.css'            
const Service = () => {
  return (
    <div className='section'>
      <h2>Our Services</h2>
      <ul>
        <li>Annual Maintenance Contract (AMC)
        <p style={{marginBottom: '50px'}}>Quality laptops, desktops, CCTV and accessories for business and Infrastructure Setup.</p><button className='btn'>Know More</button></li>
        <li>Business Software & Custom Apps
        <p style={{marginBottom: '50px'}}>Reliable maintenance, fast troubleshooting, and regular system care.</p><button className='btn'>Know More</button></li>
        <li >IT Hardware Sales & Support
        <p style={{marginBottom: '100px'}}>CRM, ERP, HRM & Other Business suite softwares. Develop custom apps and software</p><button className='btn'>Know More</button></li>
      </ul>
    </div>
    
  )
}

export default Service
