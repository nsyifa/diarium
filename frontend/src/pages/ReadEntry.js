import React from "react";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";
import Layout from "./Layout";
import { Navigate } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import { ProfileIcon } from "../components/ProfileIcon";
import PlusButton from "../components/PlusButton";

const ReadEntry = () => {
  const { user, logout } = useUserContext();

  const handleLogout = () => {
    logout();
    window.location.reload();
  };

  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="w-[100vw] h-[100vh] bg-[#D0C8C0] flex flex-row items-center">
      <img
        src={process.env.PUBLIC_URL + "temppages/readentry.png"}
        className="h-[800px] mx-auto"
      />
    </div>
  );
};

export default ReadEntry;
