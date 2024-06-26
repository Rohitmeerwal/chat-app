"use client"
import { Send } from "lucide-react";
import React, { useState } from "react";
import useSendMessage from "./sendMessage";


interface SideBarProps {
  className?: string;
}
const MessageInput: React.FC<SideBarProps> = ({ className }) => {
  const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e:any) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};
  return (
    <form className={`px-4 my-3 ${className}`} onSubmit={handleSubmit}>
      <div className="w-full relative">
        <input
          name="message"
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
          placeholder="Send a message"
          value={message}
					onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit" 
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? <div className='loading loading-spinner'></div> :<Send />}
          
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
