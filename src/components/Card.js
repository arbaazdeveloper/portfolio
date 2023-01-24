import React, { useEffect, useRef,useState } from 'react'

import { ArrowRight ,Star} from 'react-bootstrap-icons';
const Card = ({type,text,heading,icon,iconType}) => {
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
    <div ref={ref} className={`card ${type} ${state}`}>
        <div className={`card-icon ${iconType}`}>
      {icon}
        </div>
        <h3>{heading}</h3>
        <p>{text}</p>
        <a  href='#'>Read More <ArrowRight/></a>

    </div>
  )
}

export default Card