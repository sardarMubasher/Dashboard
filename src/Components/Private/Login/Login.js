import React, { useState } from 'react'
import './Login.css'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import logo from './logo.svg'
import logo2 from './logo (2).svg'
import { useDispatch } from 'react-redux'
import { User } from '../../../ReduxStore'
import { useNavigate } from 'react-router'
const Login = () => {
const nav = useNavigate()
   const [showPass,setShowPass] = useState(false);
   const dispatch = useDispatch();
   const action = User.actions

const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const takeForm = (e)=>{
   e.preventDefault();
   if(email=='admin@gmail.com' && password=='admin')
   {
      nav('/1');
          dispatch(action.change(true));
   }
}

  return (
   <div className="login-wrapper">

    <form onSubmit={takeForm} className="login-form">
       
       <div className="login-logo">

        <img src={logo2} alt="" />
       <span> | </span>
        <p>   Business Shura</p>
       </div>

       <p>Sign In</p>

      <div className='login-text-wrapper'>
      <label htmlFor="email">Email</label>
     <input  style={{backgroundColor:email && password?'#F9F4EA':'#F5F9F9'}} onChange={(e)=>setEmail(e.target.value)} className='login-input' id="email" type="email" name="email" placeholder='lawyer@shraw.se' />
      </div>
      
     <div className='login-text-wrapper'>
     <label htmlFor="password">Password</label>
     <div className='login-pass-handler'>

     <input  style={{backgroundColor:email && password?'#F9F4EA':'#F5F9F9'}}
        onChange={(e)=>setPassword(e.target.value)} className='login-input' type={showPass ? 'text' : 'password'} name="password" id="" />
        <span onClick={()=>setShowPass(!showPass)}>
         {
            showPass ? <AiOutlineEyeInvisible size={20}/>:
            <AiOutlineEye  size={20}/>
         }
        
         </span> 
        
        </div>
     </div>

     <div className='login-remember-field'>
    
       <a href="#">Forgot Password</a>
      
        <div >
        <label htmlFor="remember">Remember me</label>
        <input   type="checkbox" name="remember" id="remember" />
      
        </div>
     </div> 
       
       <button style={{backgroundColor:email && password?'#173039':'#C4C5CC'}}>sign in</button>

       <div className='login-noAccount'>
        <p>dont have an account</p>
        <a href="#">create new</a>
       </div>

    </form>
              
              <img src={logo}/>
   </div>
  )
}

export default Login