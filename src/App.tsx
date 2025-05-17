import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-0"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
      </div>
    </>
  )
}

export default App
