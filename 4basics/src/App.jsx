// import React from "react";
import Add from "./components/Add";
import Multiply from "./components/Multiply";
import Lists from "./components/lists";
import Props from "./components/Props";
import Password from "./components/Password";
import Cart from "./components/Cart";
import "./index.css"
import Event from "./components/Event";
const styles = {
  color: "white",
  backgroundColor : "crimson",
}
const Copy = ( ) => {
  const copyHandler = () => {
      alert("Yo stop stealing my content")
  }
  return <>
  <p onCopy={copyHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, vitae?</p>
  </>
}

function App() {
  return (
    <>
      <Add />
      <Multiply />
      <Lists />
      <Password isValid={true} />
      <Cart />
      <Props 
        img = "https://lh3.googleusercontent.com/ogw/AKPQZvytz0mMMrmBzi4CXguLNDBCIWm3Kk6CdYTtNQJz=s32-c-mo"
        name = "Chandana"
        age = {19}
        hobbies = {["coding","reading","Drawing"]}
        >
          <p>Lorem ipsum dolorlorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed veritatis quos, doloremque voluptatem pariatur alias? Consequatur quam omnis rem cum.</p>
        </Props>
      <section>
        <h1>Hello Im learning React 💜</h1>
        <p>This is a paragraph :)</p>
        {/* closing tag */}
        <img src="" alt="" />
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" />
        </form>
        {/* inline css */}
        <h1 style={{color: "white",backgroundColor: "black"}}>Hello Im React</h1>
        <h2 style = {{color: styles.color, backgroundColor: styles.backgroundColor}}>Seperate styles</h2>

        <Event />
        <Copy />
      </section>
    </>
  );
}

export default App;
