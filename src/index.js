import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Router packages
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

//Creating router
const router = createBrowserRouter([
     {
          //Home page router => initial rendering page
          path: "/",
          element: <p>Home</p>,
     },
     {
          //Sign in => login form for existing user
          path: "/signin",
          element: <p className=" text-center">sign in </p>,
     },
     {
          //Sign up => login form for New user
          path: "/signup",
          element: <p className=" text-center">sign up </p>,
     },
]);

root.render(
     <React.StrictMode>
          <RouterProvider router={router} />
     </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
