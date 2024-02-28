import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout.tsx";
// import "sanitize.css"; // tailwind includes Preflight
import Error from "./components/common/Error.tsx";
import HomePage from "./pages/HomePage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import BooksPage from "./pages/BooksPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
    errorElement: <Error />,
  },
  {
    path: "/books",
    element: (
      <Layout>
        <BooksPage />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <LoginPage />
      </Layout>
    ),
  },
  {
    path: "/signup",
    element: (
      <Layout>
        <SignUpPage />
      </Layout>
    ),
  },
  {
    path: "/reset",
    element: (
      <Layout>
        <ResetPasswordPage />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
