import React from "react";
import Modal from "./utils/Modal";
import LockedSvg from "./utils/LockedSvg";
import { Link } from "react-router-dom";
import ForgetLocked from "./utils/ForgetLocked";
const ForgetPasswordContent = () => {
     return (
          <Modal>
               <div className=" w-[560px] h-[388px] rounded  shadow-lg flex flex-row justify-center items-center">
                    <div className="w-fit h-fit flex flex-col gap-3">
                         <div className=" flex flex-row  ">
                              <div className=" flex flex-row gap-2 mb-3">
                                   <span className=" relative">
                                        <ForgetLocked w="45" h="38" isLocked={true} />
                                        <p className=" font-Lato font-bold text-white text-xl absolute top-[10px] left-[17px]">
                                             ?
                                        </p>
                                   </span>
                                   <h1 className="pt-1 text-2xl text-[#172B70] font-bold font-Lato ">
                                        Forget Password?
                                   </h1>
                              </div>
                         </div>
                         <p className=" text-[#577496]">
                              {" "}
                              Enter the email address you registered and we’ll
                              send you <br /> instructions to reset your
                              password.
                         </p>
                         <form className=" flex flex-col gap-3">
                              <input
                                   type="email"
                                   name="Email address"
                                   placeholder="Email address"
                                   className="w-inputWidth h-12 ps-3 focus:border   border border-inputBorderColor rounded text-sm font-semibold font-Lato placeholder:font-Lato placeholder:text-xs placeholder:text-inputPlaceholderColor"
                                   required
                              />

                              <div className=" flex flex-row justify-between mt-3">
                                   <button className=" font-medium  w-[102px] h-12 text-center bg-headerAndButtonColor text-xs text-white rounded font-Roboto ">
                                        Send Email
                                   </button>
                                   <Link
                                        className="mt-3 text-[#172B70]"
                                        to="/signin"
                                   >
                                        <span className=" underline-offset-1 underline">
                                             {" "}
                                             Back to login{" "}
                                        </span>
                                   </Link>
                              </div>
                         </form>
                    </div>
               </div>
          </Modal>
     );
};

export default ForgetPasswordContent;
