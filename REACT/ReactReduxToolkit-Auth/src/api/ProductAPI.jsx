import { useState } from "react";
import { axiosInstance } from "../config/axiosInstance";

export const getProductsData = async () => {
  try {
    const res = await axiosInstance.get("products?limit=40");
    return res.data.products;
  } catch (error) {
    console.log("Err in FetchingProduct API:", error);
  }
};
