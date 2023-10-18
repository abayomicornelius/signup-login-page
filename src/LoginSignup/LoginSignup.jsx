import React, { useState } from 'react'
import LoginSigninCss from './LoginSignup.css'
import {} from 'react-icons/fa'
import ten from '../Assets/10.png'
import eleven from '../Assets/11.png'
import twelve from '../Assets/12.png'


const LoginSignup = () => {
  const [action, setAction] = useState('Sign Up')
  return (
    <div className='container'>
        <div className='header'>
            <div className='text'> {action}</div>
            <div className='underline'></div>
        </div>
    <div className='inputs'>
      {action==='Login'? <div></div>: <div className='input'>
        <img src={twelve} alt=''/>
        <input type='text' placeholder='Name'/>
        </div>
}
       
        <div className='input'>
        <img src={ten} alt=''/>
        <input type='email' placeholder='Email Id'/>
        </div>
        
        <div className='input'>
        <img src={eleven} alt=''/>
        <input type='password' placeholder='Password'/>
        </div>
    </div>
    {action==='Sign Up'? <div></div>:
     <div className='forgot-password'>Lost Password <span>Click Here!</span></div>}
       
      <div className='submit-container'>
        <div className={action==='Login'?'submit gray ': 'submit'} onClick={()=>{setAction('Sign Up')}}>Sign Up</div>
        <div className={action==='Sign Up'? 'submit gray': 'submit'} onClick={()=>{setAction('Login')}}>Login</div>
      </div>
    </div>
    
  ) 
}

export default LoginSignup