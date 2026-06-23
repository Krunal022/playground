// Select the main element from the HTML document
let main = document.querySelector('main')
// Create a new h1 element
let h1 = document.createElement('h1')
// Set the text content of the h1 element
h1.textContent = "Hello from REAL DOM!";
// Append the h1 element to the main element
main.appendChild(h1)

// This is the REAL DOM directly manipulated by the browser. The DOM is a tree-like structure that represents the HTML document, and it allows JavaScript to interact with and modify the content and structure of the webpage dynamically.

// Check if React and ReactDOM are loaded
console.log(React)
console.log(ReactDOM)

// Takes one element from the HTML document and creates a React root for it. This is where React will manage the rendering of components.
let realDOMElement = document.querySelector('#root');

// make it React root using ReactDOM.createRoot() method. 
let rootOfReact = ReactDOM.createRoot(realDOMElement);

// Create a React element using React.createElement() method. 
// Thats lightweight and fast way to create React elements. 
// React.createElement( type of element, containing any props, children of the element )
let reactH1 = React.createElement("h1", {}, "Hello from React!")

// Render the React element into the React root. 
rootOfReact.render(reactH1)