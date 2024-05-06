/* eslint-disable react-hooks/rules-of-hooks */
import axiosinstance from "@/axiosinstance";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import Profile from "../profile/profile";
import { Button } from "../ui/button";

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

  const handleDelete = async()=>{
    try {
      await axiosinstance.delete("/users/delete")
      toast.success("Your account has been deleted  successfully");
      router.push("/auth/signin");
    } catch (error) {
    }
  }
  return (
    <div className="flex justify-between items-center">
    <div>
      <Profile/>
    </div>
    <div>
    <Button onClick={handleDelete} variant="destructive" className=" bg-red-700 rounded-full mx-2 hover:bg-red-900 " >
     <p className=" max-w-10">Delete
      </p> 
    </Button>
    </div>
    <div onClick={handleLogout} className=" cursor-pointer text-white flex gap-2">
      <LogOut />
      <p>Logout</p>
    </div>
    </div>
  );
};

export default Logout;
