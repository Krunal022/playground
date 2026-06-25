import React from "react";
// importing About,Footer component
import About from "./About";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <h1>App 🐦‍🔥</h1>
      {/* passing props to About component */}
      <About name="Krunal" age={23} element={<h6>I'm Props...🍁</h6>} />
      <Footer />
    </div>
  );
};

export default App;
