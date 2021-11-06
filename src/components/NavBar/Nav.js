import React,{useState,useEffect} from 'react'
import './Nav.css'
const Nav = () => {
const [show,handleShow]=useState(false)
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
                <img className='nav_logo' src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt="netflix-img" />
                <img className='nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avatar'/>
           
            </div>
        
        </div>
    )
}

export default Nav
