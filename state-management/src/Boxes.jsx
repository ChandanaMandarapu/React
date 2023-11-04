// import React from 'react'
import Box from "./Box"
const Boxes = (props) => {
    const styles = {
        backgroundColor: props.on ? "#222222" : "none"
    }
    
  return (
    <div style={styles} className="box"></div>
  )
}

export default Boxes