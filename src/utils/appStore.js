import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice.js"
import userMovies from "./movieSlice.js"
const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:userMovies
    }
})
export default appStore;