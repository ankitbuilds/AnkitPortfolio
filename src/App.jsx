import { useState, useEffect } from 'react'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Skills from './Components/Skills/Skills'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animate only once
      offset: 50,
    });
  }, []);
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      {/* <Services/> */}
      <MyWork/>
      <Skills/>
      <Contact/>
      <Footer/>
      
    </>
  )
}

export default App
