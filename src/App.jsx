import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import Hero from './components/Hero/Hero'
import Service from './components/Service/Service'
import About from './components/About/About'

import Our_Services from './components/Our_Services/Our_Services'
import About_Company from './components/About_Company/About_Company'  
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route
        path='/'
        element={
          <>
            <Hero/>
            <Service/>
            <About/>
          </>
        }
      />
      <Route path='/about' element={<About_Company/>} />
      <Route path='/services' element={<Our_Services/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>

    
    <Footer/>


      
    </div>
  )
}

export default App
