/** @type {import('tailwindcss').Config} */
module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
          extend: {
               spacing: {
                    sideBarWidth: "388px",
                    inputWidth: "364px",
                    loginButtonWidth : "180px"
               },
               backgroundImage: {
                    sideBarBackgroundGradient:
                         "linear-gradient(135deg, #174066 0%, #AB1917 0.01%, #F9D401 100%)",
               },
               colors: {
                    headerAndButtonColor: "#AB1917",
                    inputBorderColor: "#D8E1F2",
                    linkColor  :"#4550CE",
                    alterLoginColor : "#545C6C",
                    inputPlaceholderColor : "#9EACC9",
                    
               },
               fontFamily: {
                    Roboto: ["Roboto", "Helvetica", "Arial", "sans-serif"],
                    Lato: ["Lato", "Helvetica", "Arial", "sans-serif"],
               },
               boxShadow : {
                createPasswordCard : " 0px 4px 30px 0px rgba(191, 221, 248, 0.35)"
               }
          },
     },
     plugins: [],
};
