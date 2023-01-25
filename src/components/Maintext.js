import React, { useEffect, useRef, useState } from 'react'
import { ArrowRight} from 'react-bootstrap-icons';
const Maintext = () => {
  const [state,setState]=useState('hidden')
  const [state2,setState2]=useState('unView')
  const ref=useRef()

  const func=()=>{
    const observer=new IntersectionObserver((el)=>{
      el.forEach((item)=>{
        setTimeout(()=>{

          if(item.isIntersecting){
            setState('show')
          }
          else{
            setState('hidden')
          }
        },100)

      })
    
    })
    observer.observe(ref.current)
  }

  const func2=()=>{
    const observer=new IntersectionObserver((el)=>{

      el.forEach((item)=>{
        console.log(item)
        setTimeout(()=>{
          if(item.isIntersecting){
            setState2('view')
          }
          else{
            setState2('unView')
          }
        },100)

      })
    
    })
    observer.observe(ref.current)
  }
  useEffect(()=>{
    func()
    func2()
  },[window.scroll])
  return (
    <>
     <div className='banner'>
     
        <div  className='banner-text'>
          <a href='#contact'>Contact</a>
            <div className={`hero-text ${state}`} ref={ref} style={{padding:'20px',marginLeft:'30px'}}>
        Hi,There I am Arbaaz Ahmad  A Web Developer
            </div>
            <div style={{display:'flex' ,justifyContent:'flex-start', float:'left', width:'100%'}}>
        <div style={{margin:0,marginLeft:'50px'}} className='poly-line'></div>
            </div>

            <div className={`main-hero-text ${state2}`}>
            <p>The background-clip property ensures that the background doesn’t extend beyond an element — in this case, the text. The color prop is set to transparent so that you can see the background directly behind the header.</p>
            </div>
            <div className={`main-hero-text ${state2}`} >

            <button style={{textAlign:'center'}} className='full-round-btn'>Hire Me  <ArrowRight/></button>
            </div>
        </div>
           
        <div className='fade'></div>
     
        </div>
    </>
  )
}

export default Maintext