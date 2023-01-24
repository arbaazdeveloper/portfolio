import React, { useRef,useState } from 'react'
import Card from './Card'
import {Star,Code,WindowDesktop} from 'react-bootstrap-icons';

const Container1 = () => {
 
  return (
    <div className=''>
          {/* <h1 className='heading-text'>Education</h1>
        <p style={{textAlign:'center'}}>My Education </p>
        <div className='poly-line'></div> */}
  <div className='container'>

<Card  type="card-dark" icon={<Star/>} heading="Designing" text="Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites."/>
<Card iconType="icondark" icon={<WindowDesktop/>} heading="Front End Development" text="Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites."/>
<Card icon={<Code/>} heading="Backend Development" text="Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites."/>
  </div>
    </div>
  )
}

export default Container1