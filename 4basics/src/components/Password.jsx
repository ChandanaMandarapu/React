// import React from 'react'
// using if else in form of props for conditional rendering
const ValidPassword = () => <h1>Valid Password</h1>
const InvalidPassword = () => <h1>InValid Password</h1>


const Password = ({isValid}) => {
    if({isValid}) {
      return <ValidPassword/>
    }
    return <InvalidPassword/>
    }

export default Password