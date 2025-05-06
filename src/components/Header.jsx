import React from 'react'
import {  signOut , onAuthStateChanged} from "firebase/auth";
import { auth } from '../utilits/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser,removeUser } from '../utilits/userSlice';
import { LOGO,support_lang,user_logo } from '../utilits/constant';
import {toggleSearch} from '../utilits/gptslice'
import { changeLang } from '../utilits/ConfigSlice';







function Header() {
   const gptToggle=useSelector(state=>state.gpt.showGptSearch);

  const navigate=useNavigate()
  const user=useSelector(state=>state.user)
  const dispatch=useDispatch()
  


  const handleSignOut=()=>{
    signOut(auth).then(() => {
      
    }).catch((error) => {
      navigate('/error')
    });

  }


  //this onAuthStateChanged is kind of a event listener when ever user signin sign up or sighn out this function will call so we add our store dispatch function in this 

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const {uid,email,displayName} = user;
       
        dispatch(addUser({uid:uid,email:email,name:displayName}));
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }

      return ()=>unsubscribe();
    });
  },[])


  const handleGpt=()=>{
    dispatch(toggleSearch())
  }

  const handleChange=(e)=>{
    dispatch(changeLang(e.target.value))
  }


  return (
    <div className='absolute w-screen px-8 py-2  bg-gradient-to-b from-black z-10 flex justify-between '>
      <img className='w-44' src={LOGO} alt="Example SVG" />
      
      {user && <div className='flex p-2'>
       { gptToggle&& <select className='py-1 px-1 mx-3 my-2 bg-gray-800 text-white rounded-lg' onChange={handleChange}>
        {support_lang.map((lang)=>(<option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
      </select>}
        <button className='py-2 px-3 mx-3 my-2 bg-purple-800 text-white rounded-lg' onClick={handleGpt}>GPT search</button>
        <img className='w-10 h-10' src={user_logo} alt="" />     
        <button className='cursor-pointer text-white' onClick={handleSignOut}>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header
