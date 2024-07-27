import { useState } from 'react'
import Navbar from "./components/navbar/Navbar"
import Header from './components/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Header/>
    </>
  )
}

export default App
