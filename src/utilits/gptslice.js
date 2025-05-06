import { createSlice } from "@reduxjs/toolkit";



const gptslice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
    },
    reducers:{
       toggleSearch:(state)=>{
        state.showGptSearch=!state.showGptSearch;
       }
    }
})


export const {toggleSearch} =gptslice.actions;
export default gptslice.reducer;