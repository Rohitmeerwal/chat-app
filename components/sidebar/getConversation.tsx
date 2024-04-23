
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
                // const data = JSON.parse(JSON.stringify(res.data));	
                console.log(res.data, "api usrs41651")		
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