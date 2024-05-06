
"use client"
/* eslint-disable @next/next/no-img-element */
import { extractTime } from "@/utils/extractTime";
import useConversation from "@/zustand/useConversation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";


interface MessageProps {
  message: {
   
    _id: string;
    senderId: string;
    receiverId: string;
    message: string;
    createdAt: string;
    updatedAt: string;

  };
}
const Message: React.FC<MessageProps> = ({ message }) => {

  const userProfile = useSelector((state: RootState) => state.profile);
  const { selectedConversation } = useConversation();
	const fromMe = message.senderId === userProfile._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? userProfile.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-indigo-500" : "";

	// const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor}  pb-2`}>{message.message}</div>
			<div className='chat-footer text-black text-xs flex gap-1 items-center'>{formattedTime}</div>
		</div>
	);
};
export default Message;
