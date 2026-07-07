// Bruteforce solution for form handling in react.

// import React, { useState } from "react";

// const Form = () => {
//   console.log("form rendering...");

//   const [name, setName] = useState();
//   const [price, setPrice] = useState();
//   const [desc, setDesc] = useState();

//   let handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(name, price, desc);
//     setName("");
//     setPrice("");
//     setDesc("");
//   };
//   return (
//     <div className=" p-4 rounded-2xl">
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col gap-3 w-2xs border border-black rounded-xl p-5"
//       >
//         <input
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//           className="p-2 border border-black text-black rounded-3xl"
//           type="text"
//           placeholder="Product Name"
//         />
//         <input
//           onChange={(e) => setPrice(e.target.value)}
//           value={price}
//           className="p-2 border border-black text-black rounded-3xl"
//           type="number"
//           placeholder="Price"
//         />
//         <input
//           onChange={(e) => setDesc(e.target.value)}
//           value={desc}
//           className="p-2 border border-black text-black rounded-3xl"
//           type="text"
//           placeholder="Description"
//         />
//         <button className="p-2 border border-black bg-blue-600 cursor-pointer rounded-2xl">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;

// Better solution for form handling in react.
// import React, { useState } from "react";

// const Form = () => {
//   console.log("form rendering...");

//   const [formData, setFormData] = useState({});

//   let handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className=" p-4 rounded-2xl">
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col gap-3 w-2xs border border-black rounded-xl p-5"
//       >
//         <input
//           name="name"
//           onChange={(e) => {
//             setFormData({ ...formData, name: e.target.value });
//           }}
//           className="p-2 border border-black text-black rounded-3xl"
//           type="text"
//           placeholder="Product Name"
//         />
//         <input
//           name="price"
//           onChange={(e) => {
//             setFormData({ ...formData, price: e.target.value });
//           }}
//           className="p-2 border border-black text-black rounded-3xl"
//           type="number"
//           placeholder="Price"
//         />
//         <input
//           name="desc"
//           onChange={(e) => {
//             setFormData({ ...formData, Description: e.target.value });
//           }}
//           className="p-2 border border-black text-black rounded-3xl"
//           type="text"
//           placeholder="Description"
//         />
//         <button className="p-2 border border-black bg-blue-600 cursor-pointer rounded-2xl">
//           Submit
//         </button>
//       </form>

//       <h4 className="text-xl text-emerald-950 mt-10">formData</h4>
//       <h1 className="text-2xl text-gray-900">Name: {formData.name}</h1>
//       <h1 className="text-2xl text-gray-900">Price: {formData.price}</h1>
//       <h1 className="text-2xl text-gray-900">
//         Descripton: {formData.Description}
//       </h1>
//     </div>
//   );
// };

// export default Form;

// Optimize solution for form handling in react.
import React, { useState } from "react";

const Form = () => {
  console.log("form rendering...");

  const [formData, setFormData] = useState({});

  let handleSubmit = (e) => {
    e.preventDefault();
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
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
          className="p-2 border border-black text-black rounded-3xl"
          type="text"
          placeholder="Product Name"
        />
        <input
          name="price"
          onChange={handleChange}
          className="p-2 border border-black text-black rounded-3xl"
          type="number"
          placeholder="Price"
        />
        <input
          name="desc"
          onChange={handleChange}
          className="p-2 border border-black text-black rounded-3xl"
          type="text"
          placeholder="Description"
        />
        <button className="p-2 border border-black bg-blue-600 cursor-pointer rounded-2xl">
          Submit
        </button>
      </form>

      <h4 className="text-xl text-emerald-950 mt-10">formData</h4>
      <h1 className="text-2xl text-gray-900">Name: {formData.name}</h1>
      <h1 className="text-2xl text-gray-900">Price: {formData.price}</h1>
      <h1 className="text-2xl text-gray-900">Descripton: {formData.desc}</h1>
    </div>
  );
};

export default Form;
