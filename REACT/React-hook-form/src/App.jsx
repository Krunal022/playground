import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);
  return (
    <div className="h-screen bg-black">
      <div className="h-screen bg-black">
        <br />

        <Navbar setToggle={setToggle} toggle={toggle} />
        {toggle ? (
          <div className="p-5 flex gap-1 flex-wrap justify-center sm:justify-start">
            {users.map((elem) => {
              return <UserCard key={elem.id} user={elem} />;
            })}
          </div>
        ) : (
          <Form setToggle={setToggle} users={users} setUsers={setUsers} />
        )}
      </div>
    </div>
  );
};

export default App;
