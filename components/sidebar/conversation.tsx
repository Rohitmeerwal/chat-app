import React from "react";
import Conversation2 from "./conversatin2";
import useGetConversations from "./getConversation";
import { getRandomEmoji } from "@/utils/emoji";

const Conversation = () => {
  const { loading, conversations } = useGetConversations();
  console.log(conversations, "conversations");
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation2
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};
export default Conversation;
