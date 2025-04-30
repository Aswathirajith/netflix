import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovie:null,
        trailerVideo:null,
        popularMovies:null,
        upcomingMovie:null
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.nowPlayingMovie=action.payload
        },
        addTrailer:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addPopularMovie:(state,action)=>{
            state.popularMovies=action.payload
        },
        addUpcomingrMovie:(state,action)=>{
            state.upcomingMovie=action.payload
        },
    }
})

export const{addNowPlayingMovie,addTrailer,addPopularMovie,addUpcomingrMovie}=movieSlice.actions;
export default movieSlice.reducer;