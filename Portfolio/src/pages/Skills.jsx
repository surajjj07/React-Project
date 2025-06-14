import React from 'react'
import Nav from '../components/Nav'
import html from '../assets/HTML5.svg'
import c from '../assets/c.svg'
import cimg from '../assets/cimg.svg'
import bootsrap from '../assets/Bootstrap.svg'
import css from '../assets/CSS3.svg'
import git from '../assets/Git.svg'
import java from '../assets/Java.svg'
import js from '../assets/JavaScript.svg'
import mongo from '../assets/MongoDB.svg'
import mys from '../assets/MySQL.svg'
import node from '../assets/Node.svg'
import py from '../assets/Python.svg'
import react from '../assets/React.svg'
import tailwind from '../assets/Tailwind.svg'
function Skills() {
  return (<>
    <Nav />
    <div className={`w-full h-screen bg-[url(./assets/bg-image.jpeg)] flex flex-col justify-center items-center bg-cover  font-serif bg-no-repeat md:overflow-hidden`}>

      <span className='text-red-400 text-[50px] mt-[130px] font-bold '>My Skills</span>
      <div className='w-full h-[80%] overflow-auto md:overflow-hidden flex flex-col md:flex-row '>
        <div className=' w-full md:w-[50%] flex flex-col items-center gap-[60px] justify-center text-white p-[40px]'>
          <div>
            <span className='text-[20px]'>I am currently pursuing my graduation and am in my third year. I specialize as a MERN stack developer, with strong knowledge of MongoDB, Express.js, React.js, and Node.js. I’m passionate about building full-stack web applications and constantly learning new technologies to improve my skills.</span>
          </div>

          <div className='text-[30px] items-center w-full  md:h-[400px]'>Skills
            <div className='w-[90%] p-[20px] gap-5 flex justify-start px-[3px] flex-wrap '>
              <div></div>
              <img src={html} alt="" className='md:w-[60px] md:h-[60px] w-[30px] h-[30px]' /><div></div>
              <img src={css} alt="" className='md:w-[60px] md:h-[60px] w-[30px] h-[30px]' /><div></div>
              <img src={js} alt="" className='md:w-[60px] md:h-[60px] w-[30px] h-[30px]' /><div></div>
              <img src={tailwind} alt="" className='md:w-[60px] md:h-[60px] w-[30px] h-[30px]' /><div></div>
              <img src={node} alt="" className='md:w-[60px] md:h-[60px] w-[30px] h-[30px]' /><div></div>
              <img src={mys} alt="" className='md:w-[60px] md:h-[60px] w-[30px] h-[30px]' /><div></div>
              <img src={mongo} alt="" className='md:w-[60px] md:h-[60px] w-[30px] h-[30px]' /><div></div>
              <img src={c} alt="" className='md:w-[60px] md:h-[60px] w-[30px] h-[30px]' /><div></div>
              <img src={cimg} alt="" className='md:w-[60px] md:h-[60px] w-[30px] h-[30px]' /><div></div>
              <img src={java} alt="" className='md:w-[60px] md:h-[60px] w-[30px] h-[30px]' /><div></div>
              <img src={py} alt="" className='md:w-[60px] md:h-[60px] w-[30px] h-[30px]' /><div></div>
              <img src={git} alt="" className='md:w-[60px] md:h-[60px] w-[30px] h-[30px]' />
            </div>
          </div>
        </div>
        <div className='md:w-[50%] w-full h-full z-12  flex items-center  text-white font-semibold gap-[50px]  flex-col p-[20px] md:p-[30px]'>
          <span className='text-[30px]'>Achivements & Cirtification</span>
          <div className='flex flex-col gap-3 text-red-400'>
            <a href=""> Cirtification Link</a>
            <a href=""> Cirtification Link</a>
            <a href=""> Cirtification Link</a>
            <a href=""> Cirtification Link</a>
            <a href=""> Cirtification Link</a>
          </div>
          
        </div>
      </div>

    </div>
  </>
  )
}

export default Skills
