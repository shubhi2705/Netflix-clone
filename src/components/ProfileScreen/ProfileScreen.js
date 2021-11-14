import React from 'react'
import Nav from '../NavBar/Nav'
import './ProfileScreen.css'
import { auth } from '../../firebase'
import userSlice from '../../features/userSlice'
import PlanScreen from '../PlanScreen/PlanScreen'

const ProfileScreen = (user) => {
   const loggedInuser=user.user;
  const  signout=()=>{
        console.log("Inside SignOut");
    }
    return (
        <div className='profileScreen'>
        <Nav/>
        <div className='profileScreen_body'>
          <h1>Edit Profile</h1>
          <div className='profileScreen_info'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='avatar'/>
        <div className='profileScreen_details'>
            <h2>{loggedInuser.email}</h2>
            <div className='profileScreen_plans'>
                <h3>Plans</h3>
                <PlanScreen />
              <button onClick={()=>auth.signOut()}className='profileScreen_signOut'>Sign Out</button>
            </div>
        </div>
         
          </div>
        </div>
        </div>
    )
}

export default ProfileScreen
