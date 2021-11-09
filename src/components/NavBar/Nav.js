import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router'
import './Nav.css'
const Nav = () => {
const [show,handleShow]=useState(false)
const history=useHistory();
const transitionNavBar=()=>{
    if(window.scrollY>100){
        handleShow(true);
    }
    else{
        handleShow(false)
    }
}

useEffect(() => {
   window.addEventListener("scroll",transitionNavBar);
   return()=>window.removeEventListener('scroll',transitionNavBar)
}, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className='nav_contents'>
                 <img onClick={()=>history.push('/')} 
                className='nav_logo' src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt="netflix-img" />
                <img onClick={()=>history.push("/profile")}
                 className='nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avatar'/>
           
            </div>
        
        </div>
    )
}

export default Nav
