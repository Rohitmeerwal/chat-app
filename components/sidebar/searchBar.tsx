"use client"
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import useConversation from "@/zustand/useConversation";
import useGetConversations from "./getConversation";
import toast from "react-hot-toast";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const conversation = conversations.find((c:any) =>
      c.fullName.toLowerCase().includes(search.toLowerCase()),
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else toast.error("No such user found!");
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <Input
        placeholder="Search...."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input input-bordered rounded-full"
      />
      <Button
        type="submit"
        className="btn btn-circle bg-sky-500 rounded-full  text-white"
      >
        <Search className="w-6 h-6 outline-none" />
      </Button>
    </form>
  );
};

export default SearchBar;
