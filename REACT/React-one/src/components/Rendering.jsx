import React, { Profiler } from "react";

const Rendering = () => {
  let profiles = [
    { name: "Krunal", age: 55, city: "baroda" },
    { name: "Sagar", age: 41, city: "Surat" },
    { name: "Vishal", age: 56, city: "Ahmdabad" },  
    { name: "Divyang", age: 35, city: "Anand" },
  ];

  let renderProfile = profiles.map((profile, index) => {
    return (
      <li key={index}>
        Name: {profile.name} | Age: {profile.age} | City: {profile.city}
      </li>
    );
  });

  return (
    <div>
      <ol type="i">{renderProfile}</ol>
    </div>
  );
};

export default Rendering;
