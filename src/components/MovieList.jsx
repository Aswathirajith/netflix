import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({titile,movies}) => {
   if(!movies) return null
  
  return (
    <div className='px-6  text-white'>
         <h1 className='text-3xl font-bold py-4'>{titile}</h1>
        <div className='flex overflow-x-scroll no-scrollbar'>
           
            <div className='flex'>
           {movies.map((movie)=>{
              return <MovieCard key={movie.id} poster_path={movie.poster_path}/>
           })} 
            </div>
        </div>
      
    </div>
  )
}

export default MovieList
