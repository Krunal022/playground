import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { addUser } from "../features/AuthSlice";

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registeredUsers")) || [],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const RegisterHandler = (data) => {
    let arr = [...registeredUsers, data];
    setRegisteredUsers(arr);
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    toast.success("Registered successfully! 🎉");
    navigate("/");
    reset();
  };

  const LoginHandler = (data) => {
    const user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("Invalid Credentials! ⚠️", {
        autoClose: 1000,
      });
      reset();
      return;
    }

    dispatch(addUser(user));
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    toast.success("LoggedIn successfully! 🎉");
    navigate("/main");
    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    errors,
    RegisterHandler,
    LoginHandler,
    dispatch,
  };
};
