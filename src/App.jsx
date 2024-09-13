
import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Skill from './components/skill/Skill'
import Experience from './components/experience/Experince'
import Project from './components/project/Project'
import Education from './components/education/Education'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
function App() {

  return (
    <>
      <Header/>
      <Navbar/>
      <About/>
      <Skill/>
      <Experience/>
      <Project/>
      <Education/>
      <Portfolio/>
      <Contact/>
      <Footer/>

    </>
  )
}

export default App
