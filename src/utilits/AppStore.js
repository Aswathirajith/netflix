import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import movieReducer from './movieSlice'
import gptReducer from './gptslice'
import configReducer from './ConfigSlice'

const AppStore=configureStore({
    reducer:{
         user:userReducer,
         movie:movieReducer,
         gpt:gptReducer,
         config:configReducer
    }
})

export default AppStore