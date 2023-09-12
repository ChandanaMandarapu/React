function customRender(reactElement, container) {
  /*const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)*/
  // another apporach
  const newElement = document.createElement(reactElement.type);
  newElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    newElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(newElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click here",
};
const mainContainer = document.querySelector("#root");

// we need to render

customRender(reactElement, mainContainer);
