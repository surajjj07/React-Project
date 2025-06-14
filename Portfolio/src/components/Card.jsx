import React from 'react'
import aimg from '../assets/coding.jpeg'
import { FaGithub } from "react-icons/fa";
import { VscLinkExternal } from "react-icons/vsc";
function Card({ image, pName }) {
  return (
    <div className='w-[250px] h-[350px] bg-gray-500 rounded-lg drop-shadow-white shadow-2xl relative '>
      <div className='w-full h-[50%] overflow-hidden '>
        <img src={image || aimg} alt="" className='rounded-lg w-full h-full ' />
      </div>
      <div className='flex flex-col p-[10px] gap-2'>
        <span className='text-[25px] font-semibold text-white'>{pName || "Project Name as u wish"}</span>
        <div className='flex gap-2 flex-wrap'>
          <span className=' flex jsutify-center items-center py-[5px] px-[10px] text-[15px] text-white rounded-lg bg-red-400 hover:bg-white hover:text-red-400 hover:border-1 hover:border-red-400 transition-all duration-300 cursor-pointer'>HTML</span>
          <span className=' flex jsutify-center items-center py-[5px] px-[10px] text-[15px] text-white rounded-lg bg-red-400 hover:bg-white hover:text-red-400 hover:border-1 hover:border-red-400 transition-all duration-300 cursor-pointer'>CSS</span>
          <span className='flex jsutify-center items-center py-[5px] px-[10px] text-[15px] text-white rounded-lg bg-red-400 hover:bg-white hover:text-red-400 hover:border-1 hover:border-red-400 transition-all duration-300 cursor-pointer'>JavaScript</span>
          <span className=' flex jsutify-center items-center py-[5px] px-[10px] text-[15px] text-white rounded-lg bg-red-400 hover:bg-white hover:text-red-400 hover:border-1 hover:border-red-400 transition-all duration-300 cursor-pointer'>React</span>
          <span className=' flex jsutify-center items-center py-[5px] px-[10px] text-[15px] text-white rounded-lg bg-red-400 hover:bg-white hover:text-red-400 hover:border-1 hover:border-red-400 transition-all duration-300 cursor-pointer'>tailwind</span>
        </div>
        <div className='absolute right-4 bottom-0 w-[70px] h-[50px] flex md:hidden justify-between items-center'>
          <a href=''><FaGithub className='text-[30px]' /></a>
          <a href=""><VscLinkExternal className='text-[30px]' /></a>
          
        </div>
      </div>
    </div>
  )
}

export default Card
