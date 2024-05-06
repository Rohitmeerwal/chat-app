"use client"
import axiosinstance from "@/axiosinstance";
import useConversation from "@/zustand/useConversation";
import { useState } from "react";
import toast from "react-hot-toast";

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();

	const sendMessage = async (message: any) => {
        setLoading(true);
		try {
            const res = await axiosinstance.post(`/messages/send/${selectedConversation._id}`, {message})
			setMessages([...messages, res.data]);
		} catch (error) {
			toast.error("message not send ");
		} finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
};
export default useSendMessage;