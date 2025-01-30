import { useState } from "react"

function App() {

  const [color, setColor] = useState("black")

  const textColor = color === "gray" ? "black" : "white";

  return (
    <>
    <div className="w-full h-screen duration-200 font-bold text-white text-5xl flex items-center justify-center" style={{backgroundColor: color, color: textColor}}>React Background Color Changer    
    </div>

    <div className="fixed flex flex-wrap justify-center bottom-12 -inset-x-0 px-3">
      <div className=" flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-full">

        <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white font-medium shadow-lg" style={{backgroundColor: "Red"}}>Red</button>

        <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white font-medium shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>

        <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white font-medium shadow-lg" style={{backgroundColor: "green"}}>Green</button>

        <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white font-medium shadow-lg" style={{backgroundColor: "orange"}}>Orange</button>

        <button onClick={() => setColor("indigo")} className="outline-none px-4 py-1 rounded-full text-white font-medium shadow-lg" style={{backgroundColor: "indigo"}}>Indigo</button>

        <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white font-medium shadow-lg" style={{backgroundColor: "black"}}>Black</button>

        <button onClick={() => setColor("olive")} className="outline-none px-4 py-1 rounded-full text-white font-medium shadow-lg" style={{backgroundColor: "olive"}}>Olive</button>

        <button onClick={() => setColor("gray")} className="outline-none px-4 py-1 rounded-full text-black font-medium shadow-lg" style={{backgroundColor: "gray"}}>Gray</button>
        
      </div>
    </div>
    </>
  )
}

export default App

// onClick expects a function that's why we pass a callback function which is calling setColor function.

// onClick = {() => {setColor("red")}} -> passing a function inside a function. But why can't we write onClick = {setColor("red")} ?

// Declare a textColor variable then applying the conditional logic.
