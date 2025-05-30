import React from "react";
import { Message } from "@/molecules/message/Message";
import { MessageInput } from "@/molecules/messageinput/MessageInput";
import { ChatWindowProps } from "./chatwindow.types";

export const ChatWindow: React.FC<ChatWindowProps> = ({
  messages,
  onSendMessage,
  placeholder,
}) => {
  return (
    <div className="chat-window">
      <div className="message-list">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <MessageInput onSendMessage={onSendMessage} placeholder={placeholder} />
    </div>
  );
};
