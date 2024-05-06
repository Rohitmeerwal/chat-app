import { createContext, useState, useEffect, useContext } from "react";
import io, { Socket } from "socket.io-client"; 
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface SocketContextProps {
	socket: Socket | null; 
	onlineUsers: string[];
}

const SocketContext = createContext<SocketContextProps>({ socket: null, onlineUsers: [] });

export const useSocketContext = () => {
	return useContext(SocketContext);
};

const SocketContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [socket, setSocket] = useState<Socket | null>(null); 
	const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
	const userProfile = useSelector((state: RootState) => state.profile);

	useEffect(() => {
		let newSocket: Socket | undefined;

		if (userProfile) {
			newSocket = io("http://localhost:5512", {
				query: {
					userId: userProfile._id,
				},
			});

			setSocket(newSocket);

			newSocket.on("getOnlineUsers", (users: string[]) => {
				setOnlineUsers(users);
			}); 
		}

		return () => {
			if (newSocket) {
				newSocket.close();
			}
		};
	}, [userProfile]);

	return <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>;
};

export default SocketContextProvider;
