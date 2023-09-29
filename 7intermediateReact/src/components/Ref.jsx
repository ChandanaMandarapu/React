// import React from 'react'
import { useRef } from "react"
import useCustomHooks from "./useCustomHooks"
const Ref = () => {
    const inputElement = useRef(null)

  const focusInput = () =>{
    console.log(inputElement)
    inputElement.current.focus()
    inputElement.current.value = "chandana"
    inputElement.current.style.backgroundColor = "teal"
    inputElement.current.style.color = "white"
    inputElement.current.style.padding = "6px"
}
const [data] = useCustomHooks("https://jsonplaceholder.typicode.com.todos")
  return (
    <div>
        <input type="text" ref={inputElement}/>
      <button onClick={() => focusInput()}>Focus & Write chandana</button>
      {data&&data.map((item) => {
        return <p key = {item.id}>{item.title}</p>
      })}
    </div>
  )
}

export default Ref