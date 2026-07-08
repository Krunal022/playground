import React, { useState } from "react";
import Form from "./components/Form";
import Card from "./components/Card";

const App = () => {
  const [users, setUsers] = useState([]);

  return (
    <div className="bg-gray-500 min-h-screen text-white p-4">
      <h1 className="text-3xl p-4 text-cyan-950">Form Handling</h1>
      <Form users={users} setUsers={setUsers} />
    </div>
  );
};

export default App;
