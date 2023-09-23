import { useContext } from "react";
import { Data } from "../App";
import { Data1 } from "../App";
// import React from 'react'

const ComponentA = () => {
    const name = useContext(Data)
    const age = useContext(Data1)
  return (
    <div>
        <h1>My name is {name} & Im {age} years old</h1>
    </div>
  )
}

export default ComponentA