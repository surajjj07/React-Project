import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { RiPlayListLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";
import {Link} from "react-router-dom"
function Nav() {
  return (
    <div className='flex gap-12 text-white bg-black fixed bottom-0 md:top-0 w-full justify-around md:justify-center items-center h-[80px] p-[20px] z-30 rounded-t-[30px]'>
      <Link to={'/'}>
        <AiFillHome className='h-[30px] w-[30px]' />
      </Link>
      <Link to={'/search'}>
        <IoSearch className='h-[30px] w-[30px]' />
      </Link>
      <Link to={'/playlist'}>
        <RiPlayListLine className='h-[30px] w-[30px]' />
      </Link>
      <Link to={'/liked'}>
        <FaHeart className='h-[30px] w-[30px]' />
      </Link>
    </div>
  )
}

export default Nav
