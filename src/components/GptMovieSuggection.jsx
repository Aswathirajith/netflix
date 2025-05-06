import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggection = () => {

  const {movieName,movieResult}=useSelector(state=>state.gpt)

  if(!movieName) return null;
  console.log(movieResult[0])
  


  return (
    <div className='p-2 m-4 bg-black/90 text-white '>
      <div>
      {movieName.map((movieName,index)=><MovieList key={movieName} titile={movieName} movies={movieResult[index]}/>)}
      </div>
    </div>
  )
}

export default GptMovieSuggection
