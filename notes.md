# Introduction to React

React is a widely-used JavaScript library for building user interfaces in web applications. It's maintained by Facebook and a vibrant developer community. This guide will provide you with a basic understanding of React.

## Components in React

Components are independent and reusable bits of code. They serve the same purpose as Js functions but work in isolation and return HTML

At the core of React are components. Components are the building blocks of your application's user interface. They are like reusable Lego pieces that you can assemble to create your web app.

## JSX

JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.

A typical React component starts with a JavaScript function. This function returns JSX (JavaScript XML), which looks like HTML but allows you to incorporate JavaScript expressions within it. JSX provides a template for defining how your component should appear.

For instance, here's a simple React component:
```javascript
function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a basic React component.</p>
    </div>
  );
}
```
In this example, App is a component that renders a heading and a paragraph.

## JSX Rules

1. JSX expression should have one parent Element. Whenever you're returning more than one element you have to wrap that in a single parent tag

2. Close all of your tags in React (JSX) like img etc

3. class keyword is reserved in React instead we can use className to give for a element

## Expressions in JSX

With JSX you can write expressions inside curly braces. The expression can be a React variable, or property or any other valid JS expression. JSX will execute th expression and return the result

## Rendering Data with JSX

JSX allows you to render data as text (strings). You can display variables, data from APIs, or any other dynamic content within your JSX. However, you cannot directly display objects or boolean values in JSX.

For example, to display a variable name within JSX, you can do:

```javascript
function App() {
  const name = "John";
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
}
```
Here, the {name} within the JSX is a JavaScript expression that evaluates to the value of the name variable.

## Organizing Your React App
In a typical React project, you'll have an index.js file where you import and render your main component, often called App. This component serves as the entry point to your application.

Additionally, it's common practice to organize your styles separately in a file like index.css. You can use inline CSS styles within your JSX if needed, but for larger projects, it's recommended to keep your styles in separate CSS files to maintain clarity and organization.

## Lists

In React, you will render lists with some type of loop. The Javascript map() array method is generally the preferred method

## Props

Props are arguments passed into React components. Props are passed to components via HTML attributes

## Conditional Rendering

Conditional rendering in react works the sameway conditions work in JavaScript. Use Javascript operators like if or the conditional operator to create elements representing the current state and let React update the UI to match them

## STATE

The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes the component re-renders

## HOOKS

Hooks are a new addition in React they let you use state and other React features without writing a class.

## useEffect()

The useEffect Hook allows you to perform side effects in your componenets. Some examples of side effects are: fetching data, directly updating the DOM.

When component renders for the first time it will execute all the code inside useEffect()

anytime we do a side effect all things happen at same time in the useEffect

We cant put useEffect in the conditional statements. React hooks must be called in the exact same order in every component render