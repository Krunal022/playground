import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// targeting root element and rendering App component inside it
createRoot(document.getElementById("root")).render(<App />);
