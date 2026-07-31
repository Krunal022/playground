import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

const UsersPage = () => {
  const [usersData, setUsersData] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/users");
      setUsersData(res.data);
    } catch (error) {
      console.log("err in User API - ", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

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
