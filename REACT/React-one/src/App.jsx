import React from "react";
// importing About,Footer component
import About from "./components/About";
import Footer from "./components/Footer";
import Rendering from "./components/Rendering";
import Events from "./components/Events";
import TwoWay from "./components/TwoWay";

const App = () => {
  return (
    <div>
      <h1>App 🐦‍🔥</h1>
      <h3>Components & props.. 1️⃣</h3>
      {/* passing props to About component */}
      <About name="Krunal" age={23} element={<h6>I'm Props...🍁</h6>} />
      <Footer />

      <h3>Rendering.. 2️⃣</h3>
      <Rendering />

      <h3>Event Handling.. 3️⃣</h3>
      <Events />

      <h3>Two way binding.. 4️⃣</h3>
      <TwoWay />
    </div>
  );
};

export default App;
