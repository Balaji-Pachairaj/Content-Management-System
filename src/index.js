import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Router packages
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signin from "./Pages/Login/Signin";
import Signup from "./Pages/Login/Signup";
import CreatePassword from "./Pages/Login/CreatePassword";
import SuccefullPassword from "./Pages/Login/SuccefullPassword";
import ForgetPassword from "./components/Login/password/ForgetPasswordContent";
import CheckEmail from "./Pages/Login/CheckEmail";
import ResetPassword from "./Pages/Login/ResetPassword";
import SuccessfullResetPassword from "./Pages/Login/SuccessfullResetPassword";
import Post from "./Pages/DashBoard/post/Post";

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
          element: <Signin />,
     },
     {
          //Sign up => login form for New user
          path: "/signup",
          element: <Signup />,
     },
     {
          path: "/createpassword",
          element: <CreatePassword />,
     },
     {
          path: "/successfullpassword",
          element: <SuccefullPassword />,
     },
     {
          path: "/forgetpassword",
          element: <ForgetPassword />,
     },
     {
          path: "/checkemail",
          element: <CheckEmail />,
     },
     {
          path: "/resetpassword",
          element: <ResetPassword />,
     },
     {
          path: "/successfulresetpassword",
          element: <SuccessfullResetPassword />,
     },

     {
          path: "/dashboard/posts",
          element: <Post />,
     },
]);

root.render(
     <React.StrictMode>
          <RouterProvider router={router} />
     </React.StrictMode>
);
