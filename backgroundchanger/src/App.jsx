import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="w-full h-screen duration-200 flex justify-center items-center">
        <div className="fixed flex flex-col items-center top-12 right-3">
          <div className="flex flex-col gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("brown")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "brown" }}
            >
              brown
            </button>
            <button
              onClick={() => setColor("indigo")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "indigo" }}
            >
              Indigo
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "purple" }}
            >
              purple
            </button>
            <button
              onClick={() => setColor("violet")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "violet" }}
            >
              violet
            </button>
            <button
              onClick={() => setColor("aqua")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "aqua" }}
            >
              aqua
            </button>
            <button
              onClick={() => setColor("lime")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "lime" }}
            >
              lime
            </button>
            <button
              onClick={() => setColor("teal")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "teal" }}
            >
              teal
            </button>
            <button
              onClick={() => setColor("deeppink")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "deeppink" }}
            >
              deeppink
            </button>
            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "olive" }}
            >
              Olive
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
