// import React from 'react'

const Event = () => {
    const handleClick = (a,b) => {
        console.log(a+b)
    }
    return <button onClick={() => handleClick(2,3)}>Click</button>
  }

  
export default Event
