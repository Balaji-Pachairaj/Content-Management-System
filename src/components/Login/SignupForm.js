import React from "react";
import LoginCard from "./utils/LoginCard";
import SSPageContent from "./utils/SSPageContent";

import { Link } from "react-router-dom";
import LoginFooter from "./utils/LoginFooter";

const SignupForm = () => {
     return (
          //SS pages content for template in signin and signup pages
          //LoginCard is carrying the form simple component
          <SSPageContent>
               <LoginCard>
                    <h1 className=" text-2xl font-Roboto font-[700] text-headerAndButtonColor mb-3">
                         {/* Header */}
                         Get started!
                    </h1>

                    <form className=" flex flex-col gap-2 font-Roboto">
                         {/* All input streams is here */}
                         <input
                              type="text"
                              name="Name"
                              placeholder="Name"
                              className="w-inputWidth h-12 ps-3 focus:border   border border-inputBorderColor rounded text-sm font-semibold placeholder:font-Roboto placeholder:text-xs placeholder:text-inputPlaceholderColor"
                         />
                         <input
                              type="text"
                              name="Description"
                              placeholder="Description"
                              className="w-inputWidth h-12 ps-3  border border-inputBorderColor rounded text-sm font-semibold placeholder:font-Roboto placeholder:text-xs placeholder:text-inputPlaceholderColor"
                         />
                         <input
                              type="number"
                              name="Phone"
                              placeholder="Phone"
                              className="w-inputWidth h-12 ps-3  border border-inputBorderColor rounded text-sm font-semibold placeholder:font-Roboto placeholder:text-xs placeholder:text-inputPlaceholderColor"
                         />
                         <input
                              type="email"
                              name="Business Email"
                              placeholder="Business Email"
                              className="w-inputWidth h-12 ps-3  border border-inputBorderColor rounded text-sm font-semibold placeholder:font-Roboto placeholder:text-xs placeholder:text-inputPlaceholderColor"
                         />

                         {/* data list to slect the job functions option */}
                         <datalist id="jobs">
                              <option value="doctor" />
                              <option value="teacher" />
                              <option value="tech" />
                              <option value="tipper" />
                         </datalist>
                         <input
                              list="jobs"
                              name="jobs"
                              id="jobs"
                              placeholder="Jobs Functions"
                              className="w-inputWidth h-12 ps-3  border border-inputBorderColor rounded text-sm placeholder:font-Roboto placeholder:text-xs placeholder:text-inputPlaceholderColor "
                         />

                         <div className="flex flex-row items-start mt-2">
                              {/* CheckBox input stream */}
                              <input
                                   type="checkbox"
                                   className="ms-1 me-2 mt-1  "
                                   required
                              />
                              {/* Links to privacy and Terms of service pages / instruction */}
                              <p className=" inline-block text-alterLoginColor text-xs break-words align-baseline font-Roboto">
                                   By signing up, you agree to our{" "}
                                   <Link className=" font-bold hover:text-linkColor">
                                        Terms of Service
                                   </Link>{" "}
                                   and <br /> acknowledge our{" "}
                                   <Link className=" font-bold hover:text-linkColor">
                                        Privacy Policy
                                   </Link>
                                   .
                              </p>
                         </div>
                         <div className="mt-2">
                            {/* Submit Button for form */}
                              <button className=" font-bold uppercase w-loginButtonWidth h-12 text-center bg-headerAndButtonColor text-xs text-white rounded font-Roboto">
                                   Sign up
                              </button>
                         </div>
                    </form>

                    {/* isUser props is boolean true - signin false - signup */}
                    <LoginFooter isUser={false} />
               </LoginCard>
          </SSPageContent>
     );
};

export default SignupForm;
