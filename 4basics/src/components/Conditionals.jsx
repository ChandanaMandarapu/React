// import React from 'react'

const Conditionals = ({isValid}) => {
    const age = () => <h1>age is 19</h1>
    const invalidAge = () => <h1>Invalid age</h1>
    if(isValid == 19) {
        return age
    }
    return invalidAge
}

// export default Conditionals

// const Conditionals = () => {
//     const age = () => <h1>age is 19</h1>
//     const invalidAge = () => <h1>Invalid age</h1>

//     const Conditionals = ({isValid}) => {
//         return isValid ? <age />: <invalidAge/ >
//     }
    
// }

export default Conditionals