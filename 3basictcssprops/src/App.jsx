import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  let myObj = {
    username: "chandana",
    age: 19
  }
  let newArr = [1,2,3]
  return (
    <>
      <h1 className='bg-teal-400 text-black p-4 rounded-lg mb-4'>TailwindCss</h1>
      <Card username="chandana" btnText = "click here"/>
      <Card username= "pallavi"/>
    </>
  )
}

export default App
