"use client";
import React, { useEffect } from "react";
import Messages from "./messages";
import MessageInput from "./messageInput";
import { ArrowBigLeft, MessageSquareText } from "lucide-react";
import useConversation from "@/zustand/useConversation";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
interface SideBarProps {
  className?: string;
  toggleMessageContainer: (show: boolean, chatId?: string | null) => void;
}

const MessageContainer: React.FC<SideBarProps> = ({
  className,
  toggleMessageContainer,
}) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(selectedConversation);
  }, [selectedConversation, setSelectedConversation]);

  const handleSidebarOpen = () => {
    toggleMessageContainer(false);
  };
  return (
    <div className={`md:min-w-[450px] h-[100%] flex flex-col ${className}`}>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 flex justify-between  mb-2">
            <div className=" flex ">
              <Avatar>
                <AvatarImage src={selectedConversation.profilePic} />
              </Avatar>
              <p className="text-white p-2 font-serif text-lg tracking-wider ">
                {selectedConversation.fullName}{" "}
              </p>
            </div>
            <button className="flex  text-black" onClick={handleSidebarOpen}>
              <ArrowBigLeft className="h-8  " />
              <p className="mt-1">Back</p>
            </button>
          </div>
          <Messages />

          <MessageInput className="mt-100" />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const userProfile = useSelector((state: RootState) => state.profile);
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {userProfile.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <MessageSquareText className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
