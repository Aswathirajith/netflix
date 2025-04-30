import React from 'react'
import VideoBg from './VideoBg'
import VideoTitile from './VideoTitile'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies=useSelector((state)=>state.movie?.nowPlayingMovie);

    if(!movies) return null

    const mainMovie=movies[2];
    const {original_title,overview,id}=mainMovie;
    

  return (
    <div className='no-scrollbar'>
      
      <VideoTitile original_title={original_title} overview={overview}/>
      <VideoBg id={id}/>
    </div>
  )
}

export default MainContainer
