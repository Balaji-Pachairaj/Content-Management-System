import React from "react";
import SSPageContent from "./utils/SSPageContent";
import LoginCard from "./utils/LoginCard";
import { Link } from "react-router-dom";
import LoginFooter from "./utils/LoginFooter";



const SigninForm = () => {
     return (
          <div>
               <SSPageContent>
                    <LoginCard>
                         <h1 className=" text-2xl font-semibold  text-headerAndButtonColor mb-2">
                              {/* Header */}
                              Welcome Back!
                         </h1>
                         <h1 className="text-3xl font-light font-Lato">
                              Sign In
                         </h1>

                         <form className="flex flex-col gap-3 mt-6">
                              {/* All input stream  */}
                              <input
                                   type="text"
                                   name="Name"
                                   placeholder="Name"
                                   className="w-inputWidth h-12 ps-3 focus:border   border border-inputBorderColor rounded text-sm font-semibold placeholder:font-Roboto placeholder:text-xs placeholder:text-inputPlaceholderColor"
                              />
                              <input
                                   type="password"
                                   name="Password"
                                   placeholder="Password"
                                   className="w-inputWidth h-12 ps-3  border border-inputBorderColor rounded text-sm font-semibold placeholder:font-Roboto placeholder:text-xs placeholder:text-inputPlaceholderColor"
                              />
                              <div className="mt-4 flex flex-row justify-between">
                                {/* Submit button for form */}
                                   <button className=" font-bold uppercase w-loginButtonWidth h-12 text-center bg-headerAndButtonColor text-xs text-white rounded font-Roboto">
                                        Sign in
                                   </button>
                                   {/* trouble shooting code */}
                                   <Link className="pt-2 text-linkColor">
                                        Trouble signing in?
                                   </Link>
                              </div>
                              {/* Footer  */}
                              <LoginFooter isUser={true} />
                         </form>
                    </LoginCard>
               </SSPageContent>
          </div>
     );
};

export default SigninForm;
