import React from "react";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <br />
      <Navbar />
      <div className="p-2">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
