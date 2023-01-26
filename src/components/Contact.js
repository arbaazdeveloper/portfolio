import React from 'react'
import { ArrowRight,Mailbox,Linkedin ,Phone,GeoAlt,Instagram,Facebook} from 'react-bootstrap-icons';
const Contact = () => {
  return (
    <div id='contact'>
        <div className='contact'>
            <h1 style={{color:'#fff'}}>Contact</h1>
          
            <div className='fields-container'>
            <div style={{width:'300px'}}>
            <label htmlFor='name'>
                Full Name
               <input id='name' name='name' placeholder='Name'></input>
            </label>
            </div>
            <div style={{width:'300px'}}>
            <label htmlFor='Email'>
              Email
               <input id='name' name='name' placeholder='Name'></input>
            </label>
            </div>
            <div style={{width:'300px'}}>
            <label htmlFor='name'>
                Phone Number
               <input id='name' name='name' placeholder='Contact No.'></input>
            </label>
            </div>
            </div>
            <label>
                Message

            <textarea rows="4" cols="50"  style={{height:'200px'}}></textarea>
            </label>
            <button style={{margin:'0px !important'}} className='full-round-btn'>Send <ArrowRight/></button>

            <div className='reach-me'>
                <h1>Get in Touch !</h1>
                <p>I am there for you let me know how can i help you !</p>
                <div className='poly-line'></div>
                <div>
                    
                <div className='contact-info'>

                 <div className={`card-icon`}>
     <Mailbox/>
        </div>
                <p>arbaazuniquegzp@gmail.com</p>
                </div>

                <div className='contact-info'>

   <div  className={`card-icon`}>
   <Phone/>
   </div>
   <p>+919648315086</p>
</div>
           <div className='contact-info'>

   <div className={`card-icon`}>
   <GeoAlt/>
   </div>
   <p>Town Hall Gahzipur (U.P) India</p></div>
            </div>
                <div className='social-links'>

   <a href='#'><div className={`card-icon icondark`}><Linkedin/></div></a>
   <a href='#'><div className={`card-icon icondark`}><Instagram/></div></a>
 <a href='#'><div className={`card-icon icondark`}><Facebook/></div></a>
   
                </div>
                </div>
        </div>

    </div>
  )
}

export default Contact