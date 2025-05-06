import React, { useRef } from 'react';
import lang from '../utilits/LanguageConstant';
import { useSelector } from 'react-redux';
import geminiai from '../utilits/openai';
import { API_OPTIONS } from '../utilits/constant'
import { useDispatch } from 'react-redux';
import {addGptMovieResult} from '../utilits/gptslice'


const GptSearchBar = () => {
    const language=useSelector(state=>state.config?.lang);
    const dispatch=useDispatch()
    
    const Searchtext=useRef(null)

    const searchMoviesTmdb=async(movie)=>{
      const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
      const json=await data.json();

      return json.results;
    }
    
    const handleGpt=async()=>{


      const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query: " +
      Searchtext.current.value +
      ". Only give me names of 5 movies, comma-separated. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.";

    const model = geminiai();
    const result = await model.generateContent(gptQuery);
    const gptResults = await result.response.text();

    const movies=gptResults.split(',');


    const promiseArray=movies.map((movie)=>searchMoviesTmdb(movie));

    const tmdbResult=await Promise.all(promiseArray);

    console.log(tmdbResult);

    dispatch(addGptMovieResult({movieName:movies,movieResult:tmdbResult}));

    


   }
  return (
    <div className="pt-[10%] flex justify-center w-screen px-4">
      <form className="flex w-full max-w-2xl bg-black p-4 rounded-lg" onSubmit={(e)=>e.preventDefault()}>
        <input
          type="text"
          className="flex-grow p-3 rounded-md focus:outline-none bg-white"
          placeholder={lang[language].gptSearchPlaceholder} ref={Searchtext}
        />
        <button className="ml-4 px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-600 transition" onClick={handleGpt}>
          {lang[language].search} 
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

