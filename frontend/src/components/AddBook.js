import React from "react";

const AddBook = () => {
  return (
    <div className="flex items-center justify-center w-[146px] h-[195px] bg-[#CBDCE8] rounded-lg cursor-pointer border-4 border-dashed border-[#6D8A96]">
      <img src={process.env.PUBLIC_URL + "searchbar/plusbutton.png"} />
    </div>
  );
};

export default AddBook;
