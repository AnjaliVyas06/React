import { useState } from 'react'
import './App.css'

function App(){
  const [color, setColor] = useState("#6F4E37")
  return(
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className = "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className = "flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
            onClick = {() => setColor("#6F4E37")}
             className = "outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#6F4E37"}}>
              Coffee
            </button>
            <button
            onClick = {() => setColor("#D2B48C")}
             className = "outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#D2B48C"}}>
            Latte
            </button>
            <button
            onClick = {() => setColor("#3E2723")}
             className = "outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#3E2723"}}>
            Espresso
            </button>
             <button
             onClick = {() => setColor("#C19A6B")}
             className = "outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "#C19A6B"}}>
            Cappuccino
            </button>
          </div>
      </div>
    </div>
  )
}

export default App
