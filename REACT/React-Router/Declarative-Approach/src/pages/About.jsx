import React from "react";
import { Outlet, useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate()
  
  return (
    <div>
      <h3>
        About Page -{" "}
        <button onClick={()=>{
          navigate('/about/nested')
        }} className="p-1 px-2 mb-4 bg-gray-300 rounded-2xl text-black font-semibold cursor-pointer">
          Click for Outlet
        </button>
      </h3>
      <Outlet />
    </div>
  );
};

export default About;
