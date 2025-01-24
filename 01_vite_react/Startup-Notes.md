npx - Node Package Executer

npm - Node Package Manager

SWC - Speedy Web Compiler, it is a super-fast JavaScript/TypeScript Compiler written in Rust. It is used as a replacement for Babel in React projects to significantly speed up build and development times.

# Follow and Learn from React Documentation.

React Library contains React-DOM Package/Library (Web Development) and React-Native Framework (Mobile Development).

Earlier, React Project was set-up as :-
  > npx create-react-app 01_basic_react

  > npm run start

  - It is bulky and heavy utility, takes a longer time to build.

  # At the starting first go through with package.json file and its contents. (Entry point)

  - Inside package.json :-
    - "web-vitals" -> accounts for performance of the application & tracks the application
    - "scripts" : "start" -> for running project in development environment
    - "scripts" : "build" -> for running project in production environment
    - "scripts" : "test" -> for test cases
    - "scripts" : "eject" -> for ejecting our project from react at the point so that other framework/library can be injected

  > npm run start

  > npm run build (a build folder will be generated which is served in production)

  # Your First React Project is started!

Nowadays, To begin with first react project using Vite :- 
  > npm create vite@latest
    √ Project name: ... 01_vite_react
    √ Select a framework: » React
    √ Select a variant: » JavaScript
  
  - Project Folder will be installed (named 01_vite_react)
    Now run :
      cd 01_vite_react
      npm install
      npm run dev

  > cd 01_vite_react

  - Here we can see node_modules folder is missing, so to install node_modules folder execute command npm install.

  > npm install

  > npm run dev

  # Your First React Project is started!

We have to call JavaScript in the HTML so that the manipulation can be done via JS. 

Going deep inside and knowing File Structure of 01basicreact :-
  - Inside public > index.html - it is the main page which is loaded > as we analyze the code inside index.html there is no js injected here. no script tag. 
  - Inside src > index.js >
    - File Name can be changed (file.js or hello.js or any) here index.js is default in react. 
    - import React from 'react' - React is core foundational libarary to manipulate DOM in web.
    - import ReactDOM from 'react-dom/client' - React DOM is the implementation of React on Web (same as react-native is implementation of React on mobile apps)
    - Since, there is no script tag so how the js is injecting ? it is done by "react-scripts". 

Going deep inside and knowing File Structure of 01_vite_react :-
  - 01_vite_react > index.html - we can see script tag is added in the html. So, from here the JavaScript is injecting.
  - main.jsx - Similar to `index.js` in Create React App, but uses JSX syntax directly. (main.jsx is simply light weight)
  - - **Fragments (`<>...</>`)** — Allow returning multiple elements without an extra wrapper.
  - **Naming Conventions**
    - In Vite File Name should start with caps and have extension .jsx (JavaScript XML)
    - Component function names must start with an uppercase letter.
    - Component tags should match the function name, e.g., `<App />`.
    - Import and Export statements follow PascalCase for consistency, e.g., `import App from './App.jsx';`.


