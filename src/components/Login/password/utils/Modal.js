import React from "react";

const Modal = (props) => {
     return (
          <div className="w-full h-screen flex flex-row justify-center items-center">
               {props.children}
          </div>
     );
};

export default Modal;
