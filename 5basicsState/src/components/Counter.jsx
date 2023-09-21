// states changing in UI via counter project and updating string values in state

import { useState } from "react"

const Counter = () => {
const [count,setCount] = useState(1)
const [username,setUsername] = useState("Unknown")
const incrementHandler = () =>{
  setCount (count + 1)
}
const decrementHandler = () =>{
  setCount (count - 1)
}
const changeName = () => {
  setUsername ("chandana")
} 
return <>
  <h1>{count}</h1>
  <button onClick={incrementHandler}>+</button>
  <button onClick={decrementHandler}>-</button>
  <h1>{username}</h1>
  <button onClick={changeName}>change name</button>
  </>
}
export default Counter