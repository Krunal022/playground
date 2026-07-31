import React, { useContext } from "react";
import { Auth } from "../context/AuthContext";

const HomePage = () => {
  const { hello } = useContext(Auth);
  return <div>HomePage:  {hello}</div>;
};

export default HomePage;
