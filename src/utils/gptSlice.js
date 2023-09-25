import { createSlice } from "@reduxjs/toolkit";

const gptslice=createSlice({
    name:"gptslice",
    initialState:{
        gptslicer:false,
        movieNames:null,
        MovieResults:null

    },
    reducers:{
        addgptsearcher:(state)=>{
        state.gptslicer=!state.gptslicer
        },
        addgptsearchedmovies:(state,action)=>{
            const {movieNames,MovieResults}=action.payload
            state.movieNames=movieNames,
            state.MovieResults=MovieResults

        }
    }
})
export const {addgptsearcher,addgptsearchedmovies}=gptslice.actions
export default gptslice.reducer