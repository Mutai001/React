import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const HelloWorld = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)
  return (
   <div className='form'>
      <form action="">
        <h2>Register here</h2>
        <label htmlFor="name">Name:</label> 
        <input type="text" name="name" id="name" required /> <br />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" required/> <br />
        <label htmlFor="password">Password:</label> 
        <input type="password" name="password" id="password" required/> <br />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input type="password" name="confirmPassword" id="confirmPassword" required/> <br />
        <div className="btns">
        <button type="submit" id="submit">Submit</button>
        <button type="reset">Reset</button>
        </div>
      </form>
    </div>
    
  )
}

export default App
