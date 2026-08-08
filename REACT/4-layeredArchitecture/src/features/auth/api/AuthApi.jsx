import { axiosInstance } from "../../../config/api";

export const loginUserAPI = async (credentials) => {
  try {
    const res = await axiosInstance.post("/auth/login", credentials);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log("error in LoginUsrAPI:", error);
  }
};

export const HydrateUserAPI = async () => {
  const token = localStorage.getItem("accessToken");

  try {
    const res = await axiosInstance.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
      },
    });
    return res.data;
  } catch (error) {
    console.log("error in HydrateUsrAPI:", error);
  }
};
