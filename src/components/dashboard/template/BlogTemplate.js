import React from "react";

import Header from "./Header";
import SideNav from "./SideNav";

// Basic template for dashboard (same code for add dashboard)
const BlogTemplate = (props) => {
     return (
          <div className="flex flex-col ">
               <Header />

               <div className=" flex flex-row ">
                    <SideNav />
                    <span className="w-[0.2px] h-screen"></span>
                    <div className="flex-1 ">{props.children}</div>
               </div>
          </div>
     );
};

export default BlogTemplate;
