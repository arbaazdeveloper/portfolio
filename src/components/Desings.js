import React from 'react'
import design1 from '../assets/design1.png'
import design2 from '../assets/design2.png'
import design3 from '../assets/design3.png'
const Desings = () => {
  return (
    <div className='desing' id='designs'>
        <h1 className='heading-text'>Explore Some Designs</h1>
        <p style={{textAlign:'center'}}>Explore some fantastic design made by me </p>
        <div className='poly-line'></div>
       <div style={{paddingTop:'50px !important'}} className='container'>
       <div className='design-cards'>
            <img src={design1}/>
        </div>
        <div className='design-cards'>
            <img src={design3}/>
        </div>
        <div className='design-cards'>
            <img src={design2}/>
        </div>
       </div>

    </div>
  )
}

export default Desings