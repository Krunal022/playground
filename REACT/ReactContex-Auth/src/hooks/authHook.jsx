import { useContext, useState } from "react";
import { Auth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export const useAuth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { registeredUsers, setRegisteredUsers, setLoggedInUser } =
    useContext(Auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const LoginFormHandler = (data) => {
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("Invalid Credentials!");
      reset();
      return;
    }

    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    toast.success("LoggedIn Successfully!");
    navigate("/main");
    reset();
  };

  const RegisterFormHandler = (data) => {
    const arr = [...registeredUsers, data];
    setRegisteredUsers(arr);
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    toast.success("Registered Successfully!");
    navigate("/");
    reset();
  };

  return {
    navigate,
    LoginFormHandler,
    RegisterFormHandler,
    registeredUsers,
    setRegisteredUsers,
    register,
    handleSubmit,
    errors,
    showPassword,
    setShowPassword,
  };
};
