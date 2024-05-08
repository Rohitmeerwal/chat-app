import React, { useEffect, useState } from "react";
import SideBar from "../sidebar/sideBar";
import MessageContainer from "../messages/messageContainer";
import axiosinstance from "@/axiosinstance";
import { setProfile } from "@/redux/reducers/slice";
import { useDispatch } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();
  const [showMessageContainer, setShowMessageContainer] = useState(false);

  const toggleMessageContainer = (
    show: boolean,
    chatId: string | null = null,
  ) => {
    setShowMessageContainer(show);
    document.body.classList.toggle("overflow-hidden", show);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosinstance.get("/users/fetch");
        const user = res.data;
        dispatch(setProfile(user));
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 relative">
      {!showMessageContainer && (
        <SideBar
          className="w-full lg:flex"
          toggleMessageContainer={toggleMessageContainer}
        />
      )}
      {showMessageContainer && (
        <MessageContainer
          className="flex w-96 h-[650px] lg:w-0 lg:h-[550px]"
          toggleMessageContainer={toggleMessageContainer}
        />
      )}
    </div>
  );
};

export default Main;
