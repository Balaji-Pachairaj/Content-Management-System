import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

const obj = {
     name: "sadfasfs",
     id: "asdffdsa ",
     overall: "fasfdafdas",
     comments: "10000",
     date: {
          day: "24",
          month: "04",
          year: "2003",
     },
     category: "sports",
     status: "Published",
};

const IndivPost = (props) => {
     const postObj = props.postData;

     let date = `${postObj.date.day}/${postObj.date.month}/${postObj.date.year}`;

     const viewHandler = (e) => {};
     const editHandler = (e) => {};
     const deleteHandler = (e) => {};

     return (
          <div className="w-full h-[70px] border-b-2 flex flex-row" key={postObj.id}>
               <div className=" w-[50px] h-full flex flex-row justify-center items-center">
                    <input
                         type="checkbox"
                         name="Select All"
                         className="ms-2 text-[#9CB2CD] w-[18px] h-[18px] ps-2 cursor-pointer"
                    />
               </div>

               <div className=" w-[268px] h-full  flex flex-col justice-around gap-1 p-3">
                    <p className=" text-[#172B70] font-Lato font-bold text-[12px] truncate ">
                         {postObj.name}
                    </p>
                    <div className=" text-[14px] text-headerAndButtonColor w-full h-max flex flex-row gap-5 ">
                         <button
                              className=" cursor-pointer flex flex-row gap-1"
                              onClick={viewHandler}
                         >
                              <AiOutlineEye className=" text-[20px]" /> View
                         </button>
                         <button
                              className=" cursor-pointer flex flex-row gap-1"
                              onClick={editHandler}
                         >
                              <BiEdit className=" text-[20px]" />
                              Edit
                         </button>
                         <button
                              className=" cursor-pointer flex flex-row gap-1"
                              onClick={deleteHandler}
                         >
                              <MdDeleteOutline className=" text-[20px]" />
                              Delete
                         </button>
                    </div>
               </div>

               <div className="w-[180px] h-full flex flex-row items-center ps-4 pe-2">
                    <p className=" text-[#577496] text-[12px] truncate font-Lato">
                         {postObj.overall}
                    </p>
               </div>

               <div className="w-[150px] h-full flex flex-row items-center ps-4 gap-2 font-Lato flex-wrap ">
                    <p className=" text-[16px] font-bold">{postObj.comments}</p>
                    <p className="cursor-pointer text-headerAndButtonColor text-[16px] underline underline-offset-1  ">
                         View all
                    </p>
               </div>

               <div className="w-[180px] h-full flex flex-row items-center ps-4 ">
                    <span className=" text-[16px] flex flex-row gap-1">
                         <p className=" text-[#76849F]">Created</p>
                         <p className=" text-[#172B70] font-semibold">{date}</p>
                    </span>
               </div>

               <div className=" w-[180px] h-full flex flex-row items-center ps-6">
                    <p className=" text-[#577496]">{postObj.category}</p>
               </div>
               <div className=" w-[180px] h-full flex flex-row items-center ps-4">
                    <p className=" text-[#577496]">{postObj.status}</p>
               </div>
          </div>
     );
};

export default IndivPost;
