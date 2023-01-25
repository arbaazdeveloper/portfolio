import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [state,setState]=useState('')
    useEffect(()=>{
      if(window.scrollY>400){
        setState('#000')
      }
      else{
        setState('')
      }
      console.log(state)
    },[window.scrollY])
  return (
    <div style={{zIndex:'1000', position:'fixded',top:'0',width:'100%',marginBottom:'10px'}}>
        <div style={{zIndex:'2', background:state,position:'sticky',top:0}} className='nav-bar'>
            <div style={{zIndex:'2',paddingLeft:'10px'}} className='brand'>
                <h1>Abby</h1>
            </div>

            <div style={{zIndex:'2'}} className='nav-links'>
                <a href='#'>Works</a>
                <a href='#'>Projects</a>
                <a href='#'>Desings</a>
                <a className='full-round-btn'style={{width:'100px'}} href='#contact'>Contact</a>
                
            </div>

        </div>

    </div>
  )
}

export default Navbar