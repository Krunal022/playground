import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { axiosInstance } from "../../../config/api";
import { loginUserAPI } from "../api/AuthApi";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../state/authSlice";
import toast from "react-hot-toast";
import { LoginUserAction } from "../state/authAction";

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
    console.log("RegisterData", data);
  };

  // Dispatch loginAction and let Redux Thunk handle the API flow and state updates.
  const LoginHandler = async (data) => {
    try {
      const response = await dispatch(LoginUserAction(data));
      console.log(response);
    } catch (error) {
      console.log("error in LoginFormHandler:", error);
    }
  };

  const logOutHandler = () => {
    localStorage.removeItem("accessToken");
    dispatch(removeUser());
    toast.success("loggedOutSuccessfully!");
    navigate("/");
  };

  return {
    navigate,
    register,
    handleSubmit,
    errors,
    RegisterHandler,
    LoginHandler,
    logOutHandler,
  };
};
