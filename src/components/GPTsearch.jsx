import React, {  useEffect } from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggection from './GptMovieSuggection'
import { bg_img } from '../utilits/constant'
import { useDispatch } from 'react-redux'
import { clearGpt} from '../utilits/gptslice'
function GPTsearch() {
  const dispatch=useDispatch()

  useEffect(()=>{
   return(()=>{
    dispatch( clearGpt())
   })
  },[])
  return (
    <div>
      <div className='fixed -z-10'>
           <img src={bg_img} alt="" />
           </div>
      <GptSearchBar/>
      <GptMovieSuggection/>
    </div>
  )
}

export default GPTsearch
