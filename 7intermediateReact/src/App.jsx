import { createContext } from "react"
import ComponentA from "./components/ComponentA"
import Ref from "./components/Ref"
export const Data = createContext()
export const Data1 = createContext()

function App() {
  const name = "Pallavi Verma"
  const age = 19

  console.log("Name:", name);
  console.log("Age:", age);
  
  return (
    <>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>
      <Ref />
    </>
  )
}

export default App
