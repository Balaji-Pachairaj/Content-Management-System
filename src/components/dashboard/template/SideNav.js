import React from "react";
import { Link } from "react-router-dom";

//importing icons for navigation Links
import { RxCross2 } from "react-icons/rx";
import { BsFilePost, BsImages } from "react-icons/bs";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaSolarPanel } from "react-icons/fa6";
import { AiOutlineCalendar } from "react-icons/ai";
import { ImFilesEmpty } from "react-icons/im";
import { BiUserCheck } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";

//has avigations to all dashboard pages
const SideNav = () => {
     return (
          <div className=" w-[219px] min-h-screen bg-sideBarBackgroundGradient font-Roboto flex flex-col justify-between ">
               <div className="w-full h-max flex flex-col gap-10 pt-3">
                    {/* Closing the menu bar */}
                    <Link className="mb-4 flex flex-row justify-center items-center text-[20px] text-white">
                         <RxCross2 className="pt-[2px]  text-[28px]" />{" "}
                         <p className=" ps-1"> Close Menu</p>
                    </Link>

                    <div className=" w-full h-max flex flex-row ps-10">
                         {/* Post page nav */}
                         <Link
                              to="/dashboard/posts"
                              className=" min-w-[100px] flex flex-row items-center hover:-translate-y-1 duration-200"
                         >
                              <BsFilePost className="text-white text-[20px]" />{" "}
                              <p className="ps-5 font-semibold text-[18px] text-white">
                                   Post
                              </p>
                         </Link>
                    </div>
                    <div className=" w-full h-max flex flex-row  ps-10">
                         {/* Assets page nav */}
                         <Link
                              to="/dashboard/assets"
                              className=" min-w-[100px]  flex flex-row items-center hover:-translate-y-1 duration-200"
                         >
                              <BsImages className="text-white text-[20px] " />{" "}
                              <p className="ps-5 font-semibold text-[18px] text-white">
                                   Assets
                              </p>
                         </Link>
                    </div>
                    <div className=" w-full h-max flex flex-row  ps-10 ">
                         {/* Users page nav */}
                         <Link
                              to="/dashboard/users"
                              className=" min-w-[100px] w-max  flex flex-row items-center hover:-translate-y-1 duration-200"
                         >
                              <BiSolidUserRectangle className="text-white text-[20px] " />{" "}
                              <p className="ps-5 font-semibold text-[18px] text-white">
                                   Users
                              </p>
                         </Link>
                    </div>
                    <div className=" w-full h-max flex flex-row  ps-10 ">
                         {/* Category page nav */}
                         <Link
                              to="/dashboard/category"
                              className=" min-w-[100px]  flex flex-row items-center hover:-translate-y-1 duration-200"
                         >
                              <FaSolarPanel className="text-white text-[20px] " />{" "}
                              <p className="ps-5 font-semibold text-[18px] text-white">
                                   Category
                              </p>
                         </Link>
                    </div>
                    <div className=" w-full h-max flex flex-row  ps-10">
                         {/* Live streaming page nav */}
                         <Link
                              to="/dashboard/livestreaming"
                              className="  w-max   flex flex-row items-center  hover:-translate-y-1 duration-200"
                         >
                              <AiOutlineCalendar className="text-white text-[20px] " />{" "}
                              <p className="ps-5 font-semibold text-[18px] text-white">
                                   Live Streaming
                              </p>
                         </Link>
                    </div>
                    <div className=" w-full h-max flex flex-row  ps-10">
                         {/* pages page nav */}
                         <Link
                              to="/dashboard/pages"
                              className="  w-max   flex flex-row items-center  hover:-translate-y-1 duration-200"
                         >
                              <ImFilesEmpty className="text-white text-[20px] " />{" "}
                              <p className="ps-5 font-semibold text-[18px] text-white">
                                   Pages
                              </p>
                         </Link>
                    </div>
               </div>

               {/* Your account and setting page at bottom */}
               <div className="w-full h-max flex flex-col gap-4 pb-6">
                    <div className=" w-full h-max flex flex-row  ps-10">
                         {/* YOur account page nav */}
                         <Link
                              to="/dashboard/assets"
                              className=" min-w-[100px]  flex flex-row items-center hover:-translate-y-1 duration-200"
                         >
                              <BiUserCheck className="text-white text-[20px] " />{" "}
                              <p className="ps-5 font-light text-[14px] text-white">
                                   Your account
                              </p>
                         </Link>
                    </div>
                    <div className=" w-full h-max flex flex-row ps-10">
                         {/* Pages page nav */}
                         <Link
                              to="/dashboard/posts"
                              className=" min-w-[100px] flex flex-row items-center hover:-translate-y-1 duration-200"
                         >
                              <AiFillSetting className="text-white text-[20px]" />{" "}
                              <p className="ps-5 font-light text-[14px] text-white">
                                   Account Settings
                              </p>
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default SideNav;
