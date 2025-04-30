import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../utilits/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';
import usePopularMovies from '../utilits/usePopularMovies';
import useUpComingMovies from '../utilits/useUpcomingMovie';




const Browse = () => {

useNowPlayingMovies();
usePopularMovies();
useUpComingMovies()
  
  
  return (
    <div className='no-scrollbar bg-black'>
      <Header/>

      <MainContainer/>
      <SecondContainer/>
      {
        /**
         * main container
         * -videoBaground
         * -videoTitile
         * secondary container
         * -movieList*n
         * -card*n
         */
      }


    </div>
  )
}

export default Browse
