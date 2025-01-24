import { useState } from 'react'
import './App.css'

function App() {

  // let counter = 15

  const [counter, setCounter] = useState(0)

  const addValue = () => {
    console.log("Clicked : ", counter)
    // console.log("Value Added : ", Math.random());
    // counter = counter + 1;

    if (counter < 20) {
      setCounter(counter + 1);
      console.log(counter);
    } else {
      setCounter(counter)
    } 
    
    // React Interview Question
    // If i called setCounter(counter + 1) five times what will be the value of counter ? How will it behave ? 
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // setCounter((prevCounter) => {return prevCounter + 1});
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
  }

  const removeValue = () => {
    if (counter <= 0) {
      setCounter(counter)
    } else {
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h2>React Counter App</h2>
      <h3>Counter Value : {counter}</h3>
      <button onClick={addValue}>Increase Value {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrease Value {counter}</button>
      {/* <p>Footer : {counter}</p> */}
    </>
  )
}

export default App
