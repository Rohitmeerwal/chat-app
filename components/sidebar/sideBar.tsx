"use client"
import React from "react";
import SearchBar from "./searchBar";
import Conversation from "./conversation";
import Logout from "./logout";

const SideBar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col"> 
      <SearchBar/>
      <div  className="border-b p-3 border-slate-500"></div>
      <Conversation/>
      <Logout/>
    </div>
  );
};

export default SideBar;
