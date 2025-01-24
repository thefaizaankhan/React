import Test from './Test.jsx'

function App() {
  const username = "Hello everyone" 
  return (
    <>
    <h3>{username} React is Fun</h3>
    <p>Lorem ipsum dolor sit amet.</p>
    <Test />
    </>
  )
}

export default App

/*
Difference between Expression and Evaluated Expression:

const username = "Hello everyone" is an expression that assigns a string value to the variable username.

The evaluated expression is the result of computing the expression within JSX: {username} evaluates to the string "Hello everyone" when rendered as part of the JSX, producing "Hello everyone React is Fun".
*/


