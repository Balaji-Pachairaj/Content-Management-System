import React from "react";
import { Link } from "react-router-dom";


const LoginFooter= ({ isUser }) => {
     // isUser is props that has boolean value
     // true - signin
     //false - sign up

     const message = {
          message: isUser
               ? "Haven’t yet an account?"
               : "Already have an account?",
          linkMessage: isUser ? "Sign Up" : "Login",
          route: isUser ? "/signup" : "/signin",
     };

     return (
          <>
               <div className=" flex flex-row items-center gap-2 mt-4">
                    <svg
                         xmlns="http://www.w3.org/2000/svg"
                         width="151"
                         height="2"
                         viewBox="0 0 151 2"
                         fill="none"
                    >
                         <path
                              d="M0 1H151"
                              stroke="#97B7D6"
                              stroke-dasharray="2 2"
                         />
                    </svg>{" "}
                    <p className=" pb-1  bg-inputBorderColor w-10 text-center rounded-lg">
                         or
                    </p>
                    <svg
                         xmlns="http://www.w3.org/2000/svg"
                         width="151"
                         height="2"
                         viewBox="0 0 151 2"
                         fill="none"
                    >
                         <path
                              d="M0 1H151"
                              stroke="#97B7D6"
                              stroke-dasharray="2 2"
                         />
                    </svg>
               </div>
               <div className="text-center mt-3 font-base">
                    <p className=" font-Roboto ">
                         {message.message}
                         <Link
                              to={message.route}
                              className=" text-linkColor font-bold"
                         >
                              {" "}
                              {message.linkMessage}
                         </Link>
                    </p>
               </div>
          </>
     );
};

export default LoginFooter;
