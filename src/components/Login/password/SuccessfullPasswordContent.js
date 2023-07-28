import React from "react";
import Modal from "./utils/Modal";
import LockedSvg from "./utils/LockedSvg";
import TickSvg from "./utils/TickSvg";

const SuccessfullPasswordContent = () => {
     return (
          <Modal>
               <div className=" w-[730px] h-[469px] bg-[#FFF] shadow-lg rounded flex flex-row justify-center items-center">
                    <div className="w-fit h-fit flex flex-col gap-3 ">
                         {/* Svg pages section */}
                         <div className="flex flex-row justify-center">
                              <div className=" relative w-fit h-fit">
                                   <LockedSvg w="70" h="88" />
                                   <div className=" absolute  -bottom-3 -right-3 w-fit h-fit">
                                        <TickSvg w="30" h="30" />
                                   </div>
                              </div>
                         </div>

                         <h1 className="text-2xl text-headerAndButtonColor font-Lato font-[600] text-center mt-2">
                              Created password successfully!
                         </h1>
                         <p className=" text-[14px] text-headerAndButtonColor font-Lato font-[400]">
                              You can now login to your account with the new
                              password created
                         </p>

                         <div className=" flex flex-row justify-center mt-2">
                              <button className=" font-light  h-12 w-[120px] text-center bg-headerAndButtonColor text-xs text-white rounded font-Roboto">
                                   Proceed to login
                              </button>
                         </div>
                    </div>
               </div>
          </Modal>
     );
};

export default SuccessfullPasswordContent;
