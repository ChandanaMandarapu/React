import './App.css'

function App() {
  const handleNameChange = () => {
    const names = ["krishna","ram","parvati"]
    const int = Math.floor(Math.random() * 3)
    return names[int]
  }
  return (
    <>
    <div>Hello {handleNameChange}</div>
    <App />
    </>
  )
}

export default App
