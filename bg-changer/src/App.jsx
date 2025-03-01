import { useState } from "react"

function App() {

  const [color,setColor]=useState("red")
  return (
    <>
      <div className="bg-red-600 h-screen "
        style={{backgroundColor:color}}
      >
        <div className=" bg-white h-13 fixed bottom-20 left-60 flex justify-center content-center p-1 gap-3 ">
          <button className="p-2 w-20 cursor-pointer bg-red-400 rounded-xl"
            onClick={()=>setColor("red")}
          >
            Red
          </button>
          <button className="p-2 w-20 cursor-pointer bg-yellow-400 rounded-xl"
            onClick={()=>setColor("yellow")}
          >
            Yellow
          </button>
          <button className="p-2 w-20 cursor-pointer bg-pink-400 rounded-xl"
            onClick={()=>setColor("pink")}
          >
            white
          </button>
          <button className="p-2 w-20 cursor-pointer bg-blue-400 rounded-xl"
            onClick={()=>setColor("blue")}
          >
            Blue
          </button>
          <button className="p-2 w-20 cursor-pointer bg-green-400 rounded-xl"
            onClick={()=>setColor("green")}
          >
            Green
          </button>
          <button className="p-2  w-20 cursor-pointer bg-fuchsia-400 rounded-xl text-white"
            onClick={()=>setColor("fuchsia")}
          >
            Fuchsia
          </button>
          <button className="p-2  w-20 cursor-pointer bg-gray-400 rounded-xl text-white"
            onClick={()=>setColor("gray")}
          >
            Gray
          </button>
          <button className="p-2  w-20 cursor-pointer bg-orange-400 rounded-xl text-white"
            onClick={()=>setColor("orange")}
          >
            Orange
          </button>
          <button className="p-2  w-20 cursor-pointer bg-black rounded-xl text-white"
            onClick={()=>setColor("black")}
          >
            Black
          </button>
          <button className="p-2  w-20 cursor-pointer bg-purple-400 rounded-xl text-white"
            onClick={()=>setColor("purple")}
          >
            Purple
          </button>
        </div>
      </div>
    </>
  )
}

export default App
