import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlaying:null,
        nowMovieTrailer:null,
        nowPlayingPopular:null,
        nowPlayingToprated:null,
        nowPlayingUpcomimg:null

    },
    reducers:{
        addplayingmovie:(state,action)=>{
            state.nowPlaying=action.payload
        },
        addPlayingTrailer:(state,action)=>{
            state.nowMovieTrailer=action.payload
        },
        addplayingPopular:(state,action)=>{
            state.nowPlayingPopular=action.payload
        },
        addplayingToprated:(state,action)=>{
            state.nowPlayingToprated=action.payload
        }
        ,  addplayingUpcomimg:(state,action)=>{
            state.nowPlayingUpcomimg=action.payload
        }
        
    }
})

export const {addplayingmovie,addPlayingTrailer,addplayingPopular,addplayingToprated,addplayingUpcomimg}=movieSlice.actions

export default movieSlice.reducer