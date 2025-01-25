Here we will learn about :-
  1. Injecting Tailwind CSS in the React Project
  2. Passing props(properties) in a component 
  3. Injecting Daisy UI in the project
  4. Virtual DOM, React Fibre

# Prop

"prop" is short for "property" and refers to a mechanism for passing data from a parent component to a child component. 

React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.

function Card(props) {
  // console.log("props", props)
  return (
    <>
      ......
    </>
  )
}

`JS Concept used - Object Destructuring, Function Basics (in case of passing props as default props)`

# PropTypes

The warning 'username' is missing in props validation is caused because you haven't yet defined prop type validation in your Card component.

In React, PropTypes can be used to specify the expected types of props a component should receive.

PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype. This makes sure that we don’t receive an error at the very end of our app by the console which might not be easy to deal with.

We can use PropTypes to validate any data we are receiving from props. But before using it we will have to import it as always in our app:

> npm install prop-types

- Example Component :

import PropTypes from "prop-types";

function Card(props) {
  return (
    <>
      .........
    </>
  )
};

Card.propTypes = {
  // key is the name of the prop and
  // value is the PropType
}

export default Card;

# Refer to React Fiber Documentation (Very Important) : https://github.com/acdlite/react-fiber-architecture 

# What is Virtual DOM ?
