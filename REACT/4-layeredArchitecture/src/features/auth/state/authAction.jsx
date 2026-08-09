import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { axiosInstance } from "../../../config/api";

// Redux Thunk for centralized async state management.
export const LoginUserAction = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axiosInstance.post("/auth/login", credentials);
      localStorage.setItem("accessToken", res.data.accessToken);
      toast.success("loggedInSuccessfully!");
      return res.data;
    } catch (error) {
      toast.error("UnAuthorized!");
      return thunkAPI.rejectWithValue("UnAuthorized user!");
    }
  },
);

export const HydrateUserAction = createAsyncThunk(
  "hydrate",
  async (_, thunkAPI) => {
    const token = localStorage.getItem("accessToken");
    try {
      const res = await axiosInstance.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
        },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error in Hydration...");
    }
  },
);
