import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Restaurant from './components/Restaurant'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Restaurant/>
    </>
  )
}

export default App
