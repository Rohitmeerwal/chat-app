import { useEffect } from "react";
import useConversation from "../zustand/useConversation";
import { useSocketContext } from "./context/SocketContext";

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        if (socket) {
            const handleNewMessage = (newMessage: any) => {
                const sound = new Audio("/sound/notification.mp3");
                sound.play();
                setMessages([...messages, newMessage]);
            };

            socket.on("newMessage", handleNewMessage);

            return () => {
                socket.off("newMessage", handleNewMessage);
            };
        }
    }, [socket, setMessages, messages]);

};

export default useListenMessages;
