import React from 'react'

const Props = ({img,name,hobbies,children}) => {
    // console.log(props)
  return (
    <section>
        <img src={img} alt={name} />
        <h3>Hobbies : {hobbies}</h3>
        {children}
    </section>
  )
}

export default Props;
