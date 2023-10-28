// import React from 'react'

const Lists = () => {
    const numbers = [1,2,3,4,5]
    const userInfo = [
        {
            username: "chandna",
            email : "chanda@gmail.com",
            location: "India"
        },
        {
            username: "chandna",
            email : "chanda@gmail.com",
            location: "India"
        },
        {
            username: "chandna",
            email : "chanda@gmail.com",
            location: "India"
        }
    ]
    
  return (
    <div>
        {numbers.map(number => (
            <ul key ={Math.random()*10}>
                <li>{number}</li>
            </ul>
        ))}
        {userInfo.map(user=> (
            <ul key = {Math.random()*10}>
                <li>{user.username}</li>
                <li>{user.email}</li>
                <li>{user.location}</li>
            </ul>
        ))}
    </div>
  )
}

export default Lists