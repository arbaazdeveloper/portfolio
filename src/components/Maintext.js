import React, { useEffect, useRef, useState } from 'react'
import { ArrowRight} from 'react-bootstrap-icons';
import banner from '../assets/banner.jpg'
import banner2 from '../assets/banner2.jpg'
import Navbar from './Navbar';
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
  const [width, setWidth] = useState(window.innerWidth);

function handleWindowSizeChange() {
    setWidth(window.innerWidth);
}
useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
        window.removeEventListener('resize', handleWindowSizeChange);
    }
}, []);

const isMobile = width <= 768;

  useEffect(()=>{
    func()
    func2()
  },[window.scroll])
  return (
    <>
     <div className='banner'>
     <img style={{height:'100%',width:'100%',position:'absolute',opacity:'0.5',zIndex:1}} src={isMobile?banner2:banner}/>
        <Navbar/>
        <div  className='banner-text' style={{zIndex:'2'}}>
            <div className={`hero-text ${state}`} ref={ref} style={{padding:'20px',marginLeft:'30px',zIndex:'2'}}>
        Hi,There I am Arbaaz Ahmad  A Web Developer
            </div>
            <div style={{display:'flex' ,justifyContent:'flex-start', float:'left', width:'100%'}}>
        <div style={{margin:0,marginLeft:'50px',zIndex:'2'}} className='poly-line'></div>
            </div>

            <div style={{zIndex:'2'}} className={`main-hero-text ${state2}`}>
            <p>I'm Arbaaz Ahmad, a web application developer who works on a range of diverse projects. I have worked on a variety of projects up to this point, and I enjoy using technology and working on technology.</p>
            </div>
            <div style={{zIndex:'2'}} className={`main-hero-text ${state2}`} >

            <a href='#contact' style={{textAlign:'center',zIndex:'2'}} className='full-round-btn'>Hire Me  <ArrowRight/></a>
            </div>
        </div>
           
        <div className='fade'></div>
     
        </div>
    </>
  )
}

export default Maintext