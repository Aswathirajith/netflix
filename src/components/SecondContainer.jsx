import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondContainer = () => {
  const movieList=useSelector(state=>state.movie?.nowPlayingMovie)
  const popularMovie=useSelector(state=>state.movie?.popularMovies)
  const upcoming=useSelector(state=>state.movie?.upcomingMovie);
  
  
  return (
    <div className=' bg-black'>
      {
        /*
        movielist -popular
          -moviecard *n
        mpvielist-now playing 
        movielist-trending
        */
      }
      <div className='-mt-42 pl-12 relative z-20'>

       <MovieList titile={"Now Playing"} movies={movieList}/>
      
      <MovieList titile={"Popular"} movies={popularMovie}/>
      <MovieList titile={"Upcoming"} movies={upcoming}/>
      <MovieList titile={"Trending"} movies={movieList}/>
    </div>
    </div>
  )
}

export default SecondContainer
