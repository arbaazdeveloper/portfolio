import React from 'react'
import Service from './Service'
import project1 from '../assets/project1.png'
const Project = () => {
  return (
    <div className='project'>
          <h1 className='heading-text'>My Recent Projects & Works</h1>
        <p style={{textAlign:'center'}}>Explore some fantastic design made by me </p>
        <div className='poly-line'></div>
        <div className='container'>
        <Service heading="Get Stuff On Rent" link="." text="The get stuff on rent is renting website to rent out anything and get anything on rent" image={project1} />
        <Service heading="Get Stuff On Rent" link="." text="The get stuff on rent is renting website to rent out anything and get anything on rent" image={project1} />
        <Service heading="Get Stuff On Rent" link="." text="The get stuff on rent is renting website to rent out anything and get anything on rent" image={project1} />
        </div>
    </div>
  )
}

export default Project