import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";
import PostList from "./PostList";
const ListHeader = () => {
     const currentlist = {
          start: 1,
          end: 100,
          of: 1200,
     };

     return (
          <div className=" w-full h-max ps-5 pe-5">
               <div className="w-full h-[52px] flex flex-row justify-between border-b-2">
                    {/* List above section */}
                    <div className="w-[50px] h-full flex flex-col justify-center items-center">
                         {" "}
                         <input
                              type="checkbox"
                              name="Select All"
                              className=" text-[#9CB2CD] w-[18px] h-[18px]"
                         />
                    </div>
                    <div className="w-max h-full flex flex-col justify-center">
                         <p className=" text-[#869AC0] flex flex-row">
                              {" "}
                              {currentlist.start}-{currentlist.end} of{" "}
                              {currentlist.of}{" "}
                              <button className="ps-2 flex flex-col justify-center">
                                   <BsChevronCompactLeft />
                              </button>
                              <button className=" flex flex-col justify-center">
                                   <BsChevronCompactRight />
                              </button>{" "}
                         </p>
                    </div>
               </div>
               <div className=" w-full h-[60px] flex flex-row justify-start border-b-2">
                    {/* Header section */}
                    <div className=" w-[50px]  h-full   "></div>
                    <div className=" w-[268px] h-full flex flex-row ps-4 items-center text-[#172B70]">
                         <p className="pe-2 text-[#172B70] font-Roboto font-semibold text-[16px]">
                              Name
                         </p>
                         <AiOutlineArrowDown />
                    </div>

                    <div className=" w-[180px] h-full flex flex-row ps-4 items-center text-[#172B70]">
                         <p className="pe-2 text-[#172B70] font-Roboto font-semibold text-[16px]">
                              Overall
                         </p>
                         <AiOutlineArrowDown />
                    </div>
                    <div className=" w-[150px] h-full flex flex-row ps-4 items-center text-[#172B70]">
                         <p className=" text-[#172B70] font-Roboto font-semibold text-[16px]">
                              Comments
                         </p>
                    </div>
                    <div className=" w-[180px] h-full flex flex-row ps-4 items-center text-[#172B70]">
                         <p className=" text-[#172B70] font-Roboto font-semibold text-[16px]">
                              Date
                         </p>
                    </div>
                    <div className=" w-[180px] h-full flex flex-row ps-4 items-center text-[#172B70]">
                         <p className=" text-[#172B70] font-Roboto font-semibold text-[16px]">
                              Category
                         </p>
                    </div>
                    <div className=" w-[180px] h-full flex flex-row ps-4 items-center text-[#172B70]">
                         <p className=" text-[#172B70] font-Roboto font-semibold text-[16px]">
                              Status
                         </p>
                    </div>
               </div>
               <PostList />
          </div>
     );
};

export default ListHeader;
