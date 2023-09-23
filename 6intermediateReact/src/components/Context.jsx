// import React from 'react'
import { createContext } from "react"
import Three from "./Three"
// instance of createcontext
export const Data = createContext()
const Context = () => {
    const name = "Pallavi verma"
  return (
    // wrap our component into provider component
    <div>
        <Data Provider value ={name}>
        <Three />
      </Data>
    </div>
  )
}

export default Context