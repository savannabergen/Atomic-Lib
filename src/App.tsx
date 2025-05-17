import { useState } from 'react'
import './index.css'
import { Button } from './components/atoms/button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button>Clickme</Button>
    </>
  )
}

export default App
