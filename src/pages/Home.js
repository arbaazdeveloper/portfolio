import React from 'react'
import Contact from '../components/Contact'
import Container1 from '../components/Container1'
import Desings from '../components/Desings'
import Education from '../components/Education'
import Maintext from '../components/Maintext'
import Project from '../components/Project'

const Home = () => {
  return (
    <div>
       <Maintext/>
       <div className='box'>
       <Container1/>
       <Desings/>
       </div>
       <Project/>
       <Education/>
       <Contact/>
    </div>
  )
}

export default Home