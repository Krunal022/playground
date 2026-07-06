import React, { useState } from "react";

const Form = () => {
  console.log("form rendering...");

  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [desc, setDesc] = useState();

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, price, desc);
    setName("");
    setPrice("");
    setDesc("");
  };
  return (
    <div className=" p-4 rounded-2xl">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-2xs">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="p-2 border border-black text-black rounded-3xl"
          type="text"
          placeholder="Product Name"
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          className="p-2 border border-black text-black rounded-3xl"
          type="number"
          placeholder="Price"
        />
        <input
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
          className="p-2 border border-black text-black rounded-3xl"
          type="text"
          placeholder="Description"
        />
        <button className="p-2 border border-black bg-blue-600 cursor-pointer rounded-2xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
