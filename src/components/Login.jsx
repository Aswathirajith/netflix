import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {
  const [isSignIn,setSignIn]=useState(true);

  const handleSignIn=()=>{
    setSignIn(!isSignIn);
  }
  return (
    <div>
     <Header/>
     <div className='absolute'>
     <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg" alt="" />
     </div>
     <form className='w-3/12 absolute bg-black p-12 my-36 mx-auto left-0 right-0 text-white rounded-md bg-black/80'>
     <h1 className='font-bold text-3xl pb-6'>{isSignIn? "Sign In":"Sign Up"}</h1>
  
  {!isSignIn &&
     <input 
     type='text' 
     placeholder='Full Name' 
     className='py-3 px-4 mb-4 bg-black/30 border border-gray-500 text-white w-full rounded-md'
   />
  }
    <input 
    type='text' 
    placeholder='Email or Mobile number' 
    className='py-3 px-4 mb-4 bg-black/30 border border-gray-500 text-white w-full rounded-md'
  />
  
  <input 
    type='password' 
    placeholder='Password' 
    className='py-3 px-4 mb-6 bg-black/30 border border-gray-500 text-white w-full rounded-md'
  />
  
  <button 
    className='py-2 px-4 my-4 bg-red-700 hover:bg-red-800 text-white w-full rounded-md font-semibold cursor-pointer'
  >
   {isSignIn? "Sign In":"Sign Up"}
  </button>
  <p className='py-2 cursor-pointer' onClick={handleSignIn}>New to netflix? Sign up now</p>
</form>

   </div>
  )
}

export default Login
