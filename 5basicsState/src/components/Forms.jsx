import { useState } from "react"

function Forms() {
    const [username,setUsername] = useState("")

  const handleChange = (event) => {
    setUsername(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You typed: ${username}`)
    setUsername("")
  }
  return (
    <div>
        <h1>Form Demo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value = {username} onChange={handleChange} />
        <button>onSubmit</button>
      </form>
    </div>
  )
}

export default Forms