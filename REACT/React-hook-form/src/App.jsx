import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="h-screen bg-black">
      <div className="h-min-screen bg-black">
        <br />

        <Navbar setToggle={setToggle} />
        {toggle ? (
          <div className="p-5 flex gap-1 flex-wrap justify-center sm:justify-start">
            <UserCard />
          </div>
        ) : (
          <Form />
        )}
      </div>
    </div>
  );
};

export default App;
