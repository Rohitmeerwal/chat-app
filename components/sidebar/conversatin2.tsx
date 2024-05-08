"use client";
/* eslint-disable @next/next/no-img-element */
import useConversation from "@/zustand/useConversation";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useSocketContext } from "../context/SocketContext";

interface ConversationProps {
  conversation: {
    _id: string;
    profilePic: string;
    fullName: string;
  };
  lastIdx?: boolean;
  emoji: React.ReactNode;
  toggleMessageContainer: (show: boolean, chatId?: string | null) => void;
}
const Conversation2: React.FC<ConversationProps> = ({
  conversation,
  lastIdx = false,
  emoji,
  toggleMessageContainer,
}) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  const isSelected = selectedConversation?._id === conversation._id;
  const handleConversationClick = () => {

    setSelectedConversation(conversation);
    toggleMessageContainer(true, conversation._id);
  };
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				${isSelected ? "bg-sky-500" : ""}
			`}
        onClick={handleConversationClick}
      >
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <div className=" flex ">
              <div className={`avatar ${isOnline ? "online" : ""}`}>
                <Avatar>
                  <AvatarImage src={conversation.profilePic} />
                </Avatar>
              </div>

              <p className="font-bold text-gray-200 p-2">
                {conversation.fullName}
              </p>
            </div>
            <span className="text-2xl">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation2;
