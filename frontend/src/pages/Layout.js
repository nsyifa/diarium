// Layout.js
import React from "react";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-[#EFE8E1] grid grid-cols-8">
      <Sidebar />
      <div className="col-span-7 w-full h-full">{children}</div>
      {/* Other common elements can be placed here */}
    </div>
  );
};

export default Layout;
