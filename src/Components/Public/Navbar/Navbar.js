import React, { useState } from 'react'
import './Navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RxCross2} from 'react-icons/rx'
import { useNavigate } from 'react-router'

import {BsBellFill, BsSearch} from 'react-icons/bs'
import Icon1 from './Assets/Group 28.png'
import Icon2 from './Assets/Group 28-1.svg'
import Icon4 from './Assets/Group 31.svg'
import Icon5 from './Assets/Group 32.svg'
import Icon6 from './Assets/Group 14162.svg'
import Icon7 from './Assets/Group 14163.svg'
import Icon8 from './Assets/Group 14171.svg'
import Icon9 from './Assets/logo (2).svg'
import { useDispatch,  useSelector } from 'react-redux'
import { direction } from '../../../ReduxStore'


const Navbar = () => {

     const Dispatch = useDispatch();
      const dir = useSelector((state)=> state.direction.value)
      const action = direction.actions;
   
      const changeDir=()=>{
           if(dir=='rtl')
           {
            Dispatch(action.change('ltr'))
           }
           else{
            Dispatch(action.change('rtl'))
           }
      }
const nav = useNavigate();
    const [navActive,setNavActive] = useState(false)

  return (
  <div  className="Navbar-Wrapper">


<div className="N-topBar">

<div className="n-right">
       <input type="text" />
       <BsSearch/>
 </div>
    <div className="n-left">
          <BsBellFill onClick={changeDir} size={25}/>
        <span  onClick={()=>setNavActive(!navActive)}> {
            navActive ? <RxCross2  size={25}/> : <GiHamburgerMenu  size={25}/>
        }
        </span>
    </div>

    
    
</div>

<div style={{width:navActive ? '276px':'',
 right : dir=='rtl' ? '0' : '',
 left : dir=='rtl' ? '' : '0'
}}   className="n-sideBar">

<div className="nS-hover">
   <div>
         <img src={Icon9} alt="" />
         <span style={{display:navActive ? 'inline':''}} >Business Shura</span>
   </div>
   <div onClick={()=> nav('/1')}>
  <img src={Icon1} alt="" />
         <span  style={{display:navActive ? 'inline':''}}>Omar Al-Khodary</span>

   </div>
   <div onClick={()=> nav('/2')}>
  <img src={Icon2} alt="" />
         <span style={{display:navActive ? 'inline':''}}>Main</span>

   </div>
   <div>
  <img src={Icon4} alt="" />
         <span style={{display:navActive ? 'inline':''}}>Requests</span>

   </div>
   <div>
  <img src={Icon5} alt="" />
         <span style={{display:navActive ? 'inline':''}}>Employees</span>

   </div>
   <div>
  <img src={Icon6} alt="" />
         <span style={{display:navActive ? 'inline':''}}>Lawyers</span>

   </div>
   <div>
  <img src={Icon7} alt="" />
         <span style={{display:navActive ? 'inline':''}}>Teachers</span>

   </div>
   <div>
  <img src={Icon8} alt="" />
         <span style={{display:navActive ? 'inline':''}}>Students</span>

   </div>
   

</div>
   
</div>
  </div>
  )
}

export default Navbar