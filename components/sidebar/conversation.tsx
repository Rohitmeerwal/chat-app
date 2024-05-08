"use client";
import Conversation2 from "./conversatin2";
import useGetConversations from "./getConversation";
import { getRandomEmoji } from "@/utils/emoji";

interface Conversation {
  _id: string;
  profilePic: string;
  fullName: string;
}
interface ConversationProps {
  toggleMessageContainer: (show: boolean, chatId?: string | null) => void;
}
const Conversation: React.FC<ConversationProps> = ({
  toggleMessageContainer,
}) => {
  const {
    loading,
    conversations,
  }: { loading: boolean; conversations: Conversation[] } =
    useGetConversations();

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => (
        <Conversation2
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
          toggleMessageContainer={toggleMessageContainer}
        />
      ))}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};
export default Conversation;
