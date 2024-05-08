"use client";
import { create } from "zustand";

interface Message {
  _id: string;
  senderId: string;
  receiverId: string;
  message: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ConversationState {
  selectedConversation: any | null;
  setSelectedConversation: (selectedConversation: any | null) => void;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
}

const useConversation = create<ConversationState>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => {
    set({ selectedConversation});
  },
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
