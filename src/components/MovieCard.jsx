import React from 'react'
import { IMG_CDN } from '../utilits/constant'


const MovieCard = ({poster_path}) => {
  if(!poster_path) return null;
  return (
    <div className='w-48 pr-4'>
      <img src={IMG_CDN+poster_path} alt="" />
    </div>
  )
}

export default MovieCard
