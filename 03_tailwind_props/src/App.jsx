// import { useState } from 'react'

import './App.css'
import Card from './components/Card'


function App() {
  // const [count, setCount] = useState(0)

  // const myObject = {
  //   name: "Faizaan",
  //   address: "Pune",
  //   age: 21
  // }

  // const newArr = [1, 2, 3, 4, 5]

  return (
    <>
    <h1 className="text-white bg-red-600 p-4 rounded-xl font-bold">Tailwind Test</h1>

    {/* <Card subject="React" myArr={myObject} someArr={newArr} oneObj = {{id : 1001, name : "Faizaan"}}/> */}

    <Card username = {"Faizaan"} />

    <Card username = "Harry" buttonText = "Click Me" />

    {/* <div className="card card-compact bg-base-100 w-96 shadow-xl">
    <figure className="px-4 pt-4">
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
        className="rounded-xl" />
    </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl">Shoes!</h2>
        <p className='text-base'>If a dog chews shoes whose shoes does he choose?f a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn btn-primary text-base mt-4">Buy Now</button>
        </div>
      </div>
    </div> */}

    </>
  )
}

export default App
