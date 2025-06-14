import React from 'react'
import pimage from '../assets/Dp.png'
import Nav from '../components/Nav'
import { useNavigate } from 'react-router-dom'

function Home() {
    let navigate = useNavigate()
    return (
        <div className={`w-full h-screen bg-[url(./assets/bg-image.jpeg)] flex flex-col bg-cover font-serif bg-no-repeat`}>
            <Nav />
            <div className='w-[100%] h-[100%] flex flex-col md:flex-row gap-5 md:m-0 mt-[100px]'>
                <div className=' w-[100%] lg:w-[50%] text-[#e5e6e1] flex justify-center mt-[60px] lg:mb-[150px] gap-[120px] items-center flex-col'>
                    <div className='flex flex-col ml-1'>
                        <span>Hello</span>
                        <span className='md:text-[70px] text-[40px]  font-bold text-white'>I'm <span className='text-red-600'>Suraj Kumar</span></span>
                        <span className='text-[25px] font-light'>
                            Frontend and Backend Web Developer
                        </span>
                    </div>
                    <button className='w-[100px] border-1 p-[10px] border-red-400 hover:bg-red-400 hover:text-white hidden md:flex text-red-400 cursor-pointer ' onClick={() => navigate('/contact')}>
                        HIRE ME
                    </button>

                </div>
                <div className='md:w-[50%] flex flex-col justify-center items-center gap-[20px] '>
                    <img src={pimage} alt="" className='md:w-[500px] md:h-[500px] w-[150px] h-150px] opacity-[0.7] rounded-b-full text-white' />

                    <a href='https://www.linkedin.com/in/suraj-kumar-kanu' className='w-[100px] border-1 p-[10px] border-red-400 hover:bg-red-400 hover:text-white md:hidden flex justify-center items-center text-red-400 cursor-pointer ' >
                        HIRE ME
                    </a>
                </div>

            </div>

        </div>
    )
}

export default Home
