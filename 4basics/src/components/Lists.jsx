// import React from 'react'

// import { useImperativeHandle } from "react";

const Lists = () => {
    // Example 1
    const numbers = [1, 2, 3, 4, 5];
    const nums = [23,56,77,43]
    // Exmple 2
    const userInfo = [
        {
            username: "chandana",
            email: "chandu@gmail.com",
            location: "India"
        },
        {
            username: "chandra",
            email: "chandra@gmail.com",
            location: "UK"
        },
        {
            username: "chandu",
            email: "chandu23@gmail.com",
            location: "India"
        },
        {
          username: "pallavi",
          email: "pallavi@gmail.com",
          location: "Paris"
        }
    ]
    return (
      <>
        {numbers.map((number) => (
          <ul key={Math.random() * 10}>
            <li>{number}</li>
          </ul>
        ))}
        {userInfo.map(user => (
            <ul key = {Math.random() * 10}>
                <li>{user.username}</li>
                <li>{user.email}</li>
                <li>{user.location}</li>
            </ul>
        ))}
        {nums.map(num => (
          <ul key = {Math.random() *10}>
            <li>{num}</li>
            </ul>
        ))}
      </>
    );
  };
  
  export default Lists;
  