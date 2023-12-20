import React from "react";
import { Link } from "react-router-dom";

const SidebarMenu = ({ img, label, link, click_location }) => {
  const clicked = click_location == window.location.href ? true : false;
  return (
    <Link to={link}>
      <div
        className={`mb-4 h-max w-max ${
          clicked ? "bg-[#D0C8C0]" : "bg-transparent"
        }  rounded-xl py-2 pl-3 pr-5 flex flex-row justify-center items-center font-poppins font-bold text-base ${
          clicked ? "text-themeblack" : "text-lightcreme"
        }  gap-3`}
      >
        <img
          src={
            process.env.PUBLIC_URL + img + (clicked ? "-clicked.png" : ".png")
          }
          alt={label}
        />
        <p>{label}</p>
      </div>
    </Link>
  );
};

export default SidebarMenu;
