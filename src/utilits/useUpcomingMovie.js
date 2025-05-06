import { useDispatch } from "react-redux"
import { API_OPTIONS } from "./constant"
import { addUpcomingrMovie } from "./movieSlice"
import { useEffect } from "react"





const useUpComingMovies=()=>{
    const dispatch=useDispatch()

    const getNowPlayingMovie=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
    
     const json=await data.json();
     
     dispatch(addUpcomingrMovie(json.results))
      
        
    }
    
      useEffect(()=>{
       getNowPlayingMovie()
      },[])
    
}

export default useUpComingMovies