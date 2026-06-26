import React, { useState } from "react";

const Events = () => {
  var [name, setName] = useState("Krunal");

  return (
    <div>
      <h4>Change this name -- {name}</h4>
      <button onClick={() => setName("Selmon bhai.")}>Change name 🔁</button>
    </div>
  );
};

export default Events;
