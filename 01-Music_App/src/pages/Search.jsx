import React, { useEffect, useState } from 'react'
import Player from '../components/Player'
import { IoSearch } from "react-icons/io5";
import { songsData } from '../songs';
import Card from '../components/Card';

function Search() {
  let [input,setInput]=useState("")
  let [newlist,setNewlist]=useState([])
  useEffect(()=>{
    let a=songsData.filter((song)=>song.name.toLowerCase().includes(input)  ||(song.singer.toUpperCase().includes(input)) || (song.name.toUpperCase().includes(input)))
    setNewlist(a)
  },[input])

  return (
    <div className='w-full h-[100vh] bg-black flex flex-col justify-start items-center md:pt-[100px] gap-4'>     
      <Player/>
      <form action="" className='w-[90%] md:w-[60%] bg-gray-800 h-[50px] flex justify-center items-center gap-5 rounded-lg overflow-hidden mt-3 md:mt-0 p-[15px] md:p-0' onSubmit={(e)=>{
        e.preventDefault()
      }}>
      <IoSearch className='text-white text-[18px]'/>
        <input type="text" className='w-[90%] h-full text-white bg-gray-800 outline-none border-0 p-[10px] text-[18px]' placeholder='Enter Songs Name......' onChange={(e)=>(
          setInput(e.target.value)
        )} value={input}/>
      </form>
      {input?<div className='w-[100%] h-[70%] md:h-[100%] p-[20px] overflow-auto flex flex-col justify-start items-center gap-3'>

        {newlist.map((song)=>(
          <Card name={song.name} singer={song.singer} image={song.image} songIndex={song.id-1}/>
        ))}
      </div>
      :
      <div className='text-gray-800 text-[30px] font-semibold'> Search Songs...</div>
      }
    
    </div>
  )
}

export default Search
