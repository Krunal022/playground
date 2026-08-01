import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const UsersPage = () => {
  const [usersData, setUsersData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/users");
      setUsersData(res.data);
      setIsLoading(false);
    } catch (error) {
      console.log("err in User API - ", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (isLoading) {
    return (
      <DotLottieReact
        src="https://lottie.host/a8ee67bb-2630-4987-b662-b0f9333c0fb8/ZXMo77axXK.json"
        loop
        autoplay
      />
    );
  }

  return (
    <div>
      <h1>
        Fetched Users data using Axios and rendered it dynamically in the UI.
      </h1>
      <div className="grid grid-cols-4 gap-3 mt-5 ">
        {usersData.map((val) => {
          return <UserCard key={val.id} user={val} />;
        })}
      </div>
    </div>
  );
};

export default UsersPage;
