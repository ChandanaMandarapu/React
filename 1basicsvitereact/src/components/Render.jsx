// import React from 'react'

const Render = () => {
    const ValidPassword = () => <h1>ValidPassword</h1>
    const InvalidPassword = () => <h1>InvalidPassword</h1>
    const Password = (isValid) => {
    //     if(isValid){
    //         return <ValidPassword />
    //     }
    //     return <InvalidPassword/>
    // }
    
    const items = [ "choclates","cofee","tea","pizza"]
  return (
    <div>
        <Password isValid = {true}/>
        isValid ? <ValidPassword /> : <InvalidPassword />
        <h1 style={{color: "red",backgroundColor : "white"}}>Cart</h1>
        {items.length > 0 && <h2>You have {items.length} items in ur cart</h2>} 
        <ul>
          <h4>Products</h4>
          {items.map(item => (
            <li key = {Math.random()*10}>{item}</li>
          ))}
        </ul>
    </div>
  )
}

export default Render