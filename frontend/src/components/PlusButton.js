import React, { useState } from "react";

const PlusButton = () => {
  const [showButtons, setShowButtons] = useState(false);

  function handleClick() {
    setShowButtons(!showButtons);
  }

  return (
    <React.Fragment>
      <div
        className="w-32 h-32 mr-7 bg-[#CBDCE8] shadow-md hover:shadow-xl transform hover:translate-y-[-2px] rounded-full text-[#6D8A96] text-9xl flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer relative"
        onClick={handleClick}
      >
        <img
          src={process.env.PUBLIC_URL + "/searchbar/plusbutton.png"}
          alt="plus button"
        />
      </div>
      <div
        id="icons"
        className={`flex flex-col gap-6 items-center absolute transition-all duration-500 ease-in-out ${
          showButtons ? "bottom-52 h-max" : "bottom-12 h-0 overflow-hidden"
        }`}
      >
        <div className="bg-[#6096BA] py-4 px-4 w-full h-max rounded-xl drop-shadow-xl font-poppins text-lightcreme text-lg font-normal italic mr-16 cursor-pointer hover:shadow-xl duration-300 ease-in-out">
          Add a new entry
        </div>
        <div className="bg-[#6096BA] py-4 px-4 w-full h-max rounded-xl drop-shadow-xl font-poppins text-lightcreme text-lg font-normal italic mr-16 cursor-pointer hover:shadow-xl duration-300 ease-in-out">
          Add a new book
        </div>
      </div>
    </React.Fragment>
  );
};

export default PlusButton;
