import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice.js"
import userMovies from "./movieSlice.js"
import gptsearch from "./gptSlice.js"
const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:userMovies,
        gpt:gptsearch
    }
})
export default appStore;                       