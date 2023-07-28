import React from "react";

const MessageSvg = ({ w, h }) => {
     return (
          <div>
               <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={w}
                    height={h}
                    viewBox="0 0 88 70"
                    fill="none"
               >
                    <path
                         d="M44 52C37.12 52 30.24 46.05 26.8 43.5C9.6 31.6 4.44 27.35 1 24.8V60.5C1 65.1936 4.85119 69 9.6 69H78.4C83.1488 69 87 65.1936 87 60.5V24.8C83.56 27.35 78.4 31.6 61.2 43.5C57.76 46.05 50.88 52 44 52ZM78.4 1H9.6C4.85119 1 1 4.80641 1 9.5V13.75C7.88 18.85 7.02 18.85 31.96 36.7C34.54 38.4 39.7 43.5 44 43.5C48.3 43.5 53.46 38.4 56.04 37.55C80.98 19.7 80.12 19.7 87 14.6V9.5C87 4.80641 83.1488 1 78.4 1Z"
                         fill="url(#paint0_linear_68_11850)"
                         stroke="#AB1917"
                         stroke-width="2"
                    />
                    <defs>
                         <linearGradient
                              id="paint0_linear_68_11850"
                              x1="9.5"
                              y1="1"
                              x2="72"
                              y2="81.5"
                              gradientUnits="userSpaceOnUse"
                         >
                              <stop stop-color="#AB1917" stop-opacity="0.65" />
                              <stop
                                   offset="1"
                                   stop-color="#4550CE"
                                   stop-opacity="0.17"
                              />
                         </linearGradient>
                    </defs>
               </svg>
          </div>
     );
};

export default MessageSvg;
