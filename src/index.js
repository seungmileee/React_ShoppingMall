import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Main from "./pages/Main";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import ProductCart from "./pages/ProductCart";
import MakeProduct from "./pages/MakeProduct";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Main /> },
      { path: "/products", element: <ProductList /> },
      { path: "/product/:id/:name", element: <ProductDetail /> },
      { path: "/cart", element: <ProductCart /> },
      { path: "/register", element: <MakeProduct /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/signin", element: <SignIn /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
