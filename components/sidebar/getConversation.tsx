"use client"
import axiosinstance from "@/axiosinstance";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);

	useEffect(() => {
		const getConversations = async () => {
			setLoading(true);
			try {
				const res = await axiosinstance.get('/user')
                setConversations(res.data);
			} catch (error) {
				toast.error("something went wrong to fetch conversation");
			} finally {
				setLoading(false);
			}
		};

		getConversations(); 
	}, []);

	return { loading, conversations };
};
export default useGetConversations;



	