import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../utilits/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';




const Browse = () => {

useNowPlayingMovies();
  
  
  return (
    <div>
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
