import React from 'react'
import Service from './Service'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import Experience from './Experience'
const Project = () => {
  return (
    <div className='project' id='project'>
          <h1 className='heading-text'>My Recent Projects & Works</h1>
        <p style={{textAlign:'center'}}>Explore some fantastic design made by me </p>
        <div className='poly-line'></div>
        <div className='container'>
        <Service heading="Get Stuff On Rent" link="https://github.com/arbaazdeveloper/getstuffonrent.git" text="Get Stuff On Rent is a website for renting where users may offer their items for rent and find products for rent at certain prices using ethical business practises." image={project1} />
        <Service heading="Digital Marketing Agency" link="https://github.com/arbaazdeveloper/smmpanel.git" text="A digital marketing website that can help  build your business through digital marketing by increasing the popularity of your social media accounts and generating income from them." image={project2} />
        <Service heading="Get Stuff On Rent" link="." text="The get stuff on rent is renting website to rent out anything and get anything on rent" image={project1} />
        </div>
        <Experience/>
    </div>
  )
}

export default Project