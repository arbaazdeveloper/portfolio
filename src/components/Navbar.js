import React, { useEffect, useState } from 'react'
import { BarChart} from 'react-bootstrap-icons';
const Navbar = () => {
    const [state,setState]=useState({
      background:'',
      padding:''
    })
    const [isShow,setIsShow]=useState({show:false})
    const toggle=()=>{
      if(isShow.show){
        setIsShow({show:false})
      }
      else{
        setIsShow({show:true})
      }


    }
    function changeColour(){
     
      if(window.scrollY>=400){
        setState(
          {
            background:'#1b1822',
            padding:'10px'
          }
        )
      }
      else{
        setState({
          background:'',
          padding:''
        })
      }
      
    }
    useEffect(()=>{
      window.addEventListener('scroll',changeColour)
    })
  return (
    <div style={{zIndex:'1000', position:'fixed',top:'0',width:'100%',marginBottom:'100px'}}>
        <div style={{zIndex:'2', width:'100%', transition:'0.5s', paddingTop:state.padding, background:state.background,position:'sticky',top:0}} className='nav-bar'>
            <div style={{zIndex:'2',paddingLeft:'10px'}} className={`brand ${isShow.show?'toggle-extra':''}`}>
                <h1>Abby</h1>
            </div>

            <div style={{zIndex:'2'}} className={`nav-links ${isShow.show?'':'toggle-links'}`}>
                <a href='#'>Works</a>
                <a href='#'>Projects</a>
                <a href='#'>Desings</a>
                <a className='full-round-btn'style={{width:'100px'}} href='#contact'>Contact</a>
                
            </div>
            <div className={`toggle-btn ${isShow.show?'toggle-extra':''}`} onClick={toggle}>
     
       <div className={`bar ${isShow.show?'open':''}`}></div>
       <div className={`bar ${isShow.show?'open':''}`}></div>
       <div className={`bar ${isShow.show?'open':''}`}></div>
            </div>
        </div>

    </div>
  )
}

export default Navbar