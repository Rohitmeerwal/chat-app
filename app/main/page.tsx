"use client";
import SocketContextProvider from "@/components/context/SocketContext";
import Main from "@/components/main/main";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";

const page = () => {
  return (
    <Provider store={store}>
      <SocketContextProvider>
        <div className=" h-screen flex justify-center items-center bg-blue-400 bg-backgroundImage">
          <Main />
        </div>
      </SocketContextProvider>
    </Provider>
  );
};

export default page;
