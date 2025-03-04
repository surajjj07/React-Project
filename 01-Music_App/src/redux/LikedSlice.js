import { createSlice } from "@reduxjs/toolkit";

const LikedSlice=createSlice({
    name:"liked",
    initialState:[],
    reducers:{
        Likedsong:(state,action)=>{
            let exist=state.find((song)=>song.songIndex==action.payload.songIndex)
            if(exist){
                return
            }else{
                state.push(action.payload)
            }
        },

        DislikedSong:(state,action)=>{
           return state.filter((song)=>(song.songIndex!==action.payload))
        }
    }
})

export const {Likedsong,DislikedSong}=LikedSlice.actions
export default LikedSlice.reducer