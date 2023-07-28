import React from "react";
import Modal from "./utils/Modal";
import TickSvg from "./utils/TickSvg";
import ForgetLocked from "./utils/ForgetLocked";
import { useNavigate } from "react-router-dom";

const SuccessfulResetPasswordContent = () => {
     const navigate = useNavigate();
     
     const clickHandler = () => {
          //redirect to login page
          navigate("/signin")
     }

     return (
          <Modal>
               <div className="w-[576px] h-[380px] rounded shadow-xl flex flex-row justify-center items-center">
                    <div className="flex flex-col gap-3">
                         <div className="flex flex-row justify-center">
                              <span className=" relative">
                                   <ForgetLocked w="45" h="38" />
                                   <div className=" absolute  -bottom-3 -right-3 w-fit h-fit">
                                        <TickSvg w="30" h="30" />
                                   </div>
                              </span>
                         </div>
                         <h1 className=" text-xl text-center text-black font-Lato font-semibold mt-4">
                              Reset password successfully!
                         </h1>
                         <p className=" text-center text-[16px] font-Lato text-[#555555] mt-2 ">
                              You can now login to your account with the new
                              password created
                         </p>
                         <div className=" flex flex-row justify-center mt-5">
                              <button onClick={clickHandler} className=" font-light  h-12 w-[120px] text-center bg-headerAndButtonColor text-xs text-white rounded font-Roboto">
                                   Proceed to login
                              </button>
                         </div>
                    </div>
               </div>
          </Modal>
     );
};

export default SuccessfulResetPasswordContent;
