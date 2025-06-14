import React from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {
  let navigate=useNavigate()
  return (
    <div className='w-full h-[100px] fixed flex md:justify-end justify-between md:gap-[150px] md:text-[20px] text-[#e5e6e1]  items-center md:px-[20px] px-[10px]'>
      <div className='cursor-pointer hover:text-red-400'onClick={()=>navigate('/')}>Home</div>
      <div className='cursor-pointer hover:text-red-400'onClick={()=>navigate('/about')}>About</div>
      <div className='cursor-pointer hover:text-red-400' onClick={() => navigate('/project')}>Project</div>
      <div className='cursor-pointer hover:text-red-400' onClick={() => navigate('/skills')}>Skills</div>
      <div className='cursor-pointer hover:text-red-400' onClick={() => navigate('/contact')}>Contact</div>
      
    </div>
  )
}

export default Nav
