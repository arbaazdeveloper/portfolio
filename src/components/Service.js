import React, { useEffect, useRef,useState } from 'react'

import { Github} from 'react-bootstrap-icons';
const Service = ({heading,link,text,image}) => {
  const ref=useRef()
  const [state,setState]=useState('bottom')
  const func=()=>{
    const observer=new IntersectionObserver((el)=>{
      el.forEach((item)=>{
        setTimeout(()=>{

          if(item.isIntersecting){
            setState('top')
          }
         
        },1)

      })
    
    })
    observer.observe(ref.current)
  }
  useEffect(()=>{
    func()
  }
  ,[])
  return (
    <div ref={ref} className={`service-card ${state}`}>
        <img src={image}></img>
        <div className='project-info'>
            <h3>{heading}</h3>
            <p>{text}</p>
            <div style={{marginTop:'50px'}}>
            <a href={link}> <Github/> View on github</a>
            </div>
        </div>

    </div>
  )
}

export default Service