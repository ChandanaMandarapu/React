// import React from 'react'
import { Data } from "./Context"
const Three = () => {
  return (
    <div>

      <Data.Consumer>
        {(name) => {
          return <h1>My name is {name}</h1>
        }}
      </Data.Consumer>
    </div>
  )
}

export default Three