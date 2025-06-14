import React from 'react'
import Nav from '../components/Nav'
import Card from '../components/Card'
import mimg from '../assets/music.png'
import { FaGithub } from "react-icons/fa";
import { VscLinkExternal } from "react-icons/vsc";

function Project() {
    return (<>
         <Nav/>
        <div className = {`w-full h-screen bg-[url(./assets/bg-image.jpeg)] flex-col justify-center flex bg-cover pt-[100px] gap-4 text-white items-center font-serif bg-no-repeat`
} >
            <span className='text-[50px] text-red-400'> Projects</span>
          <div className='w-[70%] h-[500px] border-1 border-gray-500 gap-4 flex flex-col rounded-lg p-[10px] overflow-auto'>
                <div className='w-full flex h-[360px] bg-gray-700 p-[5px] gap-[100px] rounded-lg'>
                    <div className='relative'>
                        <div className='absolute right-4 bottom-0 w-[70px] h-[50px] flex md:hidden justify-between items-center z-2'>
                            <a href="https://github.com/surajjj07/React-Project/tree/main/01-Music_App"><FaGithub className='text-[30px]' /></a>
                            <a href="https://suraj-music-app.netlify.app/"><VscLinkExternal className='text-[30px]' /></a>

                        </div>
                        <Card image={ mimg } pName={"Music App"} />
                    </div>
                    <div className='md:flex hidden flex-col gap-4 text-[20px] overflow-auto'>
                        <span className='text-yellow-400'>Description : <span className='text-[18px] text-white'> This is a responsive music streaming web app built using React and Tailwind CSS. It features a clean, modern UI where users can search, play, and manage music seamlessly across devices. The app focuses on smooth performance, interactive design, and a great user experience.</span></span>
                        <span className='text-yellow-400'> Deployment link :  <a href="https://suraj-music-app.netlify.app/" className='text-red-400'> Click here to visit website</a></span>
                        <span className='text-yellow-400'>Github Link : <a href="https://github.com/surajjj07/React-Project/tree/main/01-Music_App" className='text-red-400'> Click here to visit Github repo</a></span>
                        <span className='flex flex-col text-yellow-400'> Used technology :<span className='md:flex hidden flex-wrap gap-2 w-[400px] h-[50px] pt-[20px] text-[18px]'>
                            <span className='text-white'>HTML</span>,
                            <span className='text-white'>tailwind CSS</span>,
                            <span className='text-white'>React</span>,
                            <span className='text-white'>Node js</span>,
                            <span className='text-white'>Express js</span>
                        </span> </span>
                    </div>
             </div>
                <div className='w-full flex h-[360px] bg-gray-700 p-[5px] gap-[100px] rounded-lg'>
                    <div>
                        <Card/>
                    </div>
                    <div className='md:flex hidden flex-col gap-5 text-[20px]'>
                        <span>Description :</span>
                        <span> DEployment link :</span>
                        <span>Github Link :</span>
                        <span> Used technology</span>
                    </div>
             </div>
                <div className='w-full flex h-[360px] bg-gray-700 p-[5px] gap-[100px] rounded-lg'>
                    <div>
                        <Card/>
                    </div>
                    <div className='md:flex hidden flex-col gap-5 text-[20px]'>
                        <span>Description :</span>
                        <span> DEployment link :</span>
                        <span>Github Link :</span>
                        <span> Used technology</span>
                    </div>
             </div>
                <div className='w-full flex h-[360px] bg-gray-700 p-[5px] gap-[100px] rounded-lg'>
                    <div>
                        <Card/>
                    </div>
                    <div className='md:flex hidden flex-col gap-5 text-[20px]'>
                        <span>Description :</span>
                        <span> DEployment link :</span>
                        <span>Github Link :</span>
                        <span> Used technology</span>
                    </div>
             </div>
                <div className='w-full flex h-[360px] bg-gray-700 p-[5px] gap-[100px] rounded-lg'>
                    <div>
                        <Card/>
                    </div>
                    <div className='md:flex hidden flex-col gap-5 text-[20px]'>
                        <span>Description :</span>
                        <span> DEployment link :</span>
                        <span>Github Link :</span>
                        <span> Used technology</span>
                    </div>
             </div>
              
          </div>
        </div>
    </>
  )
}

export default Project
