import React from "react";
import Modal from "./utils/Modal";
import ForgetLocked from "./utils/ForgetLocked";

const ResetPasswordContent = () => {
     return (
          <Modal>
               <div className=" w-[576px] h-[380px] rounded shadow-lg flex flex-row justify-center items-center">
                    <div className=" w-fit h-fit flex flex-col gap-3">
                         <div className=" flex flex-row gap-6 mb-3">
                              <ForgetLocked w="45" h="38" isLocked={false} />

                              <h1 className=" text-2xl text-[#172B70] font-medium font-Lato ">
                                   Reset password
                              </h1>
                         </div>
                         <form className=" flex flex-col gap-3 mt-2">
                              <input
                                   type="text"
                                   name="Enter New Password"
                                   placeholder="Enter New Password"
                                   className="w-inputWidth h-12 ps-3 focus:border   border border-inputBorderColor rounded text-sm font-semibold placeholder:font-Roboto placeholder:text-xs placeholder:text-inputPlaceholderColor"
                              />
                              <input
                                   type="text"
                                   name="Confirm Enter New Password"
                                   placeholder="Confirm Enter New Password"
                                   className="w-inputWidth h-12 ps-3  border border-inputBorderColor rounded text-sm font-semibold placeholder:font-Roboto placeholder:text-xs placeholder:text-inputPlaceholderColor"
                              />
                              <div className=" mt-3">
                                   <button className=" w-[180px] h-12 text-white bg-headerAndButtonColor text-center text-[14px] rounded font-Lato">
                                        Submit
                                   </button>
                              </div>
                         </form>
                    </div>
               </div>
          </Modal>
     );
};

export default ResetPasswordContent;
