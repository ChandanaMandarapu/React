// import React from "react";
import Add from "./components/Add";
import Multiply from "./components/Multiply";
import Lists from "./components/lists";
import Props from "./components/Props";

function App() {
  return (
    <>
      <Add />
      <Multiply />
      <Lists />
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

        
      </section>
    </>
  );
}

export default App;
