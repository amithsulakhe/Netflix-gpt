import { createSlice } from "@reduxjs/toolkit";

export const langSlice=createSlice({
    name:"lang",
    initialState:{
        chooselang:"en"
    },
    reducers:{
        addLanguageSlice:(state,action)=>{
            state.chooselang=action.payload
        }
    }
})
export const {addLanguageSlice}=langSlice.actions
export default langSlice.reducer