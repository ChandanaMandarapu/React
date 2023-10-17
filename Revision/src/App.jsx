import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer"
function App() {
  
  return (
    <div className = "App">
    {/* <h1>My name is {name}</h1> */}
    {/* <p>{9 === 8}</p> boolean value is not rendered */}
    {/* {{a:"2",b:"c"}} here objects are also not rendered*/} 
    <Header />
    <Content />
    <Footer />
    </div>
  )
}

export default App
