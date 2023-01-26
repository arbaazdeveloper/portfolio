import React from 'react'

const Footer = () => {
    const style={
        background:'#000',

        color:'#fff',
        textAlign:'center'
    }
   
  return (
    <div style={style}>
       Copyright <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> @Arbaaz Ahmad 2023
    </div>
  )
}

export default Footer