import React from 'react'
import './About.css'    
import abt from '../../assets/abt-img.gif'   

const About = () => {
  return (
    <div className='abt container'>
      <div className='abt-content'>
        <center>
          <p>About Tackits</p>
          <p>Tackits Technologies is a growing IT solutions company delivering
  modern, scalable, and reliable digital products.</p>
          

        </center>
        
        <ul>
            <center>
                 <li>Experienced Developers</li>
             <li>Innovative Technologies</li>
            <li>Client-Centric Solutions</li>
            <button className='btn'>Learn More</button>
            </center>
            
        </ul>
      </div>      
    </div>
  )
}

export default About
