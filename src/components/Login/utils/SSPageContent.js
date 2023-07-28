import React from "react";
import SideBar from "./SideBar";

//Component for template in signin and signup pages
//=> side bar
//=> form at center

const SSPageContent = (props) => {
    //Signin and Signup content page
    return (
          <div className="w-full flex flex-row">
               <SideBar />
               <div className="  flex-1 flex flex-col justify-center items-center  ">{props.children}</div>
          </div>
     );
};

export default SSPageContent;
