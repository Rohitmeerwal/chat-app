/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import axiosinstance from "@/axiosinstance";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import Profile from "../profile/profile";

const Logout = () => {
  const router = useRouter();
  const handleLogout = async () => {
   try {
     await axiosinstance.post("/users/logout");
     toast.success("Logged out successfully");
     router.push("/auth/login");
   } catch (error) {
    toast.error("something went wrong");
   }
  };
  return (
    <div className="flex justify-between items-center">
    <div>
      <Profile/>
    </div>
    <div onClick={handleLogout} className=" cursor-pointer text-white flex gap-2">
      <LogOut />
      <p>Logout</p>
    </div>
    </div>
  );
};

export default Logout;
