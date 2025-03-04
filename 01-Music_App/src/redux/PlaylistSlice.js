import { createSlice } from "@reduxjs/toolkit";

const playlistSlice=createSlice({
    name:"playlist",
    initialState:[],
    reducers:{
        Addsong:(state,action)=>{
            let exist=state.find((song)=>song.songIndex==action.payload.songIndex)
            if(exist){
                return
            }else{
                state.push(action.payload)
            }
        },

        RemoveSong:(state,action)=>{
           return state.filter((song)=>(song.songIndex!==action.payload))
        }
    }
})

export const {Addsong,RemoveSong}=playlistSlice.actions
export default playlistSlice.reducer