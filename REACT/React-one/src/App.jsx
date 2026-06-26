import React from "react";
// importing About,Footer component
import About from "./About";
import Footer from "./Footer";
import Rendering from "./Rendering";

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
    </div>
  );
};

export default App;
