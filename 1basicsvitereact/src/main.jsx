import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyName() {
  return <p>My name is chandana</p>;
}
// const  reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank',
//   },
//   children: 'Click here'
// }
const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);
const anotherUsername = "Pallavi";
// using correct react syntax

const reactElement = React.createElement(
  "a",
  { href: "https:google.com", target: "_blank" },
  "click here to visit google",
  anotherUsername
);
ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
