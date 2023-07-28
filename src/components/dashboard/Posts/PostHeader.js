import React from "react";
import { FiSearch } from "react-icons/fi";


const PostHeader = () => {
     return (
          <div className="w-full h-[200px] p-2 flex flex-row justify-between">
               <div className="w-[200px] h-full flex flex-col justify-start pt-5 ps-5">
                    <h1 className=" text-4xl font-Lato font-bold text-[#0E347C]">
                         Posts
                    </h1>
               </div>

               <div className="min-[300px] h-full  flex flex-col justify-start gap-10 pt-14 pe-5">
                    <div className="relative">
                         <input
                              type="text"
                              name="Search"
                              placeholder="Search"
                              className="w-[233px] h-[34px] bg-[#CC8B8B1A] rounded-md  ps-8 "
                         />
                         <FiSearch className=" absolute top-[32%] left-[10px] text-" />
                    </div>
                    <div className=" w-[233px] h-fit flex flex-row justify-end">
                        <button className=" w-[100px] h-[30px] border-2 border-headerAndButtonColor text-headerAndButtonColor font-Lato text-[12px] rounded-md duration-500 hover:bg-headerAndButtonColor hover:text-white">Create a post</button>
                    </div>
               </div>
               
          </div>
     );
};

export default PostHeader;
