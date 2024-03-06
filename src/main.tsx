import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@/index.css";
import Layout from "@/layout/Layout.tsx";
import Error from "@/components/common/Error.tsx";
import HomePage from "@/pages/HomePage.tsx";
import SignUpPage from "@/pages/SignUpPage.tsx";
import ResetPasswordPage from "@/pages/ResetPasswordPage.tsx";
import LoginPage from "@/pages/LoginPage.tsx";
import BooksPage from "@/pages/BooksPage.tsx";
import BookDetailPage from "@/pages/BookDetailPage.tsx";
import CartPage from "@/pages/CartPage.tsx";
import OrderPage from "@/pages/OrderPage.tsx";
import OrderListPage from "@/pages/OrderListPage.tsx";
import { queryClient } from "@/api/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

const routeList = [
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error />,
  },
  {
    path: "/books",
    element: <BooksPage />,
  },
  {
    path: "/book/:bookId",
    element: <BookDetailPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/order",
    element: <OrderPage />,
  },
  {
    path: "/orderlist",
    element: <OrderListPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/reset",
    element: <ResetPasswordPage />,
  },
];

const router = createBrowserRouter(
  routeList.map((item) => {
    return {
      ...item,
      element: <Layout>{item.element}</Layout>,
      errorElement: <Error />,
    };
  })
);
const mountApp = async () => {
  if (import.meta.env.DEV) {
    const { worker } = await import("@/mock/browser");
    worker.start();
  }

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>
  );
};

mountApp();
