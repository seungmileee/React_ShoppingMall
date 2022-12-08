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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
