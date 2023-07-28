import React from "react";
import Modal from "./utils/Modal";
import LockedSvg from "./utils/LockedSvg";

const CreatePasswordContent = () => {
     return (
          <Modal>
               {/* Card div */}
               <div className=" w-[564px] h-[380px] bg-[#FFF] border-[#E6EEFF] shadow-createPasswordCard flex flex-row justify-center items-center">
                    <div className="w-fit h-fit flex flex-col gap-3">
                         <div className="flex flex-row justify-start gap-6 ms-2">
                              <LockedSvg w="38" h="47" />
                              {/*  Heading section */}
                              <h1 className=" text-2xl text-headerAndButtonColor font-Lato font-semibold  mt-2">
                                   Create Password
                              </h1>
                         </div>

                         <form className="flex flex-col gap-3 mt-4">
                              {/* new and confirm password input streams  */}
                              <input
                                   type="text"
                                   name="new password"
                                   placeholder="New Password"
                                   className="w-inputWidth h-12 ps-3 focus:border   border border-inputBorderColor rounded text-sm font-semibold placeholder:font-Roboto placeholder:text-xs placeholder:text-inputPlaceholderColor"
                              />
                              <input
                                   type="password"
                                   name="Confirm"
                                   placeholder="Confirm Password"
                                   className="w-inputWidth h-12 ps-3  border border-inputBorderColor rounded text-sm font-semibold placeholder:font-Roboto placeholder:text-xs placeholder:text-inputPlaceholderColor"
                              />

                              <div className="mt-2">
                                   {/* Submit Button for form */}
                                   <button className=" font-bold  w-loginButtonWidth h-12 text-center bg-headerAndButtonColor text-xs text-white rounded font-Roboto">
                                        Create your account
                                   </button>
                              </div>
                         </form>
                    </div>
               </div>
          </Modal>
     );
};

export default CreatePasswordContent;
