import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlaying:null,
        nowMovieTrailer:null
    },
    reducers:{
        addplayingmovie:(state,action)=>{
            state.nowPlaying=action.payload
        },
        addPlayingTrailer:(state,action)=>{
            state.nowMovieTrailer=action.payload
        }
    }
})

export const {addplayingmovie,addPlayingTrailer}=movieSlice.actions

export default movieSlice.reducer