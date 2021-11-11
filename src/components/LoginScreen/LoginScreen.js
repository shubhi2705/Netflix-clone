import React,{useState}from 'react'
import SignInScreen from '../SignInScreen/SignInScreen'
import './LoginScreen.css'
const LoginScreen = () => {
    const[signIn,setSignIn]=useState(false)
    return (
        <div className='loginScreen'>
            <div className='loginScreen_background'>
                   <img 
                    className='loginScreen_logo'
                   src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt='netflix-logo'/> 
            <button className='loginScreen_button' onClick={()=>setSignIn(true)}>Sign In</button>
            <div className='loginScreen_gradient'></div>
            <div className='loginScreen_body'>
                {
                    signIn?<>
                    <SignInScreen />
                    </>:
                    <>
                <h1>Unlimited films,TV programmes and
                     a lot more.</h1>
                     <h2>Watch anywhere.Cancel at any time</h2>
                     <h3>Ready to watch?Enter your email to create or restart your membership</h3>
            <div className='loginScreen_input'>
               <form>
                   <input type='email' placeholder="Email Address" />
                   <button className='loginScreen_getStarted' onClick={()=>setSignIn(true)}>GET STARTED</button>
               </form>
            </div>
                </>
                }
                
                
            </div>
           
            </div>
        </div>
    )
}

export default LoginScreen
