import React from 'react'
import Player from '../components/Player'
import Card from '../components/Card'
import { useSelector } from 'react-redux'

function Liked() {
  let songs=useSelector(state=>state.liked)
  return (
    <div className='w-full h-screen bg-black flex flex-col justify-start items-center md:pt-[100px] gap-4'>
    <Player/>
 {!songs.length<1 ?
    <>
     <h1 className='text-white text-[30px] font-semibold'>Liked</h1>
    <div className='w-full h-[65%] md:h-[100%] flex flex-col justify-start items-center gap-4 overflow-auto'>
      {songs.map((song) => (
        <Card name={song.name} image={song.image} singer={song.singer} songIndex={song.songIndex}/>
      ))}     
    </div> </>
    :
    <div className='text-gray-800 text-[30px] font-semibold'>  No Longer Liked Songs...</div>
    
  }
   
  </div>
  )
}

export default Liked
