import React from 'react'

const VideoTitile = ({original_title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-15 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{original_title}</h1>
      <p className='py-6 text-lg w-1/3'>{overview}</p>
      <div>
        <button className='bg-white text-black text-xl p-4 px-12 rounded-lg cursor-pointer '>▶️ Play</button>
        <button  className='mx-2 bg-gray-500 text-black text-xl p-4 px-12 rounded-lg cursor-pointer bg-opacity-50 '>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitile
