import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import SignIn from './components/SignIn'
import Chat from './components/Chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <SignIn/>
     <Chat/>
    </div>
  )
}

export default App
