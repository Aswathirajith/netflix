import React from 'react'
import { API_OPTIONS } from '../utilits/constant'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../utilits/useMovieTrailer'


const VideoBg = ({id}) => {
  const trailerKey=useSelector((state)=>state.movie?.trailerVideo)
   useMovieTrailer(id)
   

  return (
    <div>
      <iframe className='w-screen aspect-video' 
       src={"https://www.youtube.com/embed/"+trailerKey?.key+"?&autoplay=1&mute=1"} 
       title="YouTube video player"  frameBorder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBg
