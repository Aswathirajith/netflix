import { useDispatch } from "react-redux";
import {addPopularMovie}  from "./movieSlice";
import { API_OPTIONS } from "./constant";
import { useEffect } from "react";


const usePopularMovies=()=>{
    const dispatch=useDispatch()

    const getNowPlayingMovie=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
    
     const json=await data.json();
     console.log(json.results);
     dispatch(addPopularMovie(json.results))
      
        
    }
    
      useEffect(()=>{
       getNowPlayingMovie()
      },[])
    
}

export default usePopularMovies;