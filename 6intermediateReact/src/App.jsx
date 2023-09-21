import { useEffect,useState } from "react"
import Effect from "./components/Effect"
import One from "./components/One"
function App() {
  const name = "Chandana Mandarapu"
  const [value,setValue] = useState(0)

  useEffect(() => {
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
    </>
  )
}

export default App
