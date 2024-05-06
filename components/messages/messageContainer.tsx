import React, { useEffect } from "react";
import Messages from "./messages";
import MessageInput from "./messageInput";
import { MessageSquareText } from "lucide-react";
import useConversation from "@/zustand/useConversation";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
 

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-500 px-4 py-2 flex  mb-2">
            <Avatar>
              <AvatarImage src={selectedConversation.profilePic} />
            </Avatar>
            <p className="text-white p-2 font-serif text-lg tracking-wider ">{selectedConversation.fullName} </p>
          </div> 
          <Messages />
          <MessageInput />
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
