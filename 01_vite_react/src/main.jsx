import React from 'react'
// import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import Test from './Test.jsx'
// import { StrictMode } from 'react'


// Defining a custom MyApp() Function
// function MyApp(){
//   return(
//     <div>
//       <h1>Custom App </h1>
//     </div>
//   )
// }

// createRoot(document.getElementById('root')).render(
//     MyApp()  // We can write in this way too coz after all it is a function
// )

// const anotherUser = "Faizaan Khan"

const anotherElement = (
  <a href='https://google.com' target='_blank'>Visit Google</a>
)

// Element defined in React Syntax and used React.createElement() which is injected by Babel and used by React.
// React syntax of an element to be rendered
const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com', 
    target: '_blank'
  },
  'click me to get Google',
  anotherElement  // Evaluated Expression
)

createRoot(document.getElementById('root')).render(
  // anotherElement
  reactElement
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <>
//   {reactElement}   
//   <App/>
//   MyApp()
//   </>
// )

// Refer to : https://github.com/facebook/react/blob/main/packages/react/src/jsx/ReactJSXElement.js


/*
Let’s examine the code in detail.

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<h1>Hello world</h1>);

Before we get started it is essential to understand that React relies on two things to render: what content to render and where to place the content.

With that in mind, let’s look at the first line:

const container = document.getElementById('app')

This line:

Uses the document object which represents our web page.
Uses the getElementById() method of document to get the Element object representing the HTML element with the passed in id (app).
Stores the element in container.
In the next line:

const root = createRoot(container)

we use createRoot() from the react-dom/client library, which creates a React root from container and stores it in root. root can be used to render a JSX expression. This is the “where to place the content” part of React rendering.

Finally, the last line:

root.render(<h1>Hello world</h1>)

uses the render() method of root to render the content passed in as an argument. Here we pass an <h1> element, which displays Hello world. This is the “what content to render” part of React rendering.
*/

/*
React: The Virtual DOM
Learn how React’s virtual DOM prevents wasteful DOM manipulation.

The Problem
DOM manipulation is the heart of the modern, interactive web. Unfortunately, it is also a lot slower than most JavaScript operations.

This slowness is made worse by the fact that most JavaScript frameworks update the DOM much more than they have to.

As an example, let’s say that you have a list that contains ten items. You check off the first item. Most JavaScript frameworks would rebuild the entire list. That’s ten times more work than necessary! Only one item changed, but the remaining nine get rebuilt exactly how they were before.

Rebuilding a list is no big deal to a web browser, but modern websites can use huge amounts of DOM manipulation. Inefficient updating has become a serious problem.

To address this problem, the people at React popularized something called the virtual DOM.

The Virtual DOM
Here is a refresher of what happens behind the scenes in The Virtual DOM.

In React, for every DOM object, there is a corresponding “virtual DOM object.” A virtual DOM object is a representation of a DOM object, like a lightweight copy.

A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing’s power to directly change what’s on the screen.

Manipulating the DOM is slow. Manipulating the virtual DOM is much faster because nothing gets drawn onscreen. Think of manipulating the virtual DOM as editing a blueprint, as opposed to moving rooms in an actual house.

How It Helps
When you render a JSX element, every single virtual DOM object gets updated.

This sounds incredibly inefficient, but the cost is insignificant because the virtual DOM can update so quickly.

Once the virtual DOM has been updated, then React compares the virtual DOM with a virtual DOM snapshot that was taken right before the update.

By comparing the new virtual DOM with a pre-update version, React figures out exactly which virtual DOM objects have changed. This process is called “diffing.”

Once React knows which virtual DOM objects have changed, then React updates those objects, and only those objects, on the real DOM. In our example from earlier, React would be smart enough to rebuild your one checked-off list-item and leave the rest of your list alone.

This makes a big difference! React can update only the necessary parts of the DOM. React’s reputation for performance comes largely from this innovation.

In summary, here’s what happens when you try to update the DOM in React:

The entire virtual DOM gets updated.
The virtual DOM gets compared to what it looked like before you updated it. React figures out which objects have changed.
The changed objects, and the changed objects only, get updated on the real DOM.
Changes on the real DOM cause the screen to change.
*/