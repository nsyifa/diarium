import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

export const ProfileIcon = () => {
  const [showIcons, setShowIcons] = useState(false);
  const { user, logout } = useUserContext();

  function handleClick() {
    setShowIcons(!showIcons);
  }

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="bg-[#D0C8C0] h-20 w-20 flex flex-row justify-center items-center rounded-full relative cursor-pointer"
        onClick={handleClick}
      >
        <img
          src={process.env.PUBLIC_URL + "searchbar/profile-icon.png"}
          alt="profile"
        />
      </div>
      <div
        id="icons"
        className={`flex flex-col items-center absolute transition-all duration-500 ease-in-out ${
          showIcons ? "top-36 h-72" : "none top-12 h-0 overflow-hidden"
        }`}
      >
        <div
          className="bg-[#D0C8C0] h-20 w-20 flex flex-row justify-center items-center rounded-full cursor-pointer"
          onClick={handleLogout}
        >
          <img
            src={process.env.PUBLIC_URL + "searchbar/logout.png"}
            alt="profile"
          />
        </div>
        <p className="text-[#646E78] font-semibold text-lg font-poppins mt-2">
          Logout
        </p>
        <Link to="/settings">
          <div className="bg-[#D0C8C0] h-20 w-20 flex flex-row justify-center items-center rounded-full mt-4">
            <img
              src={process.env.PUBLIC_URL + "searchbar/settings.png"}
              alt="profile"
            />
          </div>
        </Link>

        <p className="text-[#646E78] font-semibold text-lg font-poppins mt-2">
          Settings
        </p>
      </div>
    </div>
  );
};
