import React, { useState } from 'react'
import { ArrowRight,Mailbox,Linkedin ,Phone,GeoAlt,Instagram,Facebook} from 'react-bootstrap-icons';
const Contact = () => {
  const [body,setBody]=useState({name:'',email:'',contact:'',message:''})
  const onchangeHandle=(e)=>{
    setBody({...body,[e.target.name]:e.target.value})
  }
  const send=()=>{
    if(body.name==='' || body.email==='',body.contact==="",body.message===""){
      alert('all fields are required')
      return
    }
    if(isNaN(Number(body.contact))){
      alert('Contact should be number only')
      return
    }
    
    const url='http://localhost:5000/sendmail'
    fetch(url,{
      method:'POST',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify(body)
    }).then((resposnse)=>resposnse.json()).then((data)=>{
      if(data.message==='sent succesfully'){
        alert('Contact submitted succesfully')
      }
      else{
        alert('Some Error occured Please Try Again later or send your query on my email')
      }
    })
  }
  return (
    <div id='contact'>
        <div className='contact'>
            <h1 style={{color:'#fff'}}>Contact</h1>
          
            <div className='fields-container'>
            <div style={{width:'300px'}}>
            <label htmlFor='name'>
                Full Name
               <input required="required" id='name'value={body.name} name='name' placeholder='Name'onChange={onchangeHandle}></input>
            </label>
            </div>
            <div style={{width:'300px'}}>
            <label htmlFor='Email'>
              Email
               <input id='name'value={body.email} type="email" name='email' placeholder='Name'onChange={onchangeHandle}></input>
            </label>
            </div>
            <div style={{width:'300px'}}>
            <label htmlFor='name'>
                Phone Number
               <input id='name' value={body.contact} name='contact' placeholder='Contact No.'onChange={onchangeHandle}></input>
            </label>
            </div>
            </div>
            <label>
                Message

            <textarea name='message' value={body.message} rows="4" cols="50" onChange={onchangeHandle} style={{height:'200px'}}></textarea>
            </label>
            <button onClick={send} style={{margin:'0px !important'}} className='full-round-btn'>Send <ArrowRight/></button>

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

   <a target={'__'} href='https://www.linkedin.com/in/arbaaz-ahmad-8176411ab'><div className={`card-icon icondark`}><Linkedin/></div></a>
   <a target={'__'} href='https://www.instagram.com/arbaazuniquegzp?igshid=ZmZhODViOGI'><div className={`card-icon icondark`}><Instagram/></div></a>
 <a href=''><div className={`card-icon icondark`}><Facebook/></div></a>
   
                </div>
                </div>
        </div>

    </div>
  )
}

export default Contact