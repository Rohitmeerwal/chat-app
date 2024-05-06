"use client"
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center max-w-96 mx-auto">
        <div className="w-full p-7   rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
          <div className=" py-5">

          <h1 className="text-3xl font-semibold text-center text-gray-300">
            Log in to join the conversation or register for a new account in
            seconds!
          </h1>
          </div>
          <div className=" flex justify-between">
            <Button asChild className=" bg-blue-800 text-gray-300 hover:bg-blue-300">
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button asChild className=" bg-blue-800 text-gray-300 hover:bg-blue-300">
              <Link href="/auth/signin">Register</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
