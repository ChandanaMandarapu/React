// import React from 'react'
import "./style.css"
import { useState } from "react";
const Toggle = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("#111");
  const [buttonStyle, setButtonStyle] = useState("white");
function handleClick() {
    setBackgroundColor(backgroundColor === "white" ? "#111" : "white")
    setTextColor(textColor === "#111"?"#ffa31a":"#111")
    setButtonStyle(backgroundColor === "white"? "#111":"white")
}
  return (
    <>
      <section style={{ backgroundColor, color: textColor }}>
        <button
          onClick={handleClick}
          style={{
            buttonStyle,
            color: textColor,
            border: "2px solid ${textColor}",
          }}
        >
          Change Theme
        </button>
        <section className="content">
        <h1>Welcome to A</h1> <br />
        <h1>React World</h1>
      </section>
      </section>
      
    </>
  );
};

export default Toggle;
