import React, { useState } from 'react'
import Nav from '../components/Nav'

import axios from 'axios';

function Contact() {

  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [message, setMessage] = useState("")
 

  
let  template = "template_msl84ls";
 let service = "service_4z6hxje";
 let publickey = "ihvghfgk8d_f2JUIf";

  const handleSend = async (e) => {
    
    e.preventDefault()

    const data = {
      service_id: service,
      template_id: template,
      user_id: publickey,
      template_params:{
        name: name,
        email: email,
        message: message,
        
      }
    }
    try {
      let result = await axios.post('https://api.emailjs.com/api/v1.0/email/send'
, data)
      console.log("Message sent successfully")
      setName('')
      setEmail('')
      setMessage('')
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }
  return (<>
    <Nav />
    <div className={`w-full h-screen bg-[url(./assets/bg-image.jpeg)] flex justify-center items-center flex-col bg-cover font-serif bg-no-repeat`}>
      <div className='md:w-[450px] flex flex-col justify-start items-center h-[500px] p-[10px] bg-gray-100 gap-[20px] rounded-lg'>
        <span className='text-[30px] font-semibold text-red-400 '>Contact Me</span>
        <form action="" className='w-full h-full flex flex-col justify-center items-center overflow-auto gap-[20px] p-[20px]'>
          <div className='flex flex-col gap-2 w-full'>
            <lable className='text-[20px] '>Enter Name :</lable>
            <input type=" text" className='border-b-1 w-full h-[40px] p-[10px] text-white bg-gray-600 text-[20px] rounded-lg border-l-1' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />

          </div>
          <div className='flex flex-col gap-2 w-full'>
            <lable className='text-[20px] '>Enter Email :</lable>
            <input type="email " className='border-b-1 w-full h-[40px] p-[10px] text-white bg-gray-600 text-[20px] rounded-lg border-l-1' placeholder='abc123@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />

          </div>
          <div className='flex flex-col gap-2 w-full'>
            <lable className='text-[20px] '>Enter Message :</lable>
            <textarea type='message' className='border-b-1 w-full h-[70px] p-[10px] text-[20px] rounded-lg border-l-1  text-white bg-gray-600' value={message} onChange={(e) => setMessage(e.target.value)} />

          </div>
          <button className='w-[100px] p-[10px] text-[20px] bg-red-400 text-white rounded-lg hover:bg-white hover:text-red-400 hover:border-1 border-red-400 cursor-pointer' onClick={(e) => handleSend(e)}>Send</button>
        </form>
      </div>
    </div>
  </>


  )
}

export default Contact
