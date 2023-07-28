import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { Link } from "react-router-dom";

// Header componet has search bar and add post and notification and profile
const Header = () => {
     return (
          <div className=" w-full h-[70px]  flex flex-row justify-between border-b-2">
               <div className=" h-full flex flex-row items-center w-[220px] justify-center">
                    {/* Logo need to change according to logo */}
                    <h1 className=" text-headerAndButtonColor font-Lato font-semibold text-[22px]">
                         Logo
                    </h1>
               </div>
               <div className=" flex flex-row items-center justify-start grow ps-8">
                    {/* Search Bar  */}
                    <span className=" w-fit h-fit relative ">
                         <input
                              className="w-[560px] h-[38px] font-Roboto text-[14px] ps-8 bg-white rounded-3xl border-[2px]"
                              type="text"
                              name="Search"
                              placeholder="Search"
                         />
                         <FiSearch className=" absolute top-[11px] left-3  hover:scale-110 hover:font-bold" />
                    </span>
               </div>

               <div className=" flex flex-row items-center ps-12 pe-10 justify-end">
                    {/* Last add post noti and profile navs */}
                    <div className="w-fit h-fit flex flex-row gap-8 ">
                         <Link
                              to="createpost"
                              className=" rounded-[50%] w-[30px] h-[30px] text-[#8999AB] border shadow-md flex flex-row justify-center items-center hover:scale-110 hover:text-black"
                         >
                            {/* route to create post page */}
                              <AiOutlinePlus />
                         </Link>
                         <Link
                              to="/notifications"
                              className=" relative rounded-[50%] w-[30px] h-[30px] text-[#8999AB] border shadow-md flex flex-row justify-center items-center hover:scale-110 hover:text-black"
                         >
                            {/* Route to navifications page */}
                              <MdNotifications />
                              <p className=" absolute -top-1 -right-1 text-[8px] text-white bg-headerAndButtonColor rounded-[50%] min-w-[20px] min-h-[20px] p-1   font-bold flex flex-row justify-center items-center">
                                   999
                              </p>
                         </Link>
                         <Link
                              to="/profile"
                              className=" w-[30px] h-[30px] rounded-[50%] shadow-lg hover:scale-110"
                         >
                            {/* Route to profile page */}
                              <img
                                   src="https://www.epicscotland.com/wp-content/uploads/2018/01/Business-Headshot_002.jpg"
                                   className=" w-full h-full rounded-[50%]"
                              />
                         </Link>
                    </div>
               </div>
          </div>
     );
};

export default Header;
