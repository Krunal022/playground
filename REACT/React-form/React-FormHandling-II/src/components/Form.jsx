import React, { use, useState } from "react";
import Card from "./Card";

const Form = ({ users, setUsers }) => {
  const [formData, setFormData] = useState({});

  let handleSubmit = (e) => {
    e.preventDefault();
    setUsers((prev) => [...prev, formData]);
    setFormData({ name: "", desc: "", price: "" });
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className=" p-4 rounded-2xl">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-2xs border border-black rounded-xl p-5"
      >
        <input
          name="name"
          onChange={handleChange}
          value={formData.name}
          className="p-2 border border-black text-black rounded-3xl"
          type="text"
          placeholder="Product Name"
        />
        <input
          name="price"
          onChange={handleChange}
          value={formData.price}
          className="p-2 border border-black text-black rounded-3xl"
          type="number"
          placeholder="Price"
        />
        <input
          name="desc"
          onChange={handleChange}
          value={formData.desc}
          className="p-2 border border-black text-black rounded-3xl"
          type="text"
          placeholder="Description"
        />
        <button
          onClick={() => console.log("click")}
          className="p-2 border border-black bg-blue-600 cursor-pointer rounded-2xl"
        >
          Submit
        </button>
      </form>

      {/* <h4 className="text-xl text-emerald-950 mt-10">formData</h4>
      <h1 className="text-2xl text-gray-900">Name: {formData.name}</h1>
      <h1 className="text-2xl text-gray-900">Price: {formData.price}</h1>
      <h1 className="text-2xl text-gray-900">Descripton: {formData.desc}</h1> */}

      <div className="container flex gap-2 mt-5 flex-wrap">
        {users.map((item, index) => {
          return <Card users={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Form;
