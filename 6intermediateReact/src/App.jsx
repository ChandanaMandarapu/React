import { useEffect,useState } from "react"
import Effect from "./components/Effect"
import One from "./components/One"
import Context from "./components/Context"
import Three from "./components/Three"
function App() {
  const name = "Chandana Mandarapu"
  const [value,setValue] = useState(0)

  useEffect(() => {
    // when the component renders for the first time it executes the code inside the function
    console.log("Hello")
    // side effect
    document.title = `Increment(${value})`
    // dependency list
  },[value])
  return (
    
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue(value+1)}>Click Me</button>
      <Effect />
      <One name = {name}/>
      <Context />
      <Three />
    </>
  )
}

export default App
