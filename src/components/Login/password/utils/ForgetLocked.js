import React from "react";

const ForgetLocked = ({ w, h, isLocked }) => {
     const left = `left-[${isLocked ? "10" : "30"}px]`;

     return (
          <div className=" relative">
               <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    className={` absolute -top-[17px] ${left}`}
               >
                    <path
                         d="M4.1243 19.3401V6.23403C4.1243 4.64337 4.58335 3.35421 7.39389 3.35421H14.8182C17.759 3.35421 18.0875 4.64337 18.0875 6.23403V19.3401H21.4412V4.49352C21.4412 2.01211 19.2745 0 16.6011 0H5.61064C2.93754 0 0.770508 2.01211 0.770508 4.49352V19.3398H4.1243V19.3401Z"
                         fill="#AB1917"
                    />
               </svg>
               <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={w}
                    height={h}
                    viewBox="0 0 45 38"
                    fill="none"
               >
                    <path
                         d="M38.742 1.80078H5.46944C3.00103 1.80078 1 3.81289 1 6.2943V32.5064C1 34.9881 3.00103 37 5.46944 37H38.742C41.2107 37 43.2114 34.9878 43.2114 32.5064V6.2943C43.2117 3.81289 41.2107 1.80078 38.742 1.80078Z"
                         fill="url(#paint0_linear_68_11829)"
                         stroke="#AB1917"
                         stroke-opacity="0.25"
                         stroke-width="2"
                    />
                    <defs>
                         <linearGradient
                              id="paint0_linear_68_11829"
                              x1="6"
                              y1="2"
                              x2="52.5"
                              y2="45.5"
                              gradientUnits="userSpaceOnUse"
                         >
                              <stop stop-color="#AB1917" stop-opacity="0.65" />
                              <stop
                                   offset="1"
                                   stop-color="#4550CE"
                                   stop-opacity="0"
                              />
                         </linearGradient>
                    </defs>
               </svg>
          </div>
     );
};

export default ForgetLocked;
