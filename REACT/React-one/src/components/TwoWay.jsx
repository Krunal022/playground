import React, { useState } from "react";

const TwoWay = () => {
  const [title, settitle] = useState("");

  let submitHander = (e) => {
    e.preventDefault();
    console.log("you're message is: ", title);
    settitle("");
  };

  return (
    <div>
      <form onSubmit={submitHander}>
        <input
          type="text"
          placeholder="Enter something.."
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <button>Submit ✔️</button>
      </form>
    </div>
  );
};

export default TwoWay;
