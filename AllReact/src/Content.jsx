// import React from 'react'
import './App.css'
import { useState } from "react"
const Content = () => {
    const [name,setName] = useState("chandu")
    const handleNameChange = () => {
        const names = ["krishna","ram","parvati"]
        const int = Math.floor(Math.random() * 3)
        setName[names[int]]
      }
      const handleClick =() => {
        console.log("clicked")
      }
      const handleClick2 =() => {
        console.log(`${name} was clicked`)
      }
      const handleClick3 =(e) => {
        console.log(e)
      }
  return (
    <main>
        <p onClick={handleNameChange}>Hello {name}</p>
        <button onClick={handleClick}>Click</button>
        <button onClick={() => handleClick2('chandana')}>click it</button>
        <button onClick={(e) => handleClick3(e)}>click</button>
    </main>
  )
}

export default Content