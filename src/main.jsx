import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Layout/Main";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Resister from "./components/Resister/Resister";
import ResisterRBS from "./components/ResisterRBS/ResisterRBS";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "resister",
        element: <Resister />,
      },
      {
        path: "resister-rbs",
        element: <ResisterRBS />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
