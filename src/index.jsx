import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import ProductListing from "./pages/ProductListing";
import ProductDetails from "./components/ProductDetails";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "../src/pages/Cart";
import WishList from "./pages/WishList";
import Login from "./pages/Login";
import Address from "./pages/Address";
import ScrollToTop from "./components/ScrollToTop";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ScrollToTop>
        <App />,
      </ScrollToTop>
    ),
  },
  {
    path: "/products/category/:category",
    element: (
      <ScrollToTop>
        <ProductListing />,
      </ScrollToTop>
    ),
  },
  {
    path: "/productDetails/:id",
    element: (
      <ScrollToTop>
        <ProductDetails />
      </ScrollToTop>
    ),
  },
  {
    path: "/cart",
    element: (
      <ScrollToTop>
        <Cart />
      </ScrollToTop>
    ),
  },
  {
    path: "/wishList",
    element: (
      <ScrollToTop>
        <WishList />
      </ScrollToTop>
    ),
  },
  {
    path: "/login",
    element: (
      <ScrollToTop>
        <Login />
      </ScrollToTop>
    ),
  },
  {
    path: "/address",

    element: (
      <ScrollToTop>
        <Address />,
      </ScrollToTop>
    ),
  },
  {
    path: "/signup",

    element: (
      <ScrollToTop>
        <SignUp />
      </ScrollToTop>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
