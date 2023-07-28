import React from "react";
import Modal from "./utils/Modal";
import MessageSvg from "./utils/MessageSvg";
import TickSvg from "./utils/TickSvg";
import { useNavigate } from "react-router-dom";
const CheckEmailContent = () => {

     const navigate = useNavigate()

     const clickHandler = () => {
          // redirecting to login page
          navigate("/signin")
     }
     

     return (
          <Modal>
               <div className=" w-[730px] h-[447px] rounded flex flex-row justify-center items-center shadow-xl">
                    <div className="w-fit h-fit flex flex-col gap-3 ">
                         <div className="  flex flex-row justify-center">
                              <span className=" relative">
                                   <MessageSvg w="88" h="70" />
                                   <div className=" absolute  -bottom-3 -right-3 w-fit h-fit">
                                        <TickSvg w="30" h="30" />
                                   </div>
                              </span>
                         </div>
                         <h1 className="mt-2 text-2xl font-medium font-Lato text-[#172B70] text-center">
                              Check your email
                         </h1>
                         <p className=" text-[14px] text-Lato text-[#577496] mt-2 text-center">
                              We have sent you the necessary instructions to
                              create your account
                         </p>
                         <div className="flex flex-row justify-center mt-2">
                              <button onClick={clickHandler} className="mt-2  bg-headerAndButtonColor w-[180px] rounded h-12 text-center text-[14px] text-white font-Lato">
                                   Go back to login
                              </button>
                         </div>
                         <p className=" text-[#172B70] text-center text-[14px] underline underline-offset-1 mt-3 cursor-pointer ">
                              Resend email
                         </p>
                    </div>
               </div>
          </Modal>
     );
};

export default CheckEmailContent;
