import React, { useEffect, useRef } from 'react'
import Message from './message'
import useGetMessages from './getMessages';
import MessageSkeleton from '../skeletons/skeletons';
import useConversation from '@/zustand/useConversation';
import useListenMessages from '../useListenMessages';

const Messages = () => {
  const {  loading } = useGetMessages();
  const { messages } = useConversation(state => state);
  useListenMessages();
  const lastMessageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className='px-4 flex-1 overflow-auto'>
			{!loading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						<Message message={message} />
					</div>
				))}

			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	);
};

export default Messages
