import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(8)

  // let counter = 8

  const addValue = () =>{
    // console.log("clicked",counter)
    if(counter <= 19){
      // counter = counter + 1
      setCounter(counter + 1)
    } else{
      setCounter(counter)
    }
    
  }
  const removeValue = () => {
    setCounter(counter - 1)
    if(counter ==0 ){
      setCounter(counter)
    }
  }
  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>
        Increase value {counter}</button>
      <br />
      <button
      onClick={removeValue}>
        Decrease value {counter}</button>
    </>
  )
}

export default App
