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

<Card  type="card-dark" icon={<Star/>} heading="Designing" text="Designing applications for desktop, mobile, and web interfaces using Figma and Photoshop. I  the software with amazing tools. I use Photoshop and Figma to create contemporary user interface kits. Additionally, I have some expertise converting Figma designs to Locofy.AI code."/>
<Card iconType="icondark" icon={<WindowDesktop/>} heading="Front End Development" text="Website front-end development using the incredibly well-known React.js technology. Front-end web application development using react.js and a variety of libraries, including react-router-dom and redux-toolkit. handling of Json data with the rest API on the front end."/>
<Card icon={<Code/>} heading="Backend Development" text="Using the Node.js framework, develop a web application's server side code. development of rest APIs using multiple http protocols and database communication, as well as web socket development for data streaming."/>
  </div>
    </div>
  )
}

export default Container1