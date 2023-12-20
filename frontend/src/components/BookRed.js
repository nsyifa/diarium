import React from "react";

export const BookRed = ({ title }) => {
  return (
    <div className="w-[146px] h-[195px] bg-[#aa767c] rounded-[5px] shadow-[6px_6px_10px_#00000033]">
      <div className="relative w-[147px] h-[195px] cursor-pointer">
        <div className="absolute w-[146px] h-[195px] top-0 left-0 rounded-[5px_20px_20px_5px] [background:linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0)_33.85%,rgba(255,255,255,0)_63.02%,rgba(255,255,255,0.15)_100%)]" />
        <div className="absolute w-[72px] h-[37px] top-[23px] left-[37px] [text-shadow:-1px_-1px_0px_#00000033] [font-family:'Raleway-Bold',Helvetica] font-bold text-[#333333e6] text-[15px] text-center tracking-[0] leading-[normal]">
          {title}
        </div>
        <img
          className="left-0 absolute w-[3px] h-[194px] top-0"
          src="https://c.animaapp.com/1jzP6qws/img/binding-shadow-left.svg"
        />
        <img
          className="left-[144px] absolute w-[3px] h-[194px] top-0"
          src="https://c.animaapp.com/1jzP6qws/img/binding-shadow-right.svg"
        />
        <div className="absolute w-[7px] h-[195px] top-0 left-[7px] blur-[0.1px] [background:linear-gradient(180deg,rgba(200,124,124,0)_0%,rgba(125.38,24.03,24.03,0.6)_35.42%,rgba(125,24,24,0.6)_64.06%,rgba(200,124,124,0)_100%)] opacity-[0.55]" />
      </div>
    </div>
  );
};

export default BookRed;
