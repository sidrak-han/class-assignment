import AboutPage from '@/components/About'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <AboutPage/>
      <Skills/>
      <Footer/>


      
    </div>
  )
}

export default HomePage