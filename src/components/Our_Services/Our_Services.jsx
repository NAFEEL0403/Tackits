import React from 'react'
import './Our_Services.css'

const Our_Services = () => {
  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>
          Tackits Technologies provides reliable IT solutions designed to help
          businesses grow and succeed in the digital world.
        </p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <h2>CRM Solutions</h2>
          <p>
            Custom-built CRM systems to manage customer relationships,
            streamline processes, and improve business efficiency.
          </p>
        </div>

        <div className="service-card">
          <h2>Annual Maintenance Contract (AMC)</h2>
          <p>
            Comprehensive AMC services ensuring smooth operation of your IT
            infrastructure with timely support and maintenance.
          </p>
        </div>

        <div className="service-card">
          <h2>System Rentals</h2>
          <p>
            High-performance computers and IT equipment available for short-term
            and long-term rental requirements.
          </p>
        </div>

        <div className="service-card">
          <h2>Web Development</h2>
          <p>
            Responsive, secure, and modern websites designed to enhance your
            online presence and brand identity.
          </p>
        </div>

        <div className="service-card">
          <h2>Mobile App Development</h2>
          <p>
            Android and cross-platform mobile applications built to deliver
            seamless user experiences.
          </p>
        </div>

        <div className="service-card">
          <h2>IT Consulting</h2>
          <p>
            Professional IT consulting services to help businesses choose the
            right technologies and optimize workflows.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Our_Services
