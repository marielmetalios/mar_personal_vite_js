import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://github.com/marielmetalios" target="_blank">
          <img src='./src/assets/images/Mariel_Headshot.jpg' className="logo" alt="Mariel Headshot" />
        </a>
        {/* <a href="https://react.dev" target="_blank">
          <img src='./src/assets/images/IMG_5472.JPG' className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Hey there</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Portfolio Placeholder
        </p>
      </div>
      <p className="read-the-docs">
        Thank you for visiting!
      </p>
    </>
  )
}

export default App
