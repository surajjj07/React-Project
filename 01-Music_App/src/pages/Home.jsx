import React, { useContext, useEffect, useRef, useState } from 'react'
import { songsData } from '../songs'
import musicImg from "../assets/musicanim.webp"
import { MdSkipPrevious } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { MdSkipNext } from "react-icons/md";
import { datacontext } from '../context/UserContext';
import { FaPause } from "react-icons/fa";
import Card from '../components/Card';
import { FaAngleDown } from "react-icons/fa6";
import Player from '../components/Player';

function Home() {

  let {audioRef,playingSong,playSong,pauseSong,nextSong,index,setIndex,prevSong}=useContext(datacontext)
  let [range,setRange]=useState(0)
  let progress=useRef(null)
  const [arrow,setArrow]=useState(false)

  useEffect(()=>{
    const updateProgress=()=>{
      let duration=audioRef.current.duration || 0
      let currentTime=audioRef.current.currentTime || 0
      let progressPercentage=(currentTime/duration)*100 || 0
      setRange(progressPercentage)

      if(progress.current){
        progress.current.style.width=`${progressPercentage}%`
      }
    }

    audioRef.current.addEventListener("timeupdate",updateProgress)

  })

  function rangeHandle(e){
    let newrange=e.target.value
    setRange(newrange)
    let duration = audioRef.current.duration
    audioRef.current.currentTime=(duration*newrange)/100   
  }

  return (
    <div className='  bg-black h-screen w-full flex relative overflow-hidden' >
      <FaAngleDown className={`text-white h-[25px] md:hidden absolute top-[30px] ${arrow?"rotate-[-90deg]":null} transition-all left-[10%] cursor-pointer`} onClick={()=>setArrow(prev=>!prev)}/>

      {!arrow ?<><div className='w-full md:w-[50%] h-full flex justify-start items-center flex-col pt-[20px] md:pt-[120px] gap-[30px] '>
        <h1 className='text-white font-semibold text-[20px] '>Now Playing</h1>
        <div className='w-[80%] h-[250px] max-w-[250px] md:h-[250px] object-fill rounded-xl overflow-hidden relative'>
          <img src={songsData[index].image} alt="" className='h-[100%] w-[100%]'/>
          {playingSong? <div className='h-full w-full bg-black absolute top-0 opacity-[0.5] flex justify-center items-center'>
            <img  src={musicImg} alt="" className='w-[50%] ' /> 
          </div> : null}

        </div>
        <div>
          <div className='text-white text-center text-[28px] font-bold'>{songsData[index].name}</div>
          <div className='text-gray-400 text-center text-[18px]'>{songsData[index].singer}</div>
        </div>
        <div className='w-[50%] flex justify-center items-center relative'>
          <input type="range" id="range" className='appearance-none w-full h-[6px] rounded-md bg-gray-600 cursor-pointer' value={range} onChange={rangeHandle}/>
          <div className={`bg-blue-500 h-full absolute left-0 rounded-md`} ref={progress}></div>
        </div>
        <div className='text-white flex justify-center items-center gap-5 '>
          <MdSkipPrevious className='text-[30px] hover:text-gray-600' onClick={()=>prevSong()}/>
          {!playingSong? 
          <div className='h-[50px] w-[50px] rounded-full bg-white text-black flex justify-center items-center hover:bg-gray-600' onClick={()=>playSong()}><FaPlay /></div> : 
          <div className='h-[50px] w-[50px] rounded-full bg-white text-black flex justify-center items-center hover:bg-gray-600' onClick={()=>pauseSong()}><FaPause /></div>
          }
          <MdSkipNext className='text-[30px] hover:text-gray-600' onClick={()=>nextSong()}/>
        </div>
      </div >
      <div className='w-[100%] hidden md:w-[50%] h-full md:flex items-center  mt-[70px]  flex-col gap-[20px] overflow-auto pb-[200px]'>
        {songsData.map((song)=>(
          <Card image={song.image} name={song.name} singer={song.singer} songIndex={(song.id)-1}/>      
        ))}
      </div>
      </>
      :
      <div className='w-[100%] md:w-[50%] h-[70%] md:flex items-center  mt-[70px] flex flex-col gap-[20px] overflow-auto pb-[50px]'>
        <Player/>
        {songsData.map((song)=>(
          <Card image={song.image} name={song.name} singer={song.singer} songIndex={(song.id)-1}/>      
        ))}
      </div>}
      
    </div>
  )
}

export default Home
