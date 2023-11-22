// import React from 'react'
const Content = () => {
    const handleNameChange = () => {
        const names = ["krishna","ram","parvati"]
        const int = Math.floor(Math.random() * 3)
        return names[int]
      }
  return (
    <main>
        Hello {handleNameChange}
    </main>
  )
}

export default Content