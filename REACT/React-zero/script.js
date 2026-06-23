// Select the main element from the HTML document
let main = document.querySelector('main')
// Create a new h1 element
let h1 = document.createElement('h1')
// Set the text content of the h1 element
h1.textContent = "Hello from REAL DOM!";
// Append the h1 element to the main element
main.appendChild(h1)

// This is the REAL DOM directly manipulated by the browser. The DOM is a tree-like structure that represents the HTML document, and it allows JavaScript to interact with and modify the content and structure of the webpage dynamically.
