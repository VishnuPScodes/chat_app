import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import SignIn from './components/SignIn'
import Chat from './components/Chat'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from './firebase'
function App() {
  const [count, setCount] = useState(0)
  const [user]=useAuthState(auth);
  console.log(user)
  return (
    <div className="App">
      {user ? <Chat/>: <SignIn/>}
    
    
    </div>
  )
}

export default App
