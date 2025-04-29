import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utilits/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utilits/userSlice';


const Body = () => {
  const dispatch=useDispatch()

  const appRouter=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/browse',
      element:<Browse/>
    }
  ])

//this onAuthStateChanged is kind of a event listener when ever user signin sign up or sighn out this function will call so we add our store dispatch function in this 

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const {uid,email,displayName} = user;
       
        dispatch(addUser({uid:uid,email:email,name:displayName}));
      } else {
        dispatch(removeUser());
      }
    });
  },[])


  return (
    <div>
      <RouterProvider router={appRouter}/>
      
    </div>
  )
}

export default Body
