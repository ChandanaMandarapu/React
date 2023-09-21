// import React from 'react'
import Three from "./Three"
const Two = ({name}) => {
    console.log(name)
  return (
    <div>
        Two
        <Three name = {name} />
    </div>
  )
}

export default Two