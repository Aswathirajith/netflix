import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "./movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "./constant";



const useNowPlayingMovies=()=>{

    const dispatch=useDispatch()

    const getNowPlayingMovie=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-IN&page=1', API_OPTIONS);
    
     const json=await data.json();
     dispatch(addNowPlayingMovie(json.results))
      
        
    }
    
      useEffect(()=>{
       getNowPlayingMovie()
      },[])
    
}

export default useNowPlayingMovies;