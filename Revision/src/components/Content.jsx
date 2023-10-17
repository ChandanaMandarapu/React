// import React from 'react'
import {useState} from 'react'
const Content = () => {
  const [name ,setName] = useState('abhi');
  const [count,setCount] = useState(0)
    const handleNameChange = () => {
        const names= ["hima","john","kuldeep"]
        const int = Math.floor(Math.random() * 3);
        setName(names[int])
      }
      const handleClick = () => {
        console.log(count)
        setCount(count + 1)
      }
      const handleClick2 = () => {
        console.log(`${name} was clicked`)
      }
      const handleClick3 = (e) => {
        console.log(e.target)
      }
  return (
    <main>
      <p onDoubleClick = {handleClick}>
        Hello {name}
      </p>
        <p>Hello {handleNameChange}</p>
        <button onClick = {handleNameChange}>Change Name</button> 
        <button onClick = {handleClick}>Click It</button>
        <button onClick= {(e) => handleClick3(e)}>ClickIt</button>
    </main>
  )
}

export default Content