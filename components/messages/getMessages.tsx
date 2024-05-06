import axiosinstance from "@/axiosinstance";
import useConversation from "@/zustand/useConversation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const {  setMessages, selectedConversation } = useConversation(state => state);

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				const res = await axiosinstance.get(`/messages/${selectedConversation._id}`)
                setMessages(res.data);
			} catch (error) {
				toast.error("messages are not shown");
			} finally {
				setLoading(false);
			}
		};

		if (selectedConversation?._id) getMessages();
	}, [selectedConversation?._id, setMessages]);

	return { loading };
};
export default useGetMessages;