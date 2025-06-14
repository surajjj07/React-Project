import React from 'react'
import Nav from '../components/Nav'
import aimg from '../assets/coding.jpeg'
import { GoInfo } from "react-icons/go";
import { useNavigate } from 'react-router-dom';


function About() {
    let navigate=useNavigate()
  return (
      <div className={`w-full h-screen bg-[url(./assets/bg-image.jpeg)] flex bg-cover font-serif bg-no-repeat`}>
          <Nav />    
          <div className='w-[50%] h-full hidden md:flex justify-center items-center  '>
              <img src={aimg} alt=""  className='w-[400px] h-[400px] opacity-[0.7] shadow-lg rounded-lg '/>
          </div>    
          <div className='md:w-[40%]  justify-center  h-full flex flex-col gap-[20px] pt-[50px] text-white'>
              <div className='flex '>
                  <span className='flex justify-center items-center text-[40px] text-red-400 gap-3'>About Me<GoInfo /></span>
              </div>
              <div className=' flex flex-col md:text-[20px] gap-3'>
                  <div>Hi, I'm <span className='text-red-400'>Suraj Kumar</span> , a passionate Full Stack Web Developer with a strong foundation in modern web technologies including<span className='text-red-400'> HTML</span>, <span className='text-red-400'>CSS</span>,<span className='text-red-400'>JavaScript</span>, <span className='text-red-400'>React</span>, and <span className='text-red-400'>MongoDB</span>. As a fresher, I'm eager to grow and bring real value through my skills, whether it's through internships, freelance work, or full-time opportunities.</div>
                  <div> I’ve built several projects (listed in the <span className='text-red-400 cursor-pointer' onClick={() => navigate('/project')}>Projects section</span>) that reflect my understanding of both frontend and backend development. I'm continuously working to sharpen<span className='text-red-400 cursor-pointer' onClick={() => navigate('/skills')}> my skills </span>and stay updated with the latest tech trends.</div>
                  <div>
                      I enjoy exploring new technologies and have a deep passion for learning and improving. Every new challenge is an opportunity for me to grow and deliver better results.</div>
                  

                  <div> Let’s connect and build something awesome together!</div>

                  <button href='public/Suraj_Kumar_Kanu__Resume.pdf' download className='p-[10px] border-1 border-red-400 w-[200px] rounded-lg hover:bg-red-400 cursor-pointer'>Download my cv</button>
                 
             </div>
          </div>
    </div>
  )
}

export default About
