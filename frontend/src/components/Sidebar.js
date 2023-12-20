// Sidebar.js
import React from "react";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {
  return (
    <div className="col-span-1 h-screen bg-[#646E78] border-r-themeblack border-r-1 relative">
      <div className="w-[99.5%] bg-[#D0C8C0] h-min flex flex-row justify-start pl-10 gap-3 items-center border-r-themeblack border-r-1">
        <img
          src={process.env.PUBLIC_URL + "/sidebar/diariumicon.png"}
          alt="diarium-icon"
          className="h-8 w-8"
        />
        <p className="font-urbanist text-2xl py-4 text-themeblack">Diarium</p>
      </div>
      <div className="w-full pl-8 mt-9 flex flex-col justify-center items-start font-poppins">
        <p className="text-lightcreme text-sm font-semibold tracking-wider mb-3">
          MENU
        </p>
        <SidebarMenu
          img="sidebar/dashboard"
          label="Dashboard"
          click_location="http://localhost:3000/"
          link="/"
        />
        <SidebarMenu
          img="sidebar/analytics"
          label="Analytics"
          click_location="http://localhost:3000/analytics"
          link="/analytics"
        />
        <SidebarMenu
          img="sidebar/entries"
          label="Entries"
          click_location="http://localhost:3000/entries"
          link="/entries"
        />
        <SidebarMenu
          img="sidebar/calendar"
          label="Calendar"
          click_location="http://localhost:3000/calendar"
          link="#"
        />
      </div>
      <div className="w-full pl-8 mt-9 flex flex-col justify-center items-start font-poppins">
        <p className="text-lightcreme text-sm font-semibold tracking-wider mb-3">
          SETTINGS
        </p>
        <SidebarMenu
          img="sidebar/notification"
          label="Notification"
          click_location="http://localhost:3000/notification"
          link="#"
        />
        <SidebarMenu
          img="sidebar/settings"
          label="Settings"
          click_location="http://localhost:3000/settings"
          link="/settings"
        />
      </div>

      <div className="w-[99.5%] bg-[#D0C8C0] h-min border-r-themeblack border-r-1 absolute bottom-0 pt-8 pb-10 px-5">
        <div className="flex flex-row bg-[#646E78] rounded-lg gap-2 py-2 px-3">
          <div className="flex flex-row justify-center items-center gap-3 bg-[#D0C8C0] py-1 px-4 rounded-lg border-[#5C5F65] border-1">
            <img
              src={process.env.PUBLIC_URL + "sidebar/lightmode.png"}
              alt="lightmode"
              className="h-4"
            />
            <p className="font-poppins text-sm">Light</p>
          </div>
          <div className="flex flex-row justify-center items-center gap-3 bg-transparent py-1 px-4 rounded-lg border-[#5C5F65] border-1">
            <img
              src={process.env.PUBLIC_URL + "sidebar/darkmode.png"}
              alt="lightmode"
              className="h-4"
            />
            <p className="font-poppins text-sm text-lightcreme">Dark</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
