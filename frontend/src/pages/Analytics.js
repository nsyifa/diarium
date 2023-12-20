import React from "react";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";
import Layout from "./Layout";
import { Navigate } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import { ProfileIcon } from "../components/ProfileIcon";
import PlusButton from "../components/PlusButton";

const Analytics = () => {
  const { user, logout } = useUserContext();

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <Layout>
      <div className="h-full w-full grid grid-rows-11">
        <div className="flex flex-row w-full h-full row-span-2 items-center gap-20">
          <Searchbar />
          <ProfileIcon />
        </div>
        <div className="px-20 gap-20 w-full h-full flex flex-row row-start-3 row-end-[10]">
          <img
            src={process.env.PUBLIC_URL + "temppages/analytics.png"}
            className="h-[600px]"
          />
        </div>
        <div className="flex flex-row w-full h-full row-start-[10] row-span-2 justify-end items-start">
          <PlusButton />
        </div>
        {/* Home<button onClick={handleLogout}>Logout</button> */}
      </div>
    </Layout>
  );
};

export default Analytics;
