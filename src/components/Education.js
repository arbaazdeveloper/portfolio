import React from 'react'

const Education = () => {
  return (
    <div className='education'>
         <h1 className='heading-text'>Education</h1>
        <p style={{textAlign:'center'}}>My Education </p>
        <div className='poly-line'></div>

        <div className='time-line'>
            <div className='vertical-line'>
                <div className='time-life-containers'>
                    <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                        <div className='life-box'>
                            <h1>High School</h1>
                            <p>2017</p>
                            <p>M.S.I.C Ghazipur</p>
                        </div>
                        <div className='pointer'></div>
                <div className='bullet'>
                <div className='sub-bullet'>
                <div className='faded-bullet'></div>
                </div>
                </div>
                    </div>
                    <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                        <div className='life-box'>
                            <h1>Intermidiate</h1>
                            <p>2019</p>
                            <p>M.S.I.C Ghazipur</p>
                        </div>
                        <div className='pointer'></div>
                <div className='bullet'>
                    <div className='sub-bullet'>
                    <div className='faded-bullet'></div>
                    </div>
                </div>
                    </div>

                    <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
                        <div className='life-box'>
                            <h1>B.tech</h1>
                            <p>2023</p>
                            <p>R.I.T.S Bhopal</p>
                        </div>
                        <div className='pointer'></div>
                <div className='bullet'>
                    <div className='sub-bullet'>
                    <div className='faded-bullet'></div>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education