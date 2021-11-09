import React,{useRef,useState} from 'react'
import './SignInScreen.css'
import {auth} from '../../firebase';

const SignInScreen = () => {
    const emailRef=useRef(null);
    const passwordRef=useRef(null);
    const register=(e)=>{
              e.preventDefault();
              auth.createUserWithEmailAndPassword(
                  emailRef.current.value,
                  passwordRef.current.value
              ).then((authUser)=>{
                // console.log(authUser)
              }).catch((error)=>{
                  alert(error.message)
               });
    }

    const signIn=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser)=>{
        //   console.log(authUser)
        }).catch((error)=>{
            alert(error.message)
         });
    }
    return (
        <div className='signInScreen'>
         <form>
             <h1>Sign In</h1>
             <input ref={emailRef} placeholder='Email' type='email'/>
             <input  ref={passwordRef} placeholder='Password' type='password' />
             <button onClick={signIn}>Sign In</button>
             <h4 className='signInScreen_footer'>
                 <span className='signInScreen_gray'>New to Netflix? </span>
                <span className='signInScreen_link' onClick={register}>Sign Up now.</span> 
             </h4>
         </form>
        </div>
    )
}

export default SignInScreen
