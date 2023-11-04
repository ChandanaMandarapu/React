
import { useState } from 'react'
import './App.css'
import Box from './Box'
import Boxes from './Boxes'
// import One from './One'
// import Two from './Two'
function App(props) {
  const [squares, setSquares] = useState(Box)
  
  const styles = {
    backgroundColor : props.darkMode  ? "#222" : "#ccc"
  }
  const squareElements = squares.map(square => (
    <Box key={square.id} on={square.on} />
))
    return (
        <main>
          <Boxes />
            {squareElements}
        </main>
    )
}

export default App
