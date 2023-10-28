// import React from 'react'
const Props = ({img,name,hobbies,children}) => {
  return (
    <div>
        <img src="{img}" alt="" />
        <h1>Name : {name}</h1>
        <h3>Hobbies : {hobbies}</h3>
        {children}
    </div>
  )
}

export default Props