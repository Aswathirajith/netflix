import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react';
import { vadidation } from '../utilits/validate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile  } from "firebase/auth";
import { auth } from '../utilits/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utilits/userSlice';

const Login = () => {
  const [isSignIn,setSignIn]=useState(true);
  const [errormessage,setmessage]=useState("");
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null)
  const navigate=useNavigate();
  const dispatch=useDispatch()
  

  const HandleClick=()=>{

    

    const message=vadidation(email.current.value,password.current.value);
    setmessage(message);
    
    if(message) return null;

    if(!isSignIn)
    {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
      
      const user = userCredential.user;
      //updateing the current user adding name in the firebase
      updateProfile(auth.currentUser, {
        displayName:name.current.value , photoURL: "https://media.licdn.com/dms/image/v2/D4D35AQF2SahsO-vItw/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1725517902749?e=1746525600&v=beta&t=76AvUwKPyX0iyZkcHunAwsLE51GURXj6EYHC8gtPlWE"
      }).then(() => {
        const {uid,email,displayName} = auth.currentUser;
               
        dispatch(addUser({uid:uid,email:email,name:displayName}));
        navigate('/browse')
      }).catch((error) => {
        setmessage(error)
      });
      
     
      
    })
      .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       setmessage(errorCode+"-"+errorMessage);
       navigate('/')
    
  });
    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
     .then((userCredential) => {
   
    const user = userCredential.user;
    navigate('/browse')
   
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setmessage(errorCode+"-"+errorMessage);
    navigate('/')
    });
    }
    

    
   

  }

  const handleSignIn=()=>{
    setSignIn(!isSignIn);
  }
  return (
    <div>
     <Header/>
     <div className='absolute'>
     <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg" alt="" />
     </div>
     <form className='w-3/12 absolute bg-black p-12 my-36 mx-auto left-0 right-0 text-white rounded-md bg-black/80' onSubmit={(e)=>{e.preventDefault()}}>
     <h1 className='font-bold text-3xl pb-6'>{isSignIn? "Sign In":"Sign Up"}</h1>
  
  {!isSignIn &&
     <input 
     type='text' ref={name}
     placeholder='Full Name' 
     className='py-3 px-4 mb-4 bg-black/30 border border-gray-500 text-white w-full rounded-md'
   />
  }
    <input 
    type='text'  ref={email}
    placeholder='Email or Mobile number' 
    className='py-3 px-4 mb-4 bg-black/30 border border-gray-500 text-white w-full rounded-md'
  />
  
  <input 
    type='password' ref={password}
    placeholder='Password' 
    className='py-3 px-4 mb-6 bg-black/30 border border-gray-500 text-white w-full rounded-md'
  />
  
  <button onClick={HandleClick}
    className='py-2 px-4 my-4 bg-red-700 hover:bg-red-800 text-white w-full rounded-md font-semibold cursor-pointer'
  >
   {isSignIn? "Sign In":"Sign Up"}
  </button>
  <p className='text-red-500'>{errormessage}</p>
  <p className='py-2 cursor-pointer' onClick={handleSignIn}>New to netflix? Sign up now</p>
</form>

   </div>
  )
}

export default Login
