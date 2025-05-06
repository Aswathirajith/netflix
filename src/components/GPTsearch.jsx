import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggection from './GptMovieSuggection'
import { bg_img } from '../utilits/constant'

function GPTsearch() {
  return (
    <div>
      <div className='absolute -z-10'>
           <img src={bg_img} alt="" />
           </div>
      <GptSearchBar/>
      <GptMovieSuggection/>
    </div>
  )
}

export default GPTsearch
