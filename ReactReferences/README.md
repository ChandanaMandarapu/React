# React Topics Revised

## Table of Contents

React Structure |
Components |
JSX (JavaScript XML) |
Multiple Components |
React Fragments |
Expressions In JSX |
Lists |
Props |
Props Children |
Conditional Rendering |
5 Ways To Style Components |
Events |
State |
Updating State |
Forms In React |
useEffect Hook |
Prop Drilling |
Context API |
useContext Hook |
useReducer Hook |
useRef Hook

## React Structure
React is a JavaScript library for building user interfaces. It promotes a component-based architecture where you create reusable UI elements.

## Components:
Components are like small pieces for your website or app.
They help break down your UI into smaller, manageable parts.
Components can be reused across your project, making your code organized and efficient.

```javascript
// Example component
function Button() {
  return <button>Click me</button>;
}
```

## JSX (JavaScript XML):

JSX is a special syntax for writing your component's output in a more readable way.
It looks like HTML mixed with JavaScript, making it easier to describe your UI.
```javascript
const element = <h1>Hello, React!</h1>;
```

## Multiple Components:

In a React app, you can create and use many different components.
Each component can have its own job or responsibility, like a button or a header.

## React Fragments:

React Fragments help you group elements without adding extra tags to the HTML output.
Useful when you want to return multiple things from a component without adding an extra div or element.
```JSX
// Example using React Fragments
return (
  <>
    <h1>Title</h1>
    <p>Paragraph</p>
  </>
);
```
## Expressions In JSX:

You can put JavaScript expressions inside {} in JSX to display dynamic content.
For example, Hello, {name} would display "Hello, John" if name is a variable with the value "John".
```JSX
// Example with a variable
const name = "John";
return <p>Hello, {name}</p>;
```
## Lists:

Lists in React help you display multiple items, like a list of to-do tasks.
You use the map function to go through each item and display them one by one.
Props (Properties):
```JSX
// Example rendering a list of items
const items = ["Item 1", "Item 2", "Item 3"];
return (
  <ul>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);
```
## Props

Props allow you to pass data from a parent component to a child component.
Think of them as instructions or information you give to a component.
```JSX
// Example using props
function Greeting(props) {
  return <p>Hello, {props.name}!</p>;
}
```
## Props Children:

props.children is a special way to pass content between opening and closing tags of a component.
Useful for creating custom wrappers for content.
```JSX
// Example using props.children
function Card(props) {
  return <div className="card">{props.children}</div>;
}
```

## Conditional Rendering:

Conditional rendering lets you show or hide elements based on certain conditions.
You can use if statements or ternary operators for this.
```JSX 
// Example of conditional rendering
return userLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>;
```

## 5 Ways To Style Components:

Styling is how you make your components look good.
You can use inline styles, CSS classes, libraries like styled-components, CSS-in-JS, or CSS modules to style your components.

## Events

Events in React help you respond to user actions like clicks, typing, or mouse movements.
You attach event handlers like onClick to your elements.
```JSX
// Example handling a click event
function handleClick() {
  alert('Button clicked!');
}

return <button onClick={handleClick}>Click me</button>;
```

## State

State is like memory for your components.
It stores data that can change over time, like form input values or whether a button is clicked.
```JSX
// Example using state
const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1);
}
```

Updating State:

You can update state values to make your component interactive.
For strings, arrays, and objects, you create new versions with changes and set them as the new state.

## Forms In React:

Forms help users input data, like login details or search queries.
React makes it easy to control and manage form input elements.

## useEffect Hook:
useEffect is used for side effects like data fetching and DOM manipulation.
It runs after the component renders and is perfect for managing asynchronous tasks.
```JSX
// Example using state
const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1);
}
```

## Prop Drilling:
Prop drilling is when you pass data through many components.
It can become complex, and for this, React's Context API is useful.
Context API:

The Context API lets you share data across many components without manually passing props.
It creates a global store of data accessible to any component in the tree.

## useContext Hook:
useContext simplifies using the Context API by providing an easy way to access the shared data.

## useReducer Hook:
useReducer helps manage complex state logic by centralizing state updates.
It's an alternative to using useState for more advanced use cases.

## useRef Hook:
useRef is used for referencing DOM elements or for storing mutable values between renders.
```JSX
// Example using useRef
const inputRef = useRef(null);

function focusInput() {
  inputRef.current.focus();
}
```