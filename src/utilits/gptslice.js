import { createSlice } from "@reduxjs/toolkit";



const gptslice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        movieResult:null,
        movieName:null
    },
    reducers:{
       toggleSearch:(state)=>{
        state.showGptSearch=!state.showGptSearch;
       },
       addGptMovieResult:(state,action)=>{
        const {movieName,movieResult}=action.payload;
        state.movieName=movieName
        state.movieResult=movieResult
       },
       clearGpt:(state)=>{
        state.movieName=null
        state.movieResult=null
       }
    }
})


export const {toggleSearch,addGptMovieResult,clearGpt} =gptslice.actions;
export default gptslice.reducer;