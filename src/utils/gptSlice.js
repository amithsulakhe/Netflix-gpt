import { createSlice } from "@reduxjs/toolkit";

const gptslice=createSlice({
    name:"gptslice",
    initialState:{
        gptslicer:false
    },
    reducers:{
        addgptsearcher:(state)=>{
        state.gptslicer=!state.gptslicer
        }
    }
})
export const {addgptsearcher}=gptslice.actions
export default gptslice.reducer