"use client";
import SearchBar from "./searchBar";
import Conversation from "./conversation";
import Logout from "./logout";
interface SideBarProps {
  className?: string;
  toggleMessageContainer: (show: boolean, chatId?: string | null) => void;
}
const SideBar: React.FC<SideBarProps> = ({
  className,
  toggleMessageContainer,
}) => {
  return (
    <div
      className={`border-r border-slate-500 p-4 flex flex-col h-screen md:h-full ${className}`}
    >
      <div className="flex-grow">
        <SearchBar />
        <div className="border-b p-3 border-slate-500"></div>
        <Conversation toggleMessageContainer={toggleMessageContainer} />
      </div>
      <div className="mt-auto">
        <Logout />
      </div>
    </div>
  );
};

export default SideBar;
