import Hello from "./components/Basic"
import Lists from "./components/Lists"
import Props from "./components/Props"
function App() {
  const username = "Chandana Mandarapu"

  return (
    <>
    <Hello/>
    <h1>Hello! {username}</h1>
    <h2>test Heading</h2>
    <Lists/>
    <Props 
    img= ""
    name ="chandu"
    age = {19}
    hobbies = {["coding","reading","sleeping"]}
    >
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta placeat odio quidem repellendus impedit perferendis repudiandae est obcaecati amet perspiciatis! Sapiente, eius ullam!</p>
    </Props>

   </>
  )
}

export default App