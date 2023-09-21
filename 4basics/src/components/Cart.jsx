// import React from 'react'
// using && operator in conditional rendering
const Cart = ( ) => {
    const items = ["phone","earphones","SSD"]
  
    return <>
    <h1>Cart 🛒</h1>
    {items.length > 0 && <h1>You have {items.length} items in your cart</h1>}
    <ul>
      <h4>⬇️ Products</h4>
  
      {items.map(item => (
        <li key = {Math.random}>{item}</li>
      ))}
    </ul>
    </>
  }

export default Cart