
import React from 'react';
import { cn } from '@/lib/utils';

type MessageBubbleProps = {
  message: string;
  className?: string;
};

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, className }) => {
  return (
    <div className={cn("message-bubble bg-white p-4 rounded-2xl shadow-md", className)}>
      <p className="text-gray-800 whitespace-pre-wrap">{message}</p>
    </div>
  );
};

export default MessageBubble;
