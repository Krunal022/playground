import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainProtected from "./secure/MainProtected";
import PublicProtected from "./secure/PublicProtected";
import AuthLayout from "../app/layouts/AuthLayout";
import MainLayout from "../app/layouts/MainLayout";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import HomePage from "../shared/ui/pages/HomePage";
import CartPage from "../features/cart/ui/pages/CartPage";
import ProductPage from "../features/products/ui/pages/ProductPage";
import OrderPage from "../features/orders/ui/pages/OrderPage";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          element: "/",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "cart",
              element: <CartPage />,
            },
            {
              path: "order",
              element: <OrderPage />,
            },
            {
              path: "product",
              element: <ProductPage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default AppRoutes;
