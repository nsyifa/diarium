import React from "react";

const Searchbar = ({ classn }) => {
  return (
    <div
      id="searchbar"
      className={`bg-[#646E78] rounded-full flex flex-row items-center px-7 py-4 w-[80%] h-max justify-between ml-20 ${classn}`}
    >
      <div className="flex flex-row justify-start items-center gap-6 w-[95%]">
        <img
          src={process.env.PUBLIC_URL + "searchbar/search.png"}
          alt="search"
        />
        <input
          type="text"
          placeholder="Search an entry here..."
          className="font-poppins text-lightcreme font-semibold italic outline-none border-none bg-transparent w-full"
        />
      </div>
      <img
        src={process.env.PUBLIC_URL + "searchbar/filter.png"}
        alt="filter"
        className="cursor-pointer"
      />
    </div>
  );
};

export default Searchbar;
