import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/navbar'
import Header from './components/header/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div dir='rtl'>
      <Navbar />
      <Header />
    </div>
  )
}

export default App
