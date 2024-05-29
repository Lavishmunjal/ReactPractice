import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './components/Addtodo.jsx'
import Todos from './components/Todos.jsx'
// import { Provider } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Hello ji Kya hal h chliya redux chlu krta h </h1>
    <Addtodo/>
    <Todos/>

    </>
  )
}

export default App
