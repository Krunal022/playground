import React from "react";

const About = (props) => {
  return (
    <div id="about">
      <h2>About Page 🧿</h2>
      {/* Accepting name using props: {props.name} */}
      <h4>Name: {props.name}</h4>
      <h4>Age: {props.age}</h4>
      {props.element}
    </div>
  );
};

// Exporting About component to use in other files
export default About;
