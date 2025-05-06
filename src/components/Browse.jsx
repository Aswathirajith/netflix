import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../utilits/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondContainer from './SecondContainer';
import usePopularMovies from '../utilits/usePopularMovies';
import useUpComingMovies from '../utilits/useUpcomingMovie'


import GPTsearch from './GPTsearch';
import { useSelector } from 'react-redux';




const Browse = () => {
  const gptToggle=useSelector(state=>state.gpt.showGptSearch);

useNowPlayingMovies();
usePopularMovies();
useUpComingMovies()


  
  
  return (
    <div className='no-scrollbar absolute '>
      <Header/>
      {gptToggle?
      <GPTsearch/>:
      <>
      <MainContainer/>
      <SecondContainer/>
      </>}
     
      
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
