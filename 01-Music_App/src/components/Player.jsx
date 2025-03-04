import React, { useContext } from 'react'
import { songsData } from '../songs'
import { datacontext } from '../context/UserContext'
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

function Player() {
    let {playingSong,playSong,pauseSong,index ,setIndex}=useContext(datacontext)
  return (
    <div className='bg-white w-[100%] h-[100px] md:items-center  justify-around md:w-[60%] fixed bottom-[60px] md:bottom-0 rounded-t-[30px] flex pt-[10px]'>
      <div className='flex justify-start items-start gap-[20px] w-[70%] h-[100%] cursor-pointer' >
        <div className='w-[60px] max-h-[60px] md:max-h-[80px] md:w-[80px] rounded-lg object-fill overflow-hidden'>
            <img src={songsData[index].image} alt="" className='h-[100%] w-[100%]' />
        </div>
        <div className='text-[16px] md:text-[25px] text-black'>
        <div className='text-[1em] font-semibold text-center'>{songsData[index].name}</div>
        <div className='text-gray-700 text-[0.6em] text-center'>{songsData[index].singer}</div> 
        </div>    
      </div>
      {!playingSong? 
        <div className='h-[50px] w-[50px] rounded-full bg-black text-white flex justify-center items-center hover:bg-gray-600' onClick={()=>playSong()}><FaPlay /></div> 
        : 
        <div className='h-[50px] w-[50px] rounded-full bg-black text-white flex justify-center items-center hover:bg-gray-600' onClick={()=>pauseSong()}><FaPause /></div>
      }
    </div>
  )
}

export default Player
