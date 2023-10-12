// import React from 'react'
import { useState } from "react"
const IntQs = () => {
    const [count,setCount] = useState(0)

    const addValue = ( ) => {
        // count = count+ 1
        // using call back in counter then after completion of a task then only the other call is executed which is the previous state..
        setCount((prevCount) => prevCount + 1)
        setCount((prevCount) => prevCount + 1)
        setCount((prevCount) => prevCount + 1)
        setCount((prevCount) => prevCount + 1)
    }
  return (
    <>
    <button onClick={addValue}>Add value {count}</button>
    </>
  )
}

export default IntQs